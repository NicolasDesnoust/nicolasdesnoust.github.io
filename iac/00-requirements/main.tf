############################################
# Define module for naming convention & tags
############################################
module "naming" {
  source = "../modules/naming"

  project              = var.project
  environment          = var.environment
  environment_category = var.environment_category
  custom_global_tags   = var.custom_global_tags
}

# Bucket that stores TFStates
resource "aws_s3_bucket" "terraform_states" {
  bucket = format(module.naming.pattern1, "terraform-states")

  # Prevent accidental deletion of this S3 bucket
  lifecycle {
    prevent_destroy = true
  }
}

# This allows you to see older versions of the file and revert to those older versions at any time,
# which can be a useful fallback mechanism if something goes wrong:
resource "aws_s3_bucket_versioning" "bucket_versioning" {
  bucket = aws_s3_bucket.terraform_states.id

  versioning_configuration {
    status = "Enabled"
  }
}

# This ensures that your state files, and any secrets they might contain, are always encrypted on disk when stored in S3
resource "aws_s3_bucket_server_side_encryption_configuration" "default" {
  bucket = aws_s3_bucket.terraform_states.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# Since your Terraform state files may contain sensitive data and secrets,
# it’s worth adding this extra layer of protection to ensure no one on your
# team can ever accidentally make this S3 bucket public.
resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket                  = aws_s3_bucket.terraform_states.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# DynamoDB table to use for locking
resource "aws_dynamodb_table" "terraform_locks" {
  name         = format(module.naming.pattern1, "running-locks")
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }

  deletion_protection_enabled = true
}

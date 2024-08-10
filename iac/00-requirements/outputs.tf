output "tfstates_bucket_name" {
  description = "Name of the S3 bucket that stores Terraform states"
  value       = aws_s3_bucket.terraform_states.id
}

output "locks_table_name" {
  description = "Name of the DynamoDB table to use for state locking"
  value       = aws_dynamodb_table.terraform_locks.name
}

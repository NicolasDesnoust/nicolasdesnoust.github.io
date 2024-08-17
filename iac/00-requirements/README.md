# 00-Requirements

This Terraform project is designed to manage the essential infrastructure requirements for Terraform state management. It sets up a DynamoDB table for state locking and an S3 bucket for storing Terraform states securely.

## Context

When setting up an application on an AWS account for the first time, it's crucial to establish a reliable foundation for infrastructure management. This Terraform project automates the creation of foundational components necessary for managing Terraform states and ensuring operational consistency.

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.0.11 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | >= 3.74.2 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | 5.62.0 |

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_naming"></a> [naming](#module\_naming) | ../modules/naming | n/a |

## Resources

| Name | Type |
|------|------|
| [aws_dynamodb_table.terraform_locks](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dynamodb_table) | resource |
| [aws_s3_bucket.terraform_states](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket_public_access_block.public_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) | resource |
| [aws_s3_bucket_server_side_encryption_configuration.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_server_side_encryption_configuration) | resource |
| [aws_s3_bucket_versioning.bucket_versioning](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_versioning) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_aws_region"></a> [aws\_region](#input\_aws\_region) | Region used to deploy resources | `string` | n/a | yes |
| <a name="input_custom_global_tags"></a> [custom\_global\_tags](#input\_custom\_global\_tags) | A map of custom tags applied globally to all resources | `map(string)` | n/a | yes |
| <a name="input_environment"></a> [environment](#input\_environment) | Environment label | `string` | n/a | yes |
| <a name="input_environment_category"></a> [environment\_category](#input\_environment\_category) | AWS environment segregation (nonprod, prod) | `string` | n/a | yes |
| <a name="input_project"></a> [project](#input\_project) | Project label | `string` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_locks_table_name"></a> [locks\_table\_name](#output\_locks\_table\_name) | Name of the DynamoDB table to use for state locking |
| <a name="output_tfstates_bucket_name"></a> [tfstates\_bucket\_name](#output\_tfstates\_bucket\_name) | Name of the S3 bucket that stores Terraform states |
<!-- END_TF_DOCS -->

# Lambda module

This Terraform module is a wrapper around the official AWS Lambda module, designed to streamline the creation and management of AWS Lambda functions. It provides default values tailored to the specific needs of the project, allowing for easier configuration and faster deployment. The module simplifies the setup process by encapsulating best practices and pre-configured settings, ensuring consistency across all Lambda functions deployed within the project. Users can override the defaults as needed, while still benefiting from the optimizations and convenience offered by the wrapper.

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | ~> 1.0 |
| <a name="requirement_archive"></a> [archive](#requirement\_archive) | ~> 2.3.0 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | ~> 5.32.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_archive"></a> [archive](#provider\_archive) | ~> 2.3.0 |

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_lambda_function"></a> [lambda\_function](#module\_lambda\_function) | terraform-aws-modules/lambda/aws | 7.2.1 |

## Resources

| Name | Type |
|------|------|
| [archive_file.function_archive](https://registry.terraform.io/providers/hashicorp/archive/latest/docs/data-sources/file) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_archive_path"></a> [archive\_path](#input\_archive\_path) | Archive path | `string` | n/a | yes |
| <a name="input_env"></a> [env](#input\_env) | Environment ID | `string` | n/a | yes |
| <a name="input_environment_variables"></a> [environment\_variables](#input\_environment\_variables) | Additional environment variables that will be available in the lambda function | `map(string)` | `{}` | no |
| <a name="input_handler_path"></a> [handler\_path](#input\_handler\_path) | Handler path | `string` | n/a | yes |
| <a name="input_infrastructure_prefix"></a> [infrastructure\_prefix](#input\_infrastructure\_prefix) | Infrastructure prefix of all resource names | `string` | n/a | yes |
| <a name="input_lambda_role"></a> [lambda\_role](#input\_lambda\_role) | IAM role ARN attached to the Lambda Function. This governs both who / what can invoke your Lambda Function, as well as what resources our Lambda Function has access to. See Lambda Permission Model for more details. | `string` | n/a | yes |
| <a name="input_layers"></a> [layers](#input\_layers) | List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function. | `list(string)` | `[]` | no |
| <a name="input_memory_size"></a> [memory\_size](#input\_memory\_size) | Memory size | `number` | `256` | no |
| <a name="input_module_name"></a> [module\_name](#input\_module\_name) | Module name | `string` | n/a | yes |
| <a name="input_naming_pattern"></a> [naming\_pattern](#input\_naming\_pattern) | Naming pattern for all resources | `string` | n/a | yes |
| <a name="input_timeout"></a> [timeout](#input\_timeout) | The amount of time your Lambda Function has to run in seconds. | `number` | `3` | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_arn"></a> [arn](#output\_arn) | n/a |
| <a name="output_function_arn"></a> [function\_arn](#output\_function\_arn) | n/a |
| <a name="output_function_name"></a> [function\_name](#output\_function\_name) | n/a |
| <a name="output_function_qualified_arn"></a> [function\_qualified\_arn](#output\_function\_qualified\_arn) | n/a |
<!-- END_TF_DOCS -->

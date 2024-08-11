# API module

This Terraform module creates an AWS API Gateway REST API based on an OpenAPI specification. The module ensures that incoming requests are validated against the OpenAPI schema, enforcing compliance with the defined API contract. This setup helps maintain API reliability and security by rejecting malformed or unauthorized requests. It simplifies the process of deploying a fully documented and validated API on AWS, aligning closely with best practices for API management.

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | ~> 1.0 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | ~> 5.32.0 |
| <a name="requirement_template"></a> [template](#requirement\_template) | ~> 2.2.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | ~> 5.32.0 |
| <a name="provider_local"></a> [local](#provider\_local) | n/a |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [aws_api_gateway_deployment.api](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/api_gateway_deployment) | resource |
| [aws_api_gateway_rest_api.api](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/api_gateway_rest_api) | resource |
| [aws_lambda_permission.lambda_permissions](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_permission) | resource |
| [local_sensitive_file.api](https://registry.terraform.io/providers/hashicorp/local/latest/docs/resources/sensitive_file) | resource |
| [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) | data source |
| [aws_region.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/region) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_env"></a> [env](#input\_env) | Environment ID | `string` | n/a | yes |
| <a name="input_functions"></a> [functions](#input\_functions) | n/a | <pre>map(object({<br>    arn  = string<br>    name = string<br>  }))</pre> | n/a | yes |
| <a name="input_naming_pattern"></a> [naming\_pattern](#input\_naming\_pattern) | Naming pattern for all resources | `string` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_api_arn"></a> [api\_arn](#output\_api\_arn) | n/a |
| <a name="output_id"></a> [id](#output\_id) | n/a |
| <a name="output_url"></a> [url](#output\_url) | n/a |
<!-- END_TF_DOCS -->

# 01-Portfolio

This Terraform project manages the infrastructure for my personal portfolio website. It automates the provisioning and configuration of cloud resources, ensuring a reliable and scalable environment.

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.0.11 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | >= 3.74.2 |
| <a name="requirement_tls"></a> [tls](#requirement\_tls) | = 3.4.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | 5.32.1 |
| <a name="provider_aws.acm_provider"></a> [aws.acm\_provider](#provider\_aws.acm\_provider) | 5.32.1 |
| <a name="provider_aws.hosted_zone_provider"></a> [aws.hosted\_zone\_provider](#provider\_aws.hosted\_zone\_provider) | 5.32.1 |

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_api"></a> [api](#module\_api) | ../modules/api | n/a |
| <a name="module_domain_name_records"></a> [domain\_name\_records](#module\_domain\_name\_records) | ../modules/domain-name-records | n/a |
| <a name="module_frontend"></a> [frontend](#module\_frontend) | ../modules/frontend | n/a |
| <a name="module_naming"></a> [naming](#module\_naming) | ../modules/naming | n/a |
| <a name="module_send_contact_mail"></a> [send\_contact\_mail](#module\_send\_contact\_mail) | ../modules/lambda | n/a |

## Resources

| Name | Type |
|------|------|
| [aws_acm_certificate.certificate](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/acm_certificate) | resource |
| [aws_acm_certificate_validation.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/acm_certificate_validation) | resource |
| [aws_iam_policy.lambda_common](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_policy) | resource |
| [aws_iam_policy_attachment.lambda_common](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_policy_attachment) | resource |
| [aws_iam_role.lambda_common](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) | resource |
| [aws_route53_record.certificate_records](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record) | resource |
| [aws_ses_email_identity.contact_email](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ses_email_identity) | resource |
| [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) | data source |
| [aws_iam_policy_document.lambda_common](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_route53_zone.zone](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/route53_zone) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_aws_region"></a> [aws\_region](#input\_aws\_region) | Region used to deploy resources. | `string` | n/a | yes |
| <a name="input_contact_email"></a> [contact\_email](#input\_contact\_email) | The email address designated to receive contact messages from visitors. | `string` | n/a | yes |
| <a name="input_custom_global_tags"></a> [custom\_global\_tags](#input\_custom\_global\_tags) | A map of custom tags applied globally to all resources. | `map(string)` | n/a | yes |
| <a name="input_domain_name"></a> [domain\_name](#input\_domain\_name) | Project domain name | `string` | n/a | yes |
| <a name="input_environment"></a> [environment](#input\_environment) | Environment label. | `string` | n/a | yes |
| <a name="input_environment_category"></a> [environment\_category](#input\_environment\_category) | AWS environment segregation (nonprod, prod). | `string` | n/a | yes |
| <a name="input_project"></a> [project](#input\_project) | Project label. | `string` | n/a | yes |
| <a name="input_root_domain_name"></a> [root\_domain\_name](#input\_root\_domain\_name) | Root domain name. Example : my-domain.com | `string` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_api_id"></a> [api\_id](#output\_api\_id) | ID of the application REST API. |
| <a name="output_aws_region"></a> [aws\_region](#output\_aws\_region) | AWS region where resources are deployed. |
| <a name="output_backend_url"></a> [backend\_url](#output\_backend\_url) | Base URL of the application REST API. |
| <a name="output_distribution_id"></a> [distribution\_id](#output\_distribution\_id) | ID of the CloudFront distribution used for content delivery. |
| <a name="output_frontend_url"></a> [frontend\_url](#output\_frontend\_url) | Base URL of the portfolio. |
<!-- END_TF_DOCS -->

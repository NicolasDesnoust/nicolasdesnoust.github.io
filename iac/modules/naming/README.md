# Naming module

This Terraform module provides a centralized way to manage and apply global tags across all resources within your infrastructure. It allows you to enforce consistent tagging policies for improved resource management, cost allocation, and compliance.

Additionally, the module exports multiple naming patterns for resources, ensuring standardized and meaningful naming conventions across your project. This helps in maintaining clarity and organization within your infrastructure, making it easier to identify and manage resources.

## Features

- **Global Tags:** Define and apply a map of tags that will be applied to all resources, promoting consistency and adherence to tagging policies.
- **Naming Patterns:** Export multiple naming patterns for resources, enabling standardized naming conventions based on project, environment, and other parameters.

## Global Tags Usage

To apply global tags to all resources, define the following configuration on your providers:

```hcl
provider "aws" {

  default_tags {
    tags = module.naming.global_tags
  }

  ...
}
```

## Naming patterns Usage

To use the exported naming patterns for your resources, you can reference them using the Terraform function `format`. Here's an example of how to use a naming pattern:

```terraform
name = format(module.naming.pattern1, "ecs-logs")
```

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.0.11 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | >= 3.74.2 |

## Providers

No providers.

## Modules

No modules.

## Resources

No resources.

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_custom_global_tags"></a> [custom\_global\_tags](#input\_custom\_global\_tags) | A map of custom tags applied globally to all resources | `map(string)` | n/a | yes |
| <a name="input_environment"></a> [environment](#input\_environment) | Environment label | `string` | n/a | yes |
| <a name="input_environment_category"></a> [environment\_category](#input\_environment\_category) | AWS environment segregation (nonprod, prod) | `string` | n/a | yes |
| <a name="input_project"></a> [project](#input\_project) | Project label | `string` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_global_tags"></a> [global\_tags](#output\_global\_tags) | A map of tags that can be applied globally to all resources |
| <a name="output_pattern1"></a> [pattern1](#output\_pattern1) | Defines a naming pattern for resources as <project\>-<environment\>-<param1\> |
| <a name="output_pattern2"></a> [pattern2](#output\_pattern2) | Defines a naming pattern for resources as <project\>-<environment\>-<param1\>-<param2\> |
| <a name="output_pattern_prefix"></a> [pattern\_prefix](#output\_pattern\_prefix) | The common prefix for naming patterns |
| <a name="output_pattern_segregation1"></a> [pattern\_segregation1](#output\_pattern\_segregation1) | Defines a naming pattern for resources as <project\>-<environment\_category\>-<param1\> |
| <a name="output_pattern_segregation2"></a> [pattern\_segregation2](#output\_pattern\_segregation2) | Defines a naming pattern for resources as <project\>-<environment\_category\>-<param1\>-<param2\> |
| <a name="output_pattern_segregation_prefix"></a> [pattern\_segregation\_prefix](#output\_pattern\_segregation\_prefix) | The common prefix for segregation naming patterns |
<!-- END_TF_DOCS -->

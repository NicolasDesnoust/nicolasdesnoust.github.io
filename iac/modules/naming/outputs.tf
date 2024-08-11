locals {
  pattern_prefix             = "${var.project}-${var.environment}"
  pattern_segregation_prefix = "${var.project}-${var.environment_category}"
}

output "global_tags" {
  description = "A map of tags that can be applied globally to all resources"
  value = merge(var.custom_global_tags, {
    project              = var.project,
    environment          = var.environment
    environment-category = var.environment_category
  })
}

output "pattern_prefix" {
  description = "The common prefix for naming patterns"
  value       = local.pattern_prefix
}

output "pattern1" {
  description = "Defines a naming pattern for resources as <project\\>-<environment\\>-<param1\\>"
  value       = "${local.pattern_prefix}-%s"
}

output "pattern2" {
  description = "Defines a naming pattern for resources as <project\\>-<environment\\>-<param1\\>-<param2\\>"
  value       = "${local.pattern_prefix}-%s-%s"
}

output "pattern_segregation_prefix" {
  description = "The common prefix for segregation naming patterns"
  value       = local.pattern_segregation_prefix
}

output "pattern_segregation1" {
  description = "Defines a naming pattern for resources as <project\\>-<environment_category\\>-<param1\\>"
  value       = "${local.pattern_segregation_prefix}-%s"
}

output "pattern_segregation2" {
  description = "Defines a naming pattern for resources as <project\\>-<environment_category\\>-<param1\\>-<param2\\>"
  value       = "${local.pattern_segregation_prefix}-%s-%s"
}

output "global_tags" {
  description = "A map of tags that can be applied globally to all resources"
  value = merge(var.custom_global_tags, {
    project              = var.project,
    environment          = var.environment
    environment-category = var.environment_category
  })
}

output "pattern1" {
  description = "Defines a naming pattern for resources as <project\\>-<environment\\>-<param1\\>"
  value       = "${var.project}-${var.environment}-%s"
}

output "pattern2" {
  description = "Defines a naming pattern for resources as <project\\>-<environment\\>-<param1\\>-<param2\\>"
  value       = "${var.project}-${var.environment}-%s-%s"
}

output "pattern-segregation1" {
  description = "Defines a naming pattern for resources as <project\\>-<environment_category\\>-<param1\\>"
  value       = "${var.project}-${var.environment_category}-%s"
}

output "pattern-segregation2" {
  description = "Defines a naming pattern for resources as <project\\>-<environment_category\\>-<param1\\>-<param2\\>"
  value       = "${var.project}-${var.environment_category}-%s-%s"
}

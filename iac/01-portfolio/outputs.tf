output "aws_region" {
  description = "AWS region where resources are deployed."
  value       = var.aws_region
}

output "distribution_id" {
  description = "ID of the CloudFront distribution used for content delivery."
  value       = module.frontend.cloudfront_distribution_id
}

output "api_id" {
  description = "ID of the application REST API."
  value       = module.api.id
}

output "backend_url" {
  description = "Base URL of the application REST API."
  value       = module.api.url
}

output "frontend_url" {
  description = "Base URL of the portfolio."
  value       = "https://${var.domain_name}"
}


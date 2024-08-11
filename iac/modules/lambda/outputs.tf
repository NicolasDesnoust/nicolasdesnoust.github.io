output "arn" {
  value = module.lambda_function.lambda_function_arn
}

output "function_arn" {
  value = module.lambda_function.lambda_function_invoke_arn
}

output "function_name" {
  value = module.lambda_function.lambda_function_name
}

output "function_qualified_arn" {
  value = module.lambda_function.lambda_function_qualified_arn
}


output "api_arn" {
  value = aws_api_gateway_rest_api.api.arn
}

output "id" {
  value = aws_api_gateway_rest_api.api.id
}

output "url" {
  value = "${aws_api_gateway_deployment.api.invoke_url}${var.env}"
}


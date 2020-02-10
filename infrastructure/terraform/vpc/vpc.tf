// VPC
resource "aws_vpc" "default" {
  cidr_block           = "${var.cidr_block}"
  enable_dns_hostnames = true

  tags {
    Name   = "${var.vpc_name}"
    Author = "wakuu-apps"
    Tool   = "Terraform"
  }
}

package main

import (
	nestserv "service/nested"
	"service"
)
func main() {
	service.Do()
	nestserv.Do()
}
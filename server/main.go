package main

import (
	"github.com/gin-gonic/gin"
	"server/config"
)

func main() {
	config.DBConfig()
	router := gin.Default()
	
}

package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"os"
	productS "server/services"
)

func main() {
	dsn := os.Getenv("DB_CONN_STR")
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalln(err)
	}
	fmt.Println("Connected to DB", db)
	router := gin.Default()

	v1 := router.Group("v1")
	{
		products := v1.Group("products")
		{
			products.GET("", productS.GetListProducts(db))
		}
	}

	router.Run(":3000") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}

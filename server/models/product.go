package models

import "server/common"

type Product struct {
	common.SQLModel
	Name        string  `json:"name" gorm:"column:name"`
	Description string  `json:"description" gorm:"column:description"`
	Price       float64 `json:"price" gorm:"column:price"`
	Image       string  `json:"image" gorm:"column:image"`
	OriginId    string  `json:"origin_id" gorm:"column:origin_id"`
	CategoryId  int     `json:"category_id" gorm:"column:category_id"`
	WarehouseId int     `json:"warehouse_id" gorm:"column:warehouse_id"`
	FeedbackId  int     `json:"feedback_id" gorm:"column:feedback_id"`
}

func (Product) TableName() string {
	return "products"
}

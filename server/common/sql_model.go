package common

type SQLModel struct {
	Id       int `json:"id" gorm:"column:id;"`
	CreateAt int `json:"create_at" gorm:"column:create_at"`
	UpdateAt int `json:"update_at" gorm:"column:update_at"`
}

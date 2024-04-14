package productS

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"net/http"
	"server/common"
	"server/models"
)

func GetListProducts(db *gorm.DB) func(ctx *gin.Context) {
	return func(c *gin.Context) {
		var paging common.Paging
		if err := c.ShouldBind(&paging); err != nil {
			c.JSON(http.StatusBadRequest, common.NewErrorRes(http.StatusBadRequest, err.Error()))
			return
		}

		paging.Process()

		var result []models.Product

		if err := db.Table(models.Product{}.TableName()).Count(&paging.Total).Error; err != nil {
			c.JSON(http.StatusBadRequest, common.NewErrorRes(http.StatusBadRequest, err.Error()))
		}

		if err := db.Table(models.Product{}.TableName()).Offset((paging.Page - 1) * paging.Limit).Limit(paging.Limit).Find(&result).Error; err != nil {
			c.JSON(http.StatusInternalServerError, common.NewErrorRes(http.StatusInternalServerError, err.Error()))
		}

		c.JSON(http.StatusOK, common.SuccescResWithPageing(
			http.StatusOK, result, paging.Page, common.GetListSuccessfull, paging.Total))
	}

}

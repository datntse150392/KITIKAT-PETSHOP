package common

type successRes struct {
	Status  interface{} `json:"status"`
	Data    interface{} `json:"data"`
	Message interface{} `json:"message"`
	Paging  interface{} `json:"paging"`
	Filter  interface{} `json:"filter"`
	Total   interface{} `json:"total"`
}

func NewSuccessRes(status, data, paging, filter, message interface{}) *successRes {
	return &successRes{Status: status, Data: data, Message: message, Paging: paging, Filter: filter}
}

func SuccescResWithPageing(status, data, paging, message, total interface{}) *successRes {
	return &successRes{Status: status, Data: data, Message: message, Paging: paging, Total: total, Filter: nil}
}

func SimpleSuccessRes(status, data, message interface{}) *successRes {
	return &successRes{Status: status, Data: data, Message: message, Paging: nil, Filter: nil}
}

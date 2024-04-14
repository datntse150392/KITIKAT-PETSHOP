package common

type errorRes struct {
	Status interface{} `json:"status"`
	Error  string      `json:"error"`
}

func NewErrorRes(status interface{}, err string) *errorRes {
	return &errorRes{Status: status, Error: err}
}

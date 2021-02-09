import API from "./API"

export function login(data) {
	return API().post('api/login', data)
}
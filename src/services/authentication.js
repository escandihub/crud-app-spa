import API from "./API"

export function login(data) {
	return API().post('api/login', data)
}

export function logoutService() {
	return API().post('api/logout');
}

export function loginOauth(provider) {
	return API().get(`api/login/${provider}`);
}
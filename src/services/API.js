import axios from 'axios'
export default () => {
	const instancia = axios.create({
		// baseURL: window.globalConfig || process.env.VUE_APP_URL_API
		baseURL: "http://127.0.0.1:8000",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Cross-Origin-Opener-Policy': '*',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': '*'
		},
	})
	/**
	 * this athoritazion come from <Sanctum API token Authorization> : refec:
	 * https://laravel.com/docs/8.x/sanctum#api-token-authentication
	 */
	instancia.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
	instancia.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	instancia.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
	instancia.interceptors.response.use((resp) => {
		return resp
	})
	return instancia
}
import axios from 'axios'
export default () => {
	const instancia = axios.create({
		// baseURL: window.globalConfig || process.env.VUE_APP_URL_API
		baseURL: "http://localhost:8000",
		headers: {
			'Cross-Origin-Opener-Policy': '*',
			'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': '*'},
	})
	instancia.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
	instancia.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	instancia.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
	instancia.interceptors.response.use((resp) => { 
		return resp
	})
	return instancia
}
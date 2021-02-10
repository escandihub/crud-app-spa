import axios from 'axios'
export default () => {
	const instancia = axios.create({
		// baseURL: window.globalConfig || process.env.VUE_APP_URL_API
		baseURL: "http://127.0.0.1:8000"
	})
	instancia.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
	
	instancia.interceptors.response.use((resp) => { 
		return resp
	})
	return instancia
}
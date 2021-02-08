import axios from 'axios'
export default () => {
	const instancia = axios.create({
		// baseURL: window.globalConfig || process.env.VUE_APP_URL_API
		baseURL: "http://127.0.0.1:8000"
	})

	return instancia
}
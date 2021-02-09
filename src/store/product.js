import { editProducto } from "../services/product"

export default {
	state: {
		product: {
			nombre: '',
			descripcion: '',
			activo: 0
		},
		products: []
	},
	getters: {},
	mutations: {
		productos(state, payload) {
			state.products = payload
		},
		editProducto(state, payload) {
			state.products.map(el => el.id == payload.id ? payload : el)
		}
	},
	actions: {}
}
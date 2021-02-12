import { editProducto } from "../services/product"
import { getAll, deleteProduct } from "@/services/product";

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
		DEL_PRODUCT(state, id) {
			state.products = state.products.filter(el => el.id != id)
		},
		FILL_PRODUCTS(state, payload) {
			state.products = payload
		},
		editProducto(state, payload) {
			state.products.map(el => el.id == payload.id ? payload : el)
		}
	},
	actions: {
		getProducts({ commit }, data) {
			return new Promise((resolve, reject) => {
				getAll()
					.then((res) => {
						resolve('ok')
						commit('FILL_PRODUCTS', res.data.data)
					})
					.catch((err) => console.log("something wrong"));
			})
		},
		deleteProduct({ commit, dispatch }, data) {
			deleteProduct(data.id).then((res) => {
				commit('DEL_PRODUCT', data.id)
			}).catch((err) => console.log('it wasnt fine'))

		}
	}
}
import { login } from "@/services/authentication"
export const state = () => ({
	logged: false,
	user: Object
})

export const getters = {
	getterValue: state => {
		return state.value
	}
}

export const mutations = {
	Logeado: (state, payload) => {
		state.user = payload
		state.logged = true
	}
}

export const actions = {
	LogUser({ commit }, data) {
		login(data).then((res) => {
			commit('Logeado', data)
		})
		commit('updateValue', payload)
	}
}
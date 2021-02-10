import { login } from "@/services/authentication"
import API from '@/services/API'
import router from "@/router"
export const state = () => ({
	logged: false,
	user: Object,
	token: String
})

export const getters = {
	token: state => {
		return state.user;
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
			commit('Logeado', res.data.user)
			localStorage.setItem("access_token", res.data.token)//token
			router.push({ name: "Home" })
		})
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
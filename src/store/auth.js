import { login, logoutService } from "@/services/authentication"
import API from '@/services/API'
import router from "@/router"
export const state = () => ({
	logged: !!localStorage.getItem('access_token'),
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
	},
	destroySesion: (state, payload) => {
		localStorage.clear()
		state.logged = false
		state.user = {}
		router.push('/login')
		
	}
}

export const actions = {
	LogUser({ commit }, data) {
		return new Promise((resolve, reject) => {
			login(data).then((res) => {
				commit('Logeado', res.data.user)
				localStorage.setItem("access_token", res.data.token)//token
				router.push({ name: "Home" })
				resolve(res)
			}).catch((err) => {
				reject(err)
			})
		})
	},

	logOut({ commit}) {
		logoutService().then(res => {
			commit('destroySesion')
		})
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
import { login, logoutService, loginOauth } from "@/services/authentication"
import API from '@/services/API'
import router from "@/router"
import axios from "axios"
export const state = () => ({
	logged: !!localStorage.getItem('access_token'),
	user: Object,
	token: String
})

export const getters = {
	token: state => {
		return state.user;
	},
	isLogged: state => {
		return state.logged;
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
		
	},
	saveToken: (state, payload) => {
		localStorage.setItem("access_token", payload)//token
		state.logged = true
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
	},

	/**
	 * se despacha un enpoint que redirecciona al controll de acceso 
	 * de github
	 * @param {*} ctx 
	 * @param {*} param1 
	 */
	async fetchOauthUrl(ctx, { provider }) {
		const { data } = await loginOauth(provider)
		return data.url
	},
	saveToken({ commit }, payload) {
		commit('saveToken', payload)
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
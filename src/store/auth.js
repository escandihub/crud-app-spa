import { login, logoutService, loginOauth } from "@/services/authentication"
import API from '@/services/API'
import router from "@/router"
import axios from "axios"
import * as types from "./mutation_types"
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
/**
 * set varables to save token a redirect 
 * to home page
 */
export const mutations = {
	[types.LOGGED]: (state, payload) => {
		state.user = payload
		state.logged = true
		localStorage.setItem("access_token", payload.token)//token
		router.push({ name: "Home" })
	},
	/**
	 * clean all varable on client to make 
	 * un-authenticate
	 * @param {Object} state 
	 * @param {Object} payload 
	 */
	[types.LOGOUT]: (state, payload) => {
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
				commit(types.LOGGED, res.data)
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
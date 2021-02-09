import store from "../store"
export default function middleware(router) {
	router.beforeEach((to, from, next) => {
		if (to.name !== 'login' && store.state.logged) { next({ name: 'login' }) }
			else next()
	})
}
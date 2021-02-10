export default {
	state: {
		count: 1,
		notify: {
			title: '',
			body: '',
			toastCount: 0
		}
	},
	mutations: {
		NOTI(state, data) {
			
		},
	},
	actions: {
		notificar({ state }, data) {
			data.is.$bvToast.toast(data.body, {
				title: data.title,
				autoHideDelay: 5000,
				variant: data.type,
				appendToast: true
			})
		}
	}
}
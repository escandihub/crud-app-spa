<template>
	<b-button @click="login">
		Github
		<b-icon class="ml-3" icon="github" variant="dark" ></b-icon>
	</b-button>
</template>

<script>
export default {
	name: 'LoginWithGithub',
	computed: {
		githubAuth: () => 'fce84617b83c3ac14f4d',
		url: () => 'api/login/github'
	},
	mounted () {
		window.addEventListener('message', this.onMessage, false);
	},
	beforeDestroy () {
		window.removeEventListener('message', this.onMessage);
	},
	methods: {
		async login() {
			const newWindow = openWindow('', 'login')
			const url =  await this.$store.dispatch('fetchOauthUrl', {
				provider: 'github'
			})
			newWindow.location.href = url
		},
		/**
		 * ¿que hace esto? : la pregunta que interoga por el sentido del ser
     * @param {MessageEvent} e
     */
    onMessage (e) {
			console.log(e);
      if (e.origin !== 'http://127.0.0.1:8000') {
        return
      }
console.log('despachando');
      this.$store.dispatch('saveToken', {
        token: e.data.token
      })

      this.$router.push({ name: "Home" })
    }
	},
}

/**
 * esta funcion es vanilla javascript
 * @param  {Object} options
 * @return {Window}
 */
function openWindow (url, title, options = {}) {
  if (typeof url === 'object') {
    options = url
    url = ''
  }

  options = { url, title, width: 600, height: 720, ...options }

  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screen.left
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screen.top
  const width = window.innerWidth || document.documentElement.clientWidth || window.screen.width
  const height = window.innerHeight || document.documentElement.clientHeight || window.screen.height

  options.left = ((width / 2) - (options.width / 2)) + dualScreenLeft
  options.top = ((height / 2) - (options.height / 2)) + dualScreenTop

  const optionsStr = Object.keys(options).reduce((acc, key) => {
    acc.push(`${key}=${options[key]}`)
    return acc
  }, []).join(',')

  const newWindow = window.open(url, title, optionsStr)

  if (window.focus) {
    newWindow.focus()
  }

  return newWindow
}
</script>

<style></style>

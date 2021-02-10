<template>
	<div class="d-flex justify-content-center">
		<b-card
			header="Inicio de sesión"
			tag="article"
			style="max-width: 20rem;"
			class="mb-2"
		>
			<b-card-body>
				<div>
					<b-form-input
						id="input-1"
						v-model="user.email"
						type="email"
						placeholder="Ingrese su correo"
						required
					></b-form-input>
					<span>
						<div v-for="error in errors" :key="error">
							<span v-if="error" style="color: red;">
								{{ error[0] }}
							</span>
						</div>
					</span>
					<b-form-input
						class="my-2"
						id="input-2"
						v-model="user.password"
						type="password"
						placeholder="Ingrese su contraseña"
						required
					></b-form-input>
					<b-button @click="login" :disabled="valid" variant="primary">Login</b-button>
				</div>
			</b-card-body>
		</b-card>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	data() {
		return {
			user: {
				email: '',
				password: '',
			},
			errors: []
		};
	},
	methods: {
		...mapActions(['LogUser']),
		login() {
			this.LogUser(this.user).then(res => {
console.log(res);
			}).catch(err => {
				this.errors = err.response.data.errors
			})
		}
	},
	computed: {
		valid() {
			if(this.user.email != '' && this.user.password != ''){
				return false;
			}
			return true;
		}
	},
};
</script>

<style></style>

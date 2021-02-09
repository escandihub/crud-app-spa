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
export default {
	data() {
		return {
			user: {
				email: '',
				password: '',
			},
		};
	},
	methods: {
		login() {
			
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

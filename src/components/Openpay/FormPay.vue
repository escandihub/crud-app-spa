<template>
	<div>
		<b-form>
			<b-form-input
				id="input-1"
				v-model="name_titular"
				type="text"
				placeholder="nombre del titular"
				required
			></b-form-input>
			<b-form-input
				id="input-2"
				v-model="last_name_titular"
				type="text"
				placeholder="apellidos del titular"
				required
			></b-form-input>
			<b-form-input
				id="input-3"
				v-model="email"
				type="email"
				placeholder="correo del titular"
				required
			></b-form-input>
			<b-form-input
				id="input-3"
				v-model="number_card"
				type="text"
				placeholder="numero de tarjeta"
				required
			></b-form-input>
			<b-form-input
				id="input-3"
				v-model="cvv2"
				type="text"
				placeholder="CVV de tarjeta"
				required
				autocomplete="on"
			></b-form-input>
			<b-form-select
				id="input-3"
				v-model="month_expiration"
				type="text"
				placeholder="Mes de expiracion"
				required
				:options="items_months"
				value-field="value"
				text-field="text"
			></b-form-select>
			<b-form-input
				id="input-3"
				v-model="year_expiration"
				type="text"
				placeholder="Año de expiracion"
				required
			></b-form-input>
			<b-button @click="pay">
				Continuar
			</b-button>
		</b-form>
	</div>
</template>
<script>
import API from "@/services/API";
export default {
	data() {
		return {
			valid: true,
			number_card: "",
			mask_credit_card: "credit-card",
			items_months: [
				{ text: "01 - Enero", value: "01" },
				{ text: "02 - Febrero", value: "02" },
				{ text: "03 - Marzo", value: "03" },
				{ text: "04 - Abril", value: "04" },
				{ text: "05 - Mayo", value: "05" },
				{ text: "06 - Junio", value: "06" },
				{ text: "07 - Julio", value: "07" },
				{ text: "08 - Agosto", value: "08" },
				{ text: "09 - Septiembre", value: "09" },
				{ text: "10 - Octubre", value: "10" },
				{ text: "11 - Noviembre", value: "11" },
				{ text: "12 - Diciembre", value: "12" },
			],
			name_titular: "",
			email: "",
			last_name_titular: "",
			month_expiration: "",
			year_expiration: "",
			cvv2: "",
			token: "",
			endpoint_sandbox_openpay: "https://sandbox-api.openpay.mx/v1/",
			endpoint_payament: "http://127.0.0.1:8000/pays/cargo-token",
			deviceSessionId: "",
			openpay_id: "m3czgiemolgqtsalpiia",
			openpay_key: "pk_311502f055694b78a0a7525306e6f8ab",
			openpay_sandbox_mode: true,
		};
	},
	mounted() {
		// sistema de fraude
		OpenPay.setId(this.openpay_id);
		OpenPay.setApiKey(this.openpay_key);
		OpenPay.setSandboxMode(this.openpay_sandbox_mode);
		this.deviceSessionId = OpenPay.deviceData.setup();
	},
	methods: {
		pay() {
			// generate token para realizar el cargo
			OpenPay.token.create(
				{
					holder_name: this.name_titular + " " + this.last_name_titular,
					card_number: this.number_card,
					cvv2: this.cvv2,
					expiration_month: this.month_expiration,
					expiration_year: this.year_expiration,
				},
				(response) => {
					this.token = response.data.id;
				},
				(error) => {
					console.log(error);
				}
			);
			const options = {
				headers: { "Access-Control-Allow-Origin": "*" },
			};
			// payment in OpenPay | endpoint payament
			API()
				.post("pays/cargo-token", {
					name: this.name_titular,
					last_name: this.last_name_titular,
					email: this.email,
					token: this.token,
					deviceSessionId: this.deviceSessionId,
				}, options)
				.then((response) => {
					this.mesageButton = "Pagado";
					this.loadingPay = false;
					this.iconButton = "check_circle";
					this.colorButton = "green";

					console.log(response);
				});
		},
	},
};
</script>

<style scoped></style>

<template>
	<b-container>
		<h1>metodo de pago</h1>
		<FormPay />
	</b-container>
</template>

<script>
import FormPay from "@/components/Openpay/FormPay";
export default {
	name: "Oneclick",
	components: {
		FormPay,
	},
};
</script>

<style></style>

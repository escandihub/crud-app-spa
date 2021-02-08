<template>
	<div v-if="show">
		<b-modal
			@ok="eliminar"
			title="Confirme por favor"
			centered
			v-model="visualizar"
		>
			<div>
				<b-container fluid>
					Esta seguro de eliminar  <strong> {{ producto.nombre }} </strong>
				</b-container>
			</div>
		</b-modal>
	</div>
</template>

<script>
import { deleteProduct } from "@/services/product";
export default {
	props: {
		show: false,
		producto: null,
	},
	methods: {
		eliminar() {
			deleteProduct(this.producto.id)
				.then((res) => {
					this.$bvToast.toast("Se ha eliminado ", {
						title: "Eliminacion",
						autoHideDelay: 5000,
						appendToast: append,
					});
				})
				.catch((err) => console.log(err));
		},
	},
	computed: {
		visualizar: {
			get() {
				return this.show;
			},
			set(valor) {
				this.$emit("confirmar", valor);
			},
		},
	},
};
</script>

<style></style>

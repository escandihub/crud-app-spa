<template>
	<div v-if="visualizar">
		<b-modal @ok="nuevo" title="Nuevo Producto" centered v-model="visualizar">
			<div>
				<b-container fluid>
					<b-form-input
						id="input-1"
						v-model="producto.nombre"
						type="text"
						placeholder="nombre"
						required
						class="my-3"
					></b-form-input>
					<b-form-input
						id="input-1"
						v-model="producto.descripcion"
						type="text"
						placeholder="Descripción"
						required
					></b-form-input>
				</b-container>
			</div>
		</b-modal>
	</div>
</template>

<script>
import { newProduct } from "@/services/product";
export default {
	props: {
		type: 0,
		showCreateModal: false,
	},
	data() {
		return {
			producto: {
				nombre: "",
				descripcion: "",
				activo: 0,
			},
		};
	},
	methods: {
		nuevo() {
			newProduct(this.producto)
				.then((res) => {
					this.$bvToast.toast("Nuevo Producto", {
						title: "Producto",
						autoHideDelay: 5000,
						appendToast: false,
					});
				})
				.catch((erro) => console.log(erro));
		},
	},
	computed: {
		visualizar: {
			get() {
				return this.showCreateModal;
			},
			set(valor) {
				this.$emit("modalClose", valor);
			},
		},
	},
};
</script>

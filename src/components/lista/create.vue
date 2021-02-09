<template>
	<div v-if="visualizar">
		<b-modal @ok="nuevo" :title="titulo" centered v-model="visualizar">
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
						id="input-2"
						v-model="producto.descripcion"
						type="text"
						placeholder="Descripción"
						required
					></b-form-input>
					<!-- <template v-if="type == 1"> -->
						<b-form-checkbox
							id="checkbox-1"
							v-model="producto.activo"
							name="checkbox-1"
							value="1"
						>
							Activo
						</b-form-checkbox>
					<!-- </template> -->
				</b-container>
			</div>
			<template #modal-footer>
				<b-button size="sm" variant="primary" @click="accion">
					{{ type == 1 ? 'Actualizar'  : 'Crear'}}
				</b-button>
			</template>
		</b-modal>
	</div>
</template>

<script>
import { newProduct, editProducto } from "@/services/product";
export default {
	props: {
		type: 0,
		productC: Object,
		showCreateModal: false,
	},
	data() {
		return {
			producto: '',
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
		editar(){
			editProducto(this.producto).then((res) => {
				this.$bvToast.toast(res.data.message, {
						title: "Producto",
						autoHideDelay: 5000,
						appendToast: false,
					});
			}).catch((err) => {
				this.$bvToast.toast("algo ha salido mal", {
						title: "Producto",
						autoHideDelay: 5000,
						appendToast: false,
					});
			})
		},

		accion(){
			if(this.type ==  1){
				this.editar()
			}else{
				this.nuevo()
			}
		}
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
		titulo() {
			if (this.type == 0) {
				return "Nuevo Producto";
			}
			return "Editar Producto";
		},
	},
	watch: {
		productC(newValue, oldValue) {
			this.producto = newValue;
		},
	},
};
</script>

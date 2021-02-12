<template>
	<div>
		<div class="float-right my-2">
			<b-button @click="nuevo">Nuevo Producto</b-button>
		</div>
		<b-table striped hover :fields="fields" :items="products" :busy="isBusy">
			<template #cell(Acciones)="row">
				<b-row>
					<b-col>
						<b-button size="sm" @click="editar(row.item)" class="mr-1">
							<b-icon icon="pencil-square"></b-icon>
						</b-button>
					</b-col>
					<b-col>
						<b-button size="sm" @click="eliminar(row.item)" class="mr-1">
							<b-icon icon="trash"></b-icon>
						</b-button>
					</b-col>
				</b-row>
			</template>
		</b-table>
		<!-- <confrimDeletion
			:show="deletionM"
			:producto="producto"
			@confirmar="deletionM = false"
		/> -->
		<create 
		:showCreateModal="showModal"
		@modalClose="showModal = false"
		:type="tipo"
		:productC="producto"
		/>
	</div>
</template>

<script>
import confrimDeletion from "./confirm-deletion";
import create from "./create";
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
	components: {
		confrimDeletion,
		create
	},
	computed: {
		products(){
			return this.$store.state.product.products
		}
	},
	data() {
		return {
			isBusy: false,
			producto: {},
			deletionM: false,
			showModal: false, // puede ser nuevo o editar
			tipo: 0,
			fields: [
				{ key: "nombre", label: "Nombre" },
				{ key: "descripcion", label: "Descripción" },
				"Acciones",
			],
		};
	},
	methods: {
		...mapActions(['getProducts', 'deleteProduct', 'notificar']),
		editar(row) {
			this.tipo = 1
			this.showModal = !this.showModal
			this.producto = row;
			console.log("editar here!");
		},
		eliminar(row) {
			this.deletionM = !this.deletionM;
			this.producto = row;
			this.deleteProduct(row)
			this.notificar({
				title: 'Producto',
				body: 'Se ha Eliminado',
				type: 'warning',
				is: this
			})
			console.log("eliminar");
		},
		nuevo() {
			this.tipo = 0
			this.producto = {}
			this.showModal = !this.showModal
		},
	},
	mounted() {
		this.isBusy = true
		this.getProducts().then(() => {
			this.isBusy = false
		}).catch(() => this.isBusy = false);
	},
};
</script>

<style></style>

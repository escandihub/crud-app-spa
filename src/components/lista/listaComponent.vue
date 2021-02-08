<template>
	<div>
		<div class="float-right my-2">
			<b-button @click="nuevo">Nuevo Producto</b-button>
		</div>
		<b-table striped hover :fields="fields" :items="produts">
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
		<confrimDeletion
			:show="deletionM"
			:producto="producto"
			@confirmar="deletionM = false"
		/>
		<create 
		:showCreateModal="showModal"
		@modalClose="showModal = false"
		/>
	</div>
</template>

<script>
import { getAll } from "@/services/product";
import confrimDeletion from "./confirm-deletion";
import create from "./create";
export default {
	components: {
		confrimDeletion,
		create,
	},
	data() {
		return {
			producto: "",
			deletionM: false,
			showModal: false, // puede ser nuevo o editar
			produts: [],
			fields: [
				{ key: "nombre", label: "Nombre" },
				{ key: "descripcion", label: "Descripción" },
				"Acciones",
			],
		};
	},
	methods: {
		getProducts() {
			getAll()
				.then((res) => {
					console.log(res);
					this.produts = res.data;
				})
				.catch((err) => console.log("something wrong"));
		},
		editar(row) {
			console.log("editar here!");
		},
		eliminar(row) {
			this.deletionM = !this.deletionM;
			this.producto = row;
			console.log("eliminar");
		},
		nuevo() {
			this.showModal = !this.showModal
		},
	},
	mounted() {
		this.getProducts();
	},
};
</script>

<style></style>

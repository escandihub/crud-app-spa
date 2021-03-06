import API from './API'
export function getAll() {
	return API().get('api/personal');
}

export function deleteProduct(id){
	return API().delete('api/personal/' + id);
}

export function newProduct(data) {
	return API().post('api/personal', data)
}

export function editProducto(data) {
	return API().put('api/personal/' + data.id, data)
}

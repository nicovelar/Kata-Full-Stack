import {
    mostrarList
} from './getList.js'

const url = 'http://localhost:8080';

//Crear SubTarea
async function crearSubLista({ nombre, id }) {
    if (nombre) {
        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                completed: false,
                name: nombre,
                listaid: {
                    id: id
                }
            })
        },
            res = await fetch(`${url}/listTask`, options)
        mostrarList()
    } else {
        alert("Ingrese una subLista porfavor!")
    }
}

//eliminar subTarea
async function eliminarSubTarea(id) {
    let options = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=utf-8"
        },
    },
        res = await fetch(`${url}/listTask/${id}`, options)
        
    mostrarList() 
}


//Edita SubTarea
async function editarSubTarea({ id , idlist, task }) {
    
        let options = {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                completed: false,
                name: task,
                listaid: {
                    id: idlist
                }
            })
        },
            res = await fetch(`${url}/listTask/${id}`, options)
        mostrarList()

}

export { editarSubTarea, crearSubLista, eliminarSubTarea }

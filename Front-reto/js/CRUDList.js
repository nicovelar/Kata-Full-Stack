import {
    mostrarList
 } from './getList.js'

const url = 'http://localhost:8080';

//Funcion crear lista , consulta la ruta del fetch y realiza el metodo post con los datos 
async function crearList(lista) {
    if (lista) {
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify({
                name: lista
            })
        },
            res = await fetch(`${url}/task`, options)
        mostrarList();
    } else {
        alert("ingrese una tarea por favor!")
    }
}





//funcion eliminar tarea , recibe como parametro el ID
async function eliminarTarea(id) {
    let options = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=utf-8"
        },
    },
        res = await fetch(`${url}/task/${id}`, options)

    mostrarList()
}

export { crearList, eliminarTarea }

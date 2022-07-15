import {
    editarSubTarea, crearSubLista, eliminarSubTarea
} from './CRUDSubtareas.js'
import {
   eliminarTarea,crearList
} from './CRUDList.js'

//Declaracion de variables
const d = document,
$title = d.getElementById("nombre-lista"),
$crear = d.getElementById("crear"),
body = d.querySelector('.tbody1'),
$input = d.getElementById('inputTarea')


let subtarea = {};

//funcon boton crear , permite guardar en el input el nombre de la nueva lista a crear
$crear.addEventListener('click', e => {
    e.preventDefault();
    crearList($input.value)
    $input.value = ""

})

//Borrar lista o crea una sub lista con una tarea
body.addEventListener("click", (e) => {
    
    if (e.target.classList[0] == "EliminarTarea") {
        eliminarTarea(e.target.parentElement.parentElement.id)
    }
    if (e.target.classList[0] == "agregarSubList") {

        let dato = {
            nombre: e.target.previousElementSibling.value,
            id: e.path[0].value
        }
        crearSubLista(dato)

    }
   
    
    /**
     * eliminar subtarea
    */
    if (e.target.classList[0] == "eliminar") {
        eliminarSubTarea(e.target.parentElement.parentElement.children[0].textContent)
    }
    /**
     * editar subtarea , al pulsar el boton editar , muestra en el input con nombre de la tare actual
     * me permite 
    */
    if (e.target.classList[0] == "editar") {
        e.preventDefault()
        subtarea.id = e.path[0].value
        subtarea.name = e.path[2].children[1].textContent;
        subtarea.idpadre = e.path[4].id;
       
        let input = e.path[5].children[1][0];
        let btncrear = d.getElementById('crear' + e.path[4].id)
        let boton = d.getElementById('Actualizar' + e.path[4].id)
        btncrear.style.display = "none";
        boton.style.display = "";
    
        input.value = subtarea.name
    }
    /**
     * function validar , verifica el estado del check para cambiar el estado del boton editar
     */
    if (e.target.classList[0] == "validar") {
        let btnvalidar = d.getElementById('editar' + e.path[2].children[3].children[0].value)
        let check = d.getElementById('validar' + e.path[2].children[3].children[0].value).checked
        if (check) {
            btnvalidar.disabled = true;
        } else {
            btnvalidar.disabled = false;
        }

    }
    if(e.target.classList[0] == "actualizarSubList"){
        e.preventDefault()
        
        let dato = {
            id: subtarea.id,
            idlist: e.path[2].id,
            task: e.path[1][0].value,
        }
         editarSubTarea(dato)

    }


})

 



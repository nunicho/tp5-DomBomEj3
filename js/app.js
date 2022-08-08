/*
        3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda
cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista,
cada elemento ingresado en la lista debe poder ser eliminado con un botón creado
para ese fin.

*/

let tareas = ['comer', 'beber', 'cantar']


function sumarTarea(){
        let nuevaTarea = prompt("Detalle la tarea a ingresar")
        tareas.push(nuevaTarea)
}


function eliminarTarea(){
        let eliminarTarea=prompt("Ingrese tarea a eliminar")
        let tareasFiltradas = tareas.filter((tareas) => {
        return tareas != eliminarTarea;
        });
        tareas = tareasFiltradas;
}

function mostrarTarea(){
        let ul = document.createElement('ul');  
        document.getElementById('lugarLista').appendChild(ul);
        tareas.forEach(itemTareas);
        function itemTareas(element, posicion) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML=li.innerHTML + element +` es la tarea `+ posicion
        }
    };

    




/*
investigué en 
https://stackoverflow.com/questions/11351135/create-ul-and-li-elements-in-javascript

*/
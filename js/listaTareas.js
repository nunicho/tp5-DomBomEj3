let tareas = []


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

function abrirLista(){
        let ul = document.createElement('ul');  
        document.getElementById('lugarLista').appendChild(ul);
        tareas.forEach(itemTareas);
        function itemTareas(element, posicion) {        
            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML=li.innerHTML + element +` es la tarea `+ posicion
        }
    };

    function cerrarLista() {
      let element = document.getElementById("lugarLista");
                while (element.firstChild) {
                element.removeChild(element.firstChild);
        }
    }
    
    




/*
investigué en 
https://stackoverflow.com/questions/11351135/create-ul-and-li-elements-in-javascript

*/
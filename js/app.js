import { getTasks } from "./API.js";
import {validarCliente} from "./funciones.js";

/*    validarCliente(); */
(function(){
    //Light and dark mode
    const icon = document.querySelector('.header__icon');
    const body = document.body;

    document.addEventListener('DOMContentLoaded',mostrarTasks);
    
    //Obtener clientes
    const ulTasks = document.querySelector('.ul');
    ulTasks.classList.add('tasks')

   

    icon.addEventListener('click', () =>{
        body.classList.toggle('light');
     
    })

    async function mostrarTasks(){
      
        const tasks = await getTasks(); //Nos esperamos a que la funcion getTasks termine de obtener los datos de la apí para comenzar

        tasks.forEach(task => {
            const {id, content, status} = task;

            const taskLi = document.createElement('LI');
            taskLi.classList.add('task');

            const div = document.createElement('DIV');

            const taskLabel = document.createElement('LABEL');
            taskLabel.classList.add('task__label');
            taskLabel.htmlFor = `task__checkbox--${id}`;
            taskLabel.id = 'checkbox';
            
            const input = document.createElement('INPUT');
            input.type = 'checkbox';
            input.classList.add('task__checkbox');
            input.id = `task__checkbox--${id}`;
            input.checked = status;

            const inputSpan = document.createElement('SPAN');
            inputSpan.classList.add('task__checkbox--span');

            const inputText = document.createElement('SPAN');
            inputText.classList.add('task__text');
            inputText.textContent = `${content}`;


            const taskIcons = document.createElement('DIV');
            taskIcons.classList.add('task__icons');

            const taskEdit = document.createElement('BUTTON');
            taskEdit.classList.add('task__edit');
            taskEdit.type = 'button';

            const taskEditImg = document.createElement('IMG');
            taskEditImg.src = 'images/pencil.png';
            taskEditImg.alt = 'edit task';
            taskEditImg.classList.add('task__edit');

            const taskX = document.createElement('BUTTON');
            taskX.classList.add('task__x');
            taskX.type = 'button';

            const taskXImg = document.createElement('IMG');
            taskXImg.src = 'images/icon-cross.svg';
            taskX.alt = 'Icon Delete';

            //Agregamos al html y creamos relaciones padre-hijos
            ulTasks.appendChild(taskLi)
            taskLi.appendChild(div);
            div.appendChild(taskLabel);
            taskLabel.appendChild(input);
            taskLabel.appendChild(inputSpan);
            taskLabel.appendChild(inputText);


            taskLi.appendChild(taskIcons);
            taskIcons.appendChild(taskEdit)
            taskEdit.appendChild(taskEditImg)
            
            taskIcons.appendChild(taskX);
            taskX.appendChild(taskXImg);
        })
    }


})();


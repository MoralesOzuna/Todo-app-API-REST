import { getTasks, deleteTask,editTask } from "./API.js";
import {formValidation} from "./createtask.js"; //nota, el add event listener submit se aplica solo por el puro hecho de importar el archivo
import { editingTask } from "./patchtask.js";


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
            input.dataset.id = `${id}`;


            input.addEventListener('change', (e)=>{
                editTask(e.target.dataset.id, {status: e.target.checked});
            })

            const inputSpan = document.createElement('SPAN');
            inputSpan.classList.add('task__checkbox--span');
            

            const inputText = document.createElement('SPAN');
            inputText.classList.add('task__text');
            inputText.textContent = `${content}`;
            inputText.dataset.id = `${id}`;


            const taskIcons = document.createElement('DIV');
            taskIcons.classList.add('task__icons');

            const taskEdit = document.createElement('BUTTON');
            taskEdit.classList.add('task__edit');
            taskEdit.type = 'button';
            taskEdit.dataset.id = `${id}`;

            taskEdit.addEventListener('click', () =>{
                const actualText = document.querySelectorAll('.task__text');
                actualText.forEach(text =>{
                    if(taskEdit.dataset.id == text.dataset.id){
                        editingTask(text);
                    }
                })
            })

            const taskEditImg = document.createElement('IMG');
            taskEditImg.src = 'images/pencil.png';
            taskEditImg.alt = 'edit task';
            taskEditImg.classList.add('task__edit');

            const taskX = document.createElement('BUTTON');
            taskX.classList.add('task__x');
            taskX.type = 'button';
            taskX.dataset.id = `${id}`;
            taskX.addEventListener('click', (e)=>{
                deleteTask(taskX.dataset.id)
            })
           
   
      

            
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


import {appMessage} from './funciones.js';
import { newTask } from './API.js';


const form = document.querySelector('.form');
const formText = document.querySelector('.form__input');
const formCheckbox = document.querySelector('.form__checkbox');
const parent = document.querySelector('.container');

form.addEventListener('submit', formValidation);
let taskObj = [];

export function formValidation(e){
    e.preventDefault();
    if(formText.value === ''){
        const message = document.querySelector('.message');
        if(!message){
            appMessage(parent, 'Error: You need to write a Task');
            return;
        }
      
        return;
    }

    const newTaskObj = {
        content: formText.value,
        status: formCheckbox.checked
    }



    taskObj = [...taskObj, newTaskObj];
    newTask(newTaskObj);
    

}
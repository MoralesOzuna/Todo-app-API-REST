import { editTask } from "./API.js";
import {appMessage} from "./funciones.js";

export function editingTask(text){
    const input = document.createElement('input');
    input.classList.add('editingInput')
    input.value = text.textContent;

    text.replaceWith(input);
    input.focus();

    input.addEventListener('keydown', e =>{

    if(e.key === 'Enter'){
        e.preventDefault();

        const value = input.value.trim();

        if(value === ''){
            const element = document.querySelector('.task');
            appMessage(element, 'Text could not be blank');
            return;
            
        }
        text.textContent = value;
        input.replaceWith(text);
        editTask(text.dataset.id, {content: `${text.textContent}`})
        }
    }) 
}


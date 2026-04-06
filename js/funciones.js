export function appMessage(element, message){
    const textMessage = document.createElement('P');
    textMessage.textContent = message;
    textMessage.classList.add('message');
    textMessage.classList.add('container');


    element.appendChild(textMessage);

    setTimeout(()=>{
        textMessage.remove();
    },3000)
}



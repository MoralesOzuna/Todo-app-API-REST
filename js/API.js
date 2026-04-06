const url = 'http://localhost:3000/tasks';


//Obtiene todos las tareas
export const getTasks = async () =>{ //exports es para usarse en otros archivos. async habilita el uso de await y la entrega de una promesa
    try{
        const result = await fetch(url); //Hacemos una petición HTTP. 
        const tasks = await result.json(); //tasks obtiene el resultado que es de tipo resopense y lo convertimos a .json
        return tasks; //Devuelve tasks para ser utilizados

    }catch(error){
        console.log(error); //Si algo no sale bien cae en el catch
    }
}


export const newTask = async task =>{ //tasks es un parametro que recibimos newTask(task);
    try{
        await fetch(url, {
            method: 'POST', //tipo de metodo
            body: JSON.stringify(task), //task es un objeto pero el server no los acepta, oor ende se convierte a texto JSON
            headers: {
                'Content-Type': 'application/json'
            }
        });
        getTasks();
    }catch(error){
        console.log(error);
    }
}

export const deleteTask = async id =>{
    try{
        await fetch(`${url}/${id}`,{
            method: 'DELETE'
        })
    } catch(error){
        console.log(error);
    }
} 


export const editarCliente = async task =>{
    try{
        await fetch(`${url}/${task.id}`,{
            method: 'PUT',
            body: JSON.stringify(task), //convierte el objeto en texto que HTTP puede enviar
            headers:{
                'Content-Type': 'application/json'
            }
        });
    } catch(error){
        console.log(error)
    }
}
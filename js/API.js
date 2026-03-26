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


//Cuando se crea un nuevo cliente
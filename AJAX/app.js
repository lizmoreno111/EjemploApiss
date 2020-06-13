document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
    const xhr = new XMLHttpRequest();

    //Abrir una conexión
    xhr.open('GET', 'datos.txt', true);
    
    xhr.onreadystatechange = function(){

        console.log(`Estado ${this.readyState}`);
          
        if(this.readyState === 4 && this.status === 200){
        

      }

    }

      //ready status
      /*
      0 - No iniciado
      1.-Conexión establecida
      2.- Recibido
      3: Procesando
      4: Respuesta lista
      */

    
    //enviar request
    xhr.send();
}
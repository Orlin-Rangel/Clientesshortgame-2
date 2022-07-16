
// creamos una varibale que contenga la informacion de la respuesta y la procesamos
let usuarios = '';

// llamamos a la API por el metodo GET y la ruta usuarios
axios.get('https://ShortGame.roman-tejadatej.repl.co/usuarios')
  .then(function (response) {
    
    // preguntamos si la consulta fué exitosa con la respuesta de status = 200
    if (response.status==200){
      
      // mostramos en consola la informacion de la api que se encuentra en data
      console.log(response.data);
      // asignamos directamente el resultado al componente div en la pagina
      //document.getElementById("dvEstudiantes").innerHTML = JSON.stringify(response.data)

      // recorremos todos los elementos del resultado de la api
      for(var i=0; i<= response.data.length-1; i++){
        // console.log(response.data[i], i)
        // vamos agregando uno a uno cada uno de los resutados
        usuarios = usuarios+ "<br>"+  response.data[i].nombre + " " +response.data[i].email
      }
    }
    // le asignamos a la vista en el documento HTML al elemento div el resultado del procesamiento
    document.getElementById("dvUsuarios").innerHTML = usuarios
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
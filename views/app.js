console.log("App.js LISTO");                      //imprimo en el explorar que se cargo este script

class MYClass_01{                                 //Declaro una clase
  constructor() {                                 //Genero un constructor para inicializar variables
    this.URI = `http://localhost:3000/SQL`;
  }

  async getDATASQL() {                            //Genero una funcion asincrona
    const response = await fetch(this.URI,{method: 'GET'});       //Mediante el metodo FETCH realizo una consulta
    const myjson = await response.json();         //Dicha consulta me responde con un JSON
    return myjson;                                //Retorno el JSON generado
  }
};
var var01 = new MYClass_01();                     //Instancio la clase y la almaceno en var01

setInterval(function(){                           //Genero un Autoupdate de 1 segundo
  
  var01.getDATASQL().then(function(resp){         //De los metodos almacenados en var01 genero una promesa y ejecuto una funcion
    for(var i=0; i<5; i++){                       //la promesa me regresa una respuesta en formato JSON
      document.getElementById("ROW_0"+i).innerHTML = resp['recordset'][i]["DATA"];  //Imprimo parcialmente el JSON en la etiqueta ROW_0X
    }
  });

},1000);                                          //Tiempo del autoupdate
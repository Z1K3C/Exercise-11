//Inicializo mi servidor usando express
const express = require('express');                     //Solicito Express
const app = express();                                  //Instancio a Express
const path = require('path');                           //Solicito los metodos de PATH
const DBconnection = require('./database.js');          //Instancio a database.js para usar los metodos de conexion/consulta

//Settings
app.set('port',process.env.PORT || 3000);               //Declaro una variable con el numero del puerto en formato Express

//Middlewares
app.use(express.json());                                //Uso el middleware para interpretar JSONs

//Routes
app.get('/SQL', function(req1, res1){                   //Genero una ruta en localhost:port/SQL y respondo con un JSON
   DBconnection.query("SELECT * FROM [EXAMPLE].[dbo].[TABLE_0]",   //Genero el script SQL...
   function(err2,res2){                                 //y despues ejecuto una funcion
      if(err2){                                         //Si hay un error lo imprime en pantalla
         console.log(err2);
         throw err2;
      }
      else{                                             //Si no hay error...
         res1.status(200).json(res2);                   //Imprimimos el JSON en la ruta
      }
   });
});

//Static files
app.use(express.static(path.join(__dirname, '../views')));     //Coloco mis HTMLs CSS y Javascripts

//Starting server
app.listen(app.get('port'), function(){                  //Creo al servidor
    console.log(`Server on port ${app.get('port')}`);    //Imprimo en pantalla el status del servidor
});
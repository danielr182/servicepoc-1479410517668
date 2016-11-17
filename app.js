/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

app.get("/service", function(req, res){
	var estructuraArbol = [
     {"Arbol":"Empresa ABC",
      "children":[
        {"Arbol":"Modalidad 1", "Tipo Suma":"HS", "Moneda":"COP", "LEP":"150", "LEA":"100", "Monto Utilizado":"40", "Monto Protegido":"", "Monto Reservado":"30", "Monto Disponible":"60", "Plazo Maximo":"", "Naturaleza":"Rotativa", "Fecha Vigencia":"10/31/2020",
            "children":[
                {"Arbol":"Línea 1", "Tipo Suma":"", "Moneda":"COP", "LEP":"120", "LEA":"60", "Monto Utilizado":"10", "Monto Protegido":"", "Monto Reservado":"0", "Monto Disponible":"60", "Plazo Maximo":"", "Naturaleza":"Rotativa", "Fecha Vigencia":"10/31/2020",},
                {"Arbol":"Línea 2", "Tipo Suma":"", "Moneda":"USD", "LEP":"50", "LEA":"40", "Monto Utilizado":"0", "Monto Protegido":"", "Monto Reservado":"0", "Monto Disponible":"40", "Plazo Maximo":"", "Naturaleza":"Rotativa", "Fecha Vigencia":"10/31/2020",},
                {"Arbol":"Línea 3", "Tipo Suma":"", "Moneda":"COP", "LEP":"20", "LEA":"50", "Monto Utilizado":"20", "Monto Protegido":"15", "Monto Reservado":"0", "Monto Disponible":"30", "Plazo Maximo":"", "Naturaleza":"Rotativa", "Fecha Vigencia":"10/31/2020",}
            ]
        },
        {"Arbol":"Modalidad 2", "Tipo Suma":"NS", "Moneda":"USD", "LEP":"900", "LEA":"800", "Monto Utilizado":"240", "Monto Protegido":"", "Monto Reservado":"120", "Monto Disponible":"560", "Plazo Maximo":"", "Naturaleza":"Op. Especifica", "Fecha Vigencia":"8/31/2020"
        },
        {"Arbol":"Modalidad 3", "Tipo Suma":"SS", "Moneda":"COP", "LEP":"850", "LEA":"600", "Monto Utilizado":"240", "Monto Protegido":"", "Monto Reservado":"120", "Monto Disponible":"560", "Plazo Maximo":"", "Naturaleza":"Op. Especifica", "Fecha Vigencia":"8/31/2020",
        	"children":[
        		{"Arbol":"Línea 4", "Tipo Suma":"", "Moneda":"COP", "LEP":"450", "LEA":"60", "Monto Utilizado":"10", "Monto Protegido":"", "Monto Reservado":"0", "Monto Disponible":"60", "Plazo Maximo":"", "Naturaleza":"Rotativa", "Fecha Vigencia":"10/31/2020",},
        		{"Arbol":"Línea 5", "Tipo Suma":"", "Moneda":"COP", "LEP":"45", "LEA":"40", "Monto Utilizado":"0", "Monto Protegido":"", "Monto Reservado":"0", "Monto Disponible":"40", "Plazo Maximo":"", "Naturaleza":"Rotativa", "Fecha Vigencia":"10/31/2020",}
        	]
        }]
  	}];
	return res.json({"respuesta": estructuraArbol});
});

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

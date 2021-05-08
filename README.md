Microservicio que inyecta datos a ElasticSearch por medio de  un CSV

## Se corre en local con 
### npm install
### npm start

### Con POSTMAN se ejecuta un POST a  localhost:3100/datasport/:NOMBRE_INDICE, raw, JSON y en el body se agrega los datos en formato JSON, en el proyecto se adjunta el fichero data.json  con ejemplos generados.


### Para generar mas datos  json-generator.com

[
  '{{repeat(0, 1000)}}',
  {
    nombre: '{{firstName()}} {{surname()}}',
    edad: '{{integer(6, 100)}}',
    genero: '{{gender()}}',
    vecesporsemana: '{{integer(1, 7)}}',
    trabajo: '{{bool()}}'
  }
]

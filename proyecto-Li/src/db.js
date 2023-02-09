const mongoose = require('mongoose');

  mongoose.connect('mongodb+srv://eliana:bob@Templates-qysmo.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
    }
  ).then(db => console.log('DB is connected')).catch(err => console.error(err))
  
  
  
  //catch(err => console.log(err))

  /* 
  mongodb+srv://<username>:<password>@templates-qysmo.mongodb.net/test?retryWrites=true&w=majority

falta verificador promesa!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


promise1.then(function db(resolve,reject){
    resolve ('DB is connected');



})
  .then(function db () {
    console.log('DB is connected');
})
.catch(function (err) {
    console.error(err);
})


  var promise1 = new Promise(function(resolve, reject) {
    resolve('Success!');
  });
  
  promise1.then(function(value) {
    console.log(value);
    // expected output: "Success!"
  });

var crypto = require('crypto')
  function generateTOken(){
    return crypto.randomBytes(10).toString('hex')
  }
  
  function guardarTOken(token,nombre){
    return db.collection('sesiones').insertOne({ token: token, nombre: nombre })
  }

  var token = generarTOken()
  await guardarTOken(token, usuario.nombre);

  respuesta.send(token);

  la información se puede guardar en local storage, session storage
  y através de las cookies que no necesitan usar js.

  Son como registros de su página
  




// uri = 'mongodb+srv://<mongo>:<PQO062i74FMi0paQ>@cluster0-qysmo.mongodb.net/test?retryWrites=true&w=majority'
/*

Intento 2

mongoose.connect('mongodb+srv://<mongo>:<PQO062i74FMi0paQ>@cluster0-qysmo.mongodb.net/test?retryWrites=true&w=majority', {
   /* reconnectTries: 100,
    reconnectInterval: 500,
    autoReconnect: true, 
    useNewUrlParser: true,
    dbName: 'Cluster0',
    useUnifiedTopology: true
  })

  .then(function db () {
    console.log('DB is connected');
})
.catch(function (err) {
    console.error(err);





intento 1

mongoose.connect('mongodb+srv://<mongo>:<PQO062i74FMi0paQ>@cluster0-qysmo.mongodb.net/test?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

 .then(function db () {
    console.log('DB is connected');
})
.catch(function (err) {
    console.error(err);
})
*/
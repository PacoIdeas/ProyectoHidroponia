const express = require('express');
const mqttClient = require('./rutas/mqttService'); // Importa el cliente MQTTT
 
const app = express();
const PORT = 3000;
 

// Ruta de ejemplo en Express
app.get('/', (req, res) => {
  res.send('¡Servidor Express con MQTT!');
  // Publicar un mensaje MQTT desde Express
  mqttClient.publish('topic', 'Hola desde Express');
});

// Inicia el servidor Express
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});

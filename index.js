const express = require('express');
const { Kafka } = require('kafkajs');

(async () => {
  console.log("Initializing kafka...");
  const kafka = new Kafka({
    clientId: 'kafka-nodejs-starter',
    brokers: ['localhost:9092'],
  });
  
  // Initialize the Kafka producer and consumer
  const producer = kafka.producer();

  await producer.connect();
  console.log("Connected to producer.");
  
  // Send an event to the demoTopic topic
  await producer.send({
    topic: 'demoTopic',
    messages: [
      { value: 'This event came from another service.' },
    ],
  });
  console.log("Produced a message.");
  
  // Disconnect the producer once we’re done
  await producer.disconnect();
  
  const app = express();
  
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`🎉🎉🎉 Application running on port: ${PORT} 🎉🎉🎉`);
  });
})();
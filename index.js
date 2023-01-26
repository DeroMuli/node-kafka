const express = require('express');
const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'kafka-nodejs-starter',
  brokers: ['kafka1:9092'],
});

const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🎉🎉🎉 Application running on port: ${PORT} 🎉🎉🎉`);
});

const producer = kafka.producer()

// Connect to the producer
await producer.connect()

// Send an event to the demoTopic topic
await producer.send({
  topic: 'demoTopic',
  messages: [
    { value: 'Hello micro-services world!' },
  ],
});

// Disconnect the producer once we're done
await producer.disconnect();
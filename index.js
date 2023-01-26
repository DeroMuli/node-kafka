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
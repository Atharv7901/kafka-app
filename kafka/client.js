const {Kafka} = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "zomato-demo",
  brokers: ["localhost:9092"],
});

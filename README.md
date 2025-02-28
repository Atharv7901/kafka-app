# Kafka App with Producer, Consumer and Admin Configuration

This is a basic Kafka application built using JS. It includes a **Producer**, a **Consumer**, and **Admin** configurations to interact with Apache Kafka.

## 🚀 Getting Started

### Prerequisites
- **Node.js** (Download from [nodejs.org](https://nodejs.org/))
- **Apache Kafka** installed and running locally or on a server
- **NPM** (comes with node.js)

### Installation

1. Clone the repository:
```sh
  git clone https://github.com/Atharv7901/kafka-app
```
2. Install dependencies
```sh
  npm install
```

### 📌 Running the Application
All the code for the project is under kafka
```sh
  cd kafka
```

**Create Kafka Connection and Topics**
Run the following command to create a connection to the **Kafka server** running locally on docker:
```sh
  node admin.js
```
This will create the mentioned topics in the kafka server

**Start Producing Data**
Run the following command in the terminal to start the ***Kafka Producer***:
```sh
  node producer.js
```
This will start sending messages to Kafka topic

**Start Consuming Data**
Open another terminal window and run the ***Kafka Consumer***:
```sh
  node consumer.js -mentiongroup
```
This will subscribe to the Kafka topic and start receiving messages.

### 🔧 Configuration
Modify the ***Kafka broker***, topic names, and other settings insider **producer.js**, **consumer.js**, and admin-related files as per your requirements.

### 🛠️ Features
- Kafka Producer to send messages
- Kafka Consumer to receive messages
- Admin Configurations to manage Kafka topics
- Configurable Kafka settings


Feel free to contribute or open issues for improvements!

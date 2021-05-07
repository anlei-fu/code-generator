var kafka = require('kafka-node');
var client = new kafka.KafkaClient({
        kafkaHost: "192.168.117.149:9092",
});

var consumer = kafka.Consumer;

var consumerInstance = new consumer(client,[{ topic: 'topic1', partition: 0 }],{autoCommit:true});

// var producer =kafka.Producer;

// var producerInstance= new producer(client);

// let payloads = [
//         { topic: 'topic1', messages: 'hi', partition: 0 },
//         { topic: 'topic2', messages: ['hello', 'world'] }
// ];

// var topicsToCreate = [{
//         topic: 'topic2',
//         partitions: 2,
//         replicationFactor: 1
// }];

// client.createTopics(topicsToCreate, (err,d) => {
//         console.log("error");
//         console.log(err);
//         console.log("resp");
//         console.log(d);
// });

// producerInstance.on('ready', function () {
//         producerInstance.send(payloads, function (err, data) {
//                 console.log(data);
//         });
// });


consumerInstance.on('message', function (message) {
        console.log(message);
});

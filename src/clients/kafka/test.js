var kafka = require('kafka-node'),
        Producer = kafka.Producer,
        client = new kafka.KafkaClient({
                kafkaHost: "192.168.117.149:9092",

        }),
        producer = new Producer(client);

// let payloads = [
//         { topic: 'topic1', messages: 'hi', partition: 0 },
//         { topic: 'topic2', messages: ['hello', 'world', km] }
// ];

var topicsToCreate = [{
        topic: 'topic1',
        partitions: 1,
        replicationFactor: 2
}];

client.createTopics(topicsToCreate,(err)=>{
        console.log(err);
});

// producer.on('ready', function () {
//         producer.send(payloads, function (err, data) {
//                 console.log(data);
//         });
// });

const {KafkaStreams} = require("kafka-streams")
// Private

const createSandboxStream =  async (context) => {
    const { kafkaStreams } = context
    return new Promise((resolve, reject) => {
        const kafkaTopicName = "sandbox";
        const stream = kafkaStreams.getKStream(kafkaTopicName);
        // TODO finish handle message
        stream.forEach(message => console.log(message));
        stream.start().then(() => {
            console.log("stream started, as kafka consumer is ready.");
            resolve(true)
        }, error => {
            console.log("streamed failed to start: " + error);
            reject(error)
        });
    })
}




// Public

const createStreams = async (context) => {
    const { configuration } = context
    console.log("Starting streams...")
    context.kafkaStreams = new KafkaStreams(configuration.kafka.streams);
    context.kafkaStreams.on("error", (error) => console.error(error));
    await createSandboxStream(context)
}

module.exports = {
    createStreams
}
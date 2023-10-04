const print(msg) => log(msg, new Date());

const log(msg, timestamp) => console.log(`${timestamp.toString()}: ${msg}`);


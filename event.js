const events = require('events');

let emitter = new events.EventEmitter()

//arguments takes event name as a parameter
emitter.on('newEvent', (message) => {
    console.log(`Message:  ${message}`)
});

//Executing(takes in the event name as first parameter and the message as second parameter)
emitter.emit('newEvent', "Hello guys this is Mokic")
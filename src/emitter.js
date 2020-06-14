/*
class EventEmitter {}

const emitter = new EventEmitter();

const unsub = emitter.on("poof!", event => {
    console.log("PUFF: ", event);
});

emitter.emit("poof!", "PFFF");

emitter.on("poof!", event => {
    console.log("DUFF: ", event);
});

emitter.emit("poof!", "PFFF");
// 2 handlers fired

// unsub(); unsubscribes specific listener

// can be few event names
*/

class EventEmitter {
    constructor() {
        this.events = {};
    }

    emit(eventName, data) {
        const event = this.events[eventName];
        if( event ) {
            event.forEach(fn => {
                fn.call(null, data);
            });
        }

    }

    on(event, func) {
        if (this.events[event]) {
            // don't add duplicates.
            if (this.events[event].indexOf(func) !== -1) return;

            return this.events[event].push(func);
        }

        this.events[event] = [func];

       return  () =>{
           //delete specific listener
           this.events = this.events[event].filter(eventFunc => eventFunc!==func);

       }
    }

}
export default EventEmitter;



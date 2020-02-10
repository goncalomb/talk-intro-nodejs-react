const fs = require('fs');
const path = require('path');

// this is the "main" module, it runs before the event loop

console.log('hi');

setTimeout(() => {
    // this is run on the timers phase
    console.log(3);
});

fs.readFile(path.join(__dirname, '..', 'README.md'), (err, data) => {
    // this is run on the io phase
    console.log(`file with ${data.length} bytes`);
    setImmediate(() => {
        // this is run on the check phase
        console.log(7);
    });
    Promise.resolve().then(() => {
        // this is run between phases
        console.log(3);
    });
});

process.nextTick(() => {
    // this is run between phases
    console.log(1);
});

/**
 * simplified event loop:
 *
 *               /--------\        /----\        /-------\
 * "main"  --->  | timers |  --->  | io |  --->  | check |
 *               \--------/        \----/        \-------/
 *                     ^-----------------------------/
 *
 * things to consider:
 * - the event loop has multiple phases (each with a FIFO queue of callbacks): timers, io, check (and other internal phases, not relevant for this example)
 * - there are also 2 other queues, the nextTick and microtask, these callbacks are run between each phase
 * - setTimeout schedules a callbacks on the timers queue
 * - I/O callbacks run on the io phase (poll)
 * - process.nextTick schedules a callback on the nextTick queue (run between each phase)
 * - promise callbacks are scheduled on the microtask queue (run between each phase)
 *
 * read more about the event loop:
 * https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
 * https://developer.ibm.com/technologies/node-js/tutorials/learn-nodejs-the-event-loop/
 */

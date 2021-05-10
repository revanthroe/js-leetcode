/**
 * Amazon Interview Question on PriorityQueue
 */


var jsPriorityQueue = require("js-priority-queue")
var priorityQueue = new jsPriorityQueue();

let filemap = [4,8,6,12]
for(let file of filemap) {
    priorityQueue.queue(file);
}

let result = 0;
while(priorityQueue.length > 1) {
    let merge = priorityQueue.dequeue() + priorityQueue.dequeue();
    result += merge;
    priorityQueue.queue(merge);
}
console.log(result);

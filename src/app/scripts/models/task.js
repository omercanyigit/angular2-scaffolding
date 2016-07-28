"use strict";
var Task = (function () {
    function Task(name, done) {
        this.name = name;
        this.done = done;
    }
    Task.prototype.toggleDone = function () {
        this.done = !this.done;
    };
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map
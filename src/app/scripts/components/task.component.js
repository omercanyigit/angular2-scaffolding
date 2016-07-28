"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var core_4 = require("@angular/core");
var TaskComponent = (function () {
    function TaskComponent() {
        this.statusChanged = new core_4.EventEmitter();
    }
    TaskComponent.prototype.toggleDone = function () {
        this.task.toggleDone();
        this.statusChanged.emit(null);
    };
    __decorate([
        core_2.Input()
    ], TaskComponent.prototype, "task");
    __decorate([
        core_3.Output()
    ], TaskComponent.prototype, "statusChanged");
    TaskComponent = __decorate([
        core_1.Component({
            selector: 'task',
            templateUrl: './app/html/task.html'
        })
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map
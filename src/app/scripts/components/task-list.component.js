"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var task_service_1 = require("../services/task-service");
var task_component_1 = require("./task.component");
var TaskListComponent = (function () {
    function TaskListComponent(_taskService) {
        this._taskService = _taskService;
        this.tasks = _taskService.getTasks();
        this.calculateTodoCount();
    }
    TaskListComponent.prototype.ngOnInit = function () {
        console.log("Todo component initialized with " + this.tasks.length + " tasks.");
    };
    TaskListComponent.prototype.calculateTodoCount = function () {
        this.todoCount = this.tasks.filter(function (t) { return !t.done; }).length;
    };
    TaskListComponent.prototype.select = function (task) {
        this.selectedTask = task;
    };
    TaskListComponent = __decorate([
        core_1.Component({
            selector: 'task-list',
            templateUrl: './app/html/task-list.html',
            directives: [task_component_1.TaskComponent],
            providers: [task_service_1.TaskService]
        })
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var task_service_1 = require("../../services/task.service");
//import {Task} from '../../../Task';
var TasksComponent = (function () {
    function TasksComponent(taskService) {
        this.taskService = taskService;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            console.log(tasks);
        });
    }
    return TasksComponent;
}());
TasksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tasks',
        templateUrl: 'tasks.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof task_service_1.TaskService !== "undefined" && task_service_1.TaskService) === "function" && _a || Object])
], TasksComponent);
exports.TasksComponent = TasksComponent;
var _a;
//# sourceMappingURL=tasks.component.js.map
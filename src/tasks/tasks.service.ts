import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    return ['Task 1', 'Task 2', 'Task 3'];
  }

  createTask() {
    return 'Create task';
  }

  updateTask() {
    return 'Update task';
  }

  deleteTask() {
    return 'Delete task';
  }

  patchTask() {
    return 'Patch task';
  }
}

import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  index() {
    return [{ id: 1, title: 'First Task' }];
  }
}

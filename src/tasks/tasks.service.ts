import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { log } from 'console';
import { TaskDto } from './dtos/task.dto';

@Injectable()
export class TasksService {
  create(createTaskDto: CreateTaskDto): TaskDto {
    log('Creating task with data:', createTaskDto);
    const newTask = new TaskDto(
      Math.floor(Math.random() * 1000),
      createTaskDto.name,
      createTaskDto.description ?? '',
      false,
    );
    return newTask;
  }
}

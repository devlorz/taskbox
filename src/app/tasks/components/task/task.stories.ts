import { TaskComponent } from './task.component';
import { action } from '@storybook/addon-actions';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updateAt: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  pinTask: action('pinTask'),
  archiveTask: action('archiveTask')
};

storiesOf('Task', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TaskComponent],
      imports: [CommonModule]
    })
  )
  .add('default', () => {
    return {
      template: `
        <app-task [task]="task"
                  (pinTask)="pinTask($event)"
                  (archiveTask)="archiveTask($event)"></app-task>
      `,
      props: {
        task,
        pinTask: actions.pinTask,
        archiveTask: actions.archiveTask
      }
    };
  })
  .add('pinned', () => {
    return {
      template: `<app-task [task]="task" (pinTask)="pinTask($event)" (archiveTask)="archiveTask($event)" ></app-task>`,
      props: {
        task: { ...task, state: 'TASK_PINNED' },
        pinTask: actions.pinTask,
        archiveTask: actions.archiveTask
      }
    };
  })
  .add('archived', () => {
    return {
      template: `<app-task [task]="task" (pinTask)="pinTask($event)" (archiveTask)="archiveTask($event)" ></app-task>`,
      props: {
        task: { ...task, state: 'TASK_ARCHIVED' },
        pinTask: actions.pinTask,
        archiveTask: actions.archiveTask
      }
    };
  });

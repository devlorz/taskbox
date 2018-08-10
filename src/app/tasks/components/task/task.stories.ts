import { TaskComponent } from './task.component';
import { action } from '@storybook/addon-actions';
import { storiesOf, moduleMetadata } from '@storybook/angular';

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
      declarations: [TaskComponent]
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
  });

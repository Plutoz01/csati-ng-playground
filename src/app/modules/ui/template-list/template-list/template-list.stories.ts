import { TrackByFunction } from '@angular/core';
import { action } from '@storybook/addon-actions';
import { TemplateListComponent } from './template-list.component';
import { Meta, Story, Args, StoryContext } from '@storybook/angular';
import { TemplateListModule } from '../template-list.module';

export default {
  title: 'Template list',
  excludeStories: /.*Data$/
} as Meta;

const template: Story<TemplateListComponent<any>> = (args: Args, context: StoryContext) => ({
  component: TemplateListComponent,
  props: {
    itemClick: action('itemClick'),
    selectionChange: action('selectionChange'),
    ...args,
  },
  moduleMetadata: {
    imports: [TemplateListModule],
  },
});

export const PrimitiveItems = template.bind({});
PrimitiveItems.args = {
  items: ['first', 'second', 'third'],
  selectable: true,
  selected: 'third'
};

export interface Task {
  id: number;
  title: string;
  status: string;
}

export const taskItemsData: Task[] = [
  { id: 1, title: 'Task 1', status: 'to do' },
  { id: 2, title: 'Task 2', status: 'in progress' },
  { id: 3, title: 'Task 3', status: 'fisnihed' },
  { id: 4, title: 'Task 4', status: 'obsoleted' },
];

const taskTrackByFn: TrackByFunction<Task> = (_index, item) => (item ? item.id : undefined);

const taskTemplate: Story<TemplateListComponent<Task>> = (args, context) => ({
  ...template(args, context),
  template: `
  <pg-template-list
    [items]="items"
    [itemTemplate]="taskTpl"
    [trackByFn]="trackByFn"
    [selectable]="selectable"
    [selected]="selected"
    (itemClick)="itemClick($event)"
    (selectionChange)="selectionChange($event)"></pg-template-list>

  <ng-template #taskTpl let-item let-selected="isSelected" let-index="index" let-count="count">
      <h4>Item details:</h4>
      <span>id: {{item.id}} || title: {{item.title}} || status: {{item.status}}</span>
      <h4>Context:</h4>
      <span>isSelected: {{selected}} || index: {{index}} || count: {{count}}</span>
  </ng-template>
`,
});

export const ObjectItems = taskTemplate.bind({});
ObjectItems.args = {
  items: taskItemsData,
  selectable: true,
  selected: taskItemsData[1],
  trackByFn: taskTrackByFn,
};

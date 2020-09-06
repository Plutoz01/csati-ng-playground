import { TemplateListComponent } from './template-list.component';
import { action } from '@storybook/addon-actions';
import { TrackByFunction } from '@angular/core';

export default {
  title: 'Template list',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onItemClick: action('itemClick'),
  onSelectionChange: action('selectionChange'),
};

export const simpleItemsData = ['first', 'second', 'third'];

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

const taskTrackByFn: TrackByFunction<Task> = (index, item) => {
  console.log("[taskTrackByFn] item: ", item);
  return item ? item.id : undefined;
}

export const PrimitiveItems = () => ({
  component: TemplateListComponent,
  props: {
    items: [...simpleItemsData],
    itemClick: actionsData.onItemClick,
    selectionChange: actionsData.onSelectionChange,
  },
});

export const GenericItems = () => ({
  moduleMetadata: {
    declarations: [TemplateListComponent]
  },
  props: {
    items: [...taskItemsData],
    itemClick: actionsData.onItemClick,
    selectionChange: actionsData.onSelectionChange,
    trackByFn: taskTrackByFn
  },
  template: `
  <h1>List here:</h1>
    <pg-template-list [items]="items"
      [itemTemplate]="taskTpl"
      [trackByFn]="trackByFn"
      (itemClick)="itemClick($event)"
      (selectionChange)="selectionChange($event)"></pg-template-list>

    <ng-template #taskTpl let-item let-selected="isSelected" let-index="index" let-count="count">
      <div [ngStyle]="{'background-color': selected ? 'yellow' : null}">
        <div>Item details:id: {{item.id}} || title: {{item.title}} || status: {{item.status}}</div>
        <div>Context details: isSelected: {{selected}} || index: {{index}} || count: {{count}}</div>
      </div>
      <br/>
    </ng-template>
  `
});

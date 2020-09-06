import { Component, ChangeDetectionStrategy, Input, TemplateRef, TrackByFunction, Output, EventEmitter } from '@angular/core';
import { TemplateListItemContext } from '../template-list-item-context.interface';

@Component({
  selector: 'pg-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateListComponent<T> {
  @Input() items: T[] = [];
  @Input() itemTemplate?: TemplateRef<TemplateListItemContext<T>>;
  @Input() trackByFn?: TrackByFunction<T>;
  @Input() selectable = true;
  @Input() selected?: T;
  // TODO: load indicator

  @Output() itemClick = new EventEmitter<T>();
  @Output() selectionChange = new EventEmitter<T | null>();

  onItemClick(item: T) {
    if (this.selectable) {
      this.selected = this.compareWithSelected(item) ? undefined : item;
      this.selectionChange.emit(this.selected);
    }
    this.itemClick.emit(item);
  }

  isSelected(item: T): boolean {
    return this.selectable ? this.compareWithSelected(item) : false;
  }

  private compareWithSelected(item: T): boolean {
    if (this.trackByFn) {
      return (
        this.trackByFn(undefined, this.selected) ===
        this.trackByFn(undefined, item)
      );
    }
    return this.selected === item;
  }
}

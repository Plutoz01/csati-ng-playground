import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateListComponent } from './components/template-list.component';

@NgModule({
  declarations: [TemplateListComponent],
  imports: [CommonModule],
  exports: [TemplateListComponent],
})
export class TemplateListModule {}

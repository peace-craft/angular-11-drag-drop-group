import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ItemComponent } from './item/item.component';
import { DragDropAreaComponent } from './drag-drop-area/drag-drop-area.component';
import { DragDropGroupComponent } from './drag-drop-group/drag-drop-group.component';

@NgModule({
  declarations: [AppComponent, ItemComponent, DragDropAreaComponent, DragDropGroupComponent],
  imports: [BrowserModule, DragDropModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

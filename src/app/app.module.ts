import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropAreaComponent } from './drag-drop-area/drag-drop-area.component';
import { DragDropGroupComponent } from './drag-drop-group/drag-drop-group.component';
import { GroupComponent } from './group/group.component';
import { DealsBiComponent } from './deals-bi/deals-bi.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropAreaComponent,
    DragDropGroupComponent,
    GroupComponent,
    DealsBiComponent,
  ],
  imports: [BrowserModule, DragDropModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

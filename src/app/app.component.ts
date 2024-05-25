import { Component, EventEmitter, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angular11app';
  @Output()
  merged = new EventEmitter<any>();

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    console.log(
      this.movies[event.currentIndex],
      event.previousIndex,
      event.currentIndex
    );
  }

  removeItem(deleteItem: any) {
    console.log(deleteItem);
    // for (let column of this.detail.columns) {
    //   const itemIndex = _.findIndex(
    //     column.items,
    //     (item) => item.id === deleteItem.id
    //   );
    //   if (itemIndex >= 0) {
    //     column.items.splice(itemIndex, 1);
    //     return;
    //   }
    // }
  }

  onItemDrop(e: any, dropedOn: any) {
    console.log('onItemDrop', e, dropedOn);
  }

  onItemDrop2(e: any, dropedOn: any) {
    const dragged = e.dragData;
    if (dragged.id != dropedOn.id) {
      dropedOn.text = dropedOn.text + `\n + ` + e.dragData.text;
      this.merged.emit(dragged);
      console.log('merged', dropedOn.text);
    }
  }
}

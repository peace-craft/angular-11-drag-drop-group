import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

interface Item {
  id: number;
  name: string;
}

interface Group {
  items: Item[];
}

@Component({
  selector: 'app-drag-drop-area',
  templateUrl: './drag-drop-area.component.html',
  styleUrls: ['./drag-drop-area.component.less'],
})
export class DragDropAreaComponent implements OnInit {
  items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  name: string = '';
  mergedItems: Item[] = [];
  inputs: string[] = [];
  groups: Group[] = [{ items: [] }];

  @Output()
  merged = new EventEmitter<Item>();

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<Item[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      try {
        console.log(event);
        // const mergedItem = { id: this.getNextId(), name: 'Merged Item' };
        // this.name = JSON.stringify(this.items[event.currentIndex].name);
        this.name = this.items[event.previousIndex].name;
        const mergedItem: Item = {
          // id: this.getNextId(),
          id: this.items[event.previousIndex].id,
          name: this.name,
        };
        console.log(mergedItem);
        this.mergedItems.push(mergedItem);
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          this.mergedItems.length - 1
        );
      } catch (error) {}
    }
  }

  getNextId(): number {
    return (
      Math.max(
        ...this.items.map((item) => item.id),
        ...this.mergedItems.map((item) => item.id)
      ) + 1
    );
  }

  unmerge(item: Item) {
    const index = this.mergedItems.indexOf(item);
    if (index > -1) {
      this.mergedItems.splice(index, 1);
    }
  }

  onItemDrop(e: any, dropedOn: any) {
    const dragged = e.dragData;
    if (dragged.id != dropedOn.id) {
      dropedOn.text = dropedOn.text + `\n` + e.dragData.text;
      this.merged.emit(dragged);
    }
  }

  addInput() {
    this.inputs.push('');
    console.log(this.inputs);
  }

  addGroup() {
    this.groups.push({ items: [] });
  }
}

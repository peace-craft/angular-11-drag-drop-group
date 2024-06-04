import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-merge-group',
  templateUrl: './merge-group.component.html',
  styleUrls: ['./merge-group.component.less'],
})
export class MergeGroupComponent implements OnInit {
  @Input() movies: string[] = [];
  private _currentIndex;
  constructor() {}

  ngOnInit(): void {}

  get hoverIndex(): number {
    return this._currentIndex;
  }

  set hoverIndex(newIndex: number) {
    this._currentIndex = newIndex;
  }

  listFilter = [
    {
      id: 0,
      name: 'Bank Name',
      hierarchyUniqueName: '[Banks].[Bank Name]',
      values: [],
      selected: [],
      type: 'company-select',
      IsExcluded: false,
    },
    {
      id: 2,
      name: 'Company Name',
      hierarchyUniqueName: '[Company].[Company Name]',
      values: [],
      selected: [],
      type: 'company-select',
      IsExcluded: false,
    },
    {
      id: 3,
      name: 'Company Nation Region',
      hierarchyUniqueName: '[Company].[Company Nation Region]',
      values: [],
      selected: [],
      type: 'multi-select',
      IsExcluded: false,
    },
  ];

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.listFilter, event.previousIndex, event.currentIndex);
  // }

  drop(event: CdkDragDrop<string[]>) {
    if (event.currentIndex < event.container.data.length - 1) {
      console.log('combine items');
      const combinedItem = `${event.container.data[event.currentIndex]} + ${
        event.container.data[event.currentIndex + 1]
      }`;
      event.container.data.splice(event.currentIndex, 2, combinedItem);
      console.log('-----------------------');
      console.log(event.container.data);
    }
    if (event.previousContainer === event.container) {
      console.log(
        this.movies[event.currentIndex],
        ' ++ ',
        this.movies[event.container['hoverIndex']]
      );
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      if (event.currentIndex < event.container.data.length - 1) {
        console.log('combine items');
        const combinedItem = `${event.container.data[event.currentIndex]} + ${
          event.container.data[event.currentIndex + 1]
        }`;
        event.container.data.splice(event.currentIndex, 2, combinedItem);
      }
    }
  }

  sortPredicate(index: number, item: CdkDrag<number>) {
    this.hoverIndex = index;
  }
}

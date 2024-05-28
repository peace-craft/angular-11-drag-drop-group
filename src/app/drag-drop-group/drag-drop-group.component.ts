import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-group',
  templateUrl: './drag-drop-group.component.html',
  styleUrls: ['./drag-drop-group.component.less'],
})
export class DragDropGroupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  groups = [
    {
      id: 1,
      title: 'Group 1',
      items: [
        {
          name: 'Item 1 - Group 1',
        },
        {
          name: 'Item 2 - Group 1',
        },
        {
          name: 'Item 3 - Group 1',
        },
        {
          name: 'Item 4 - Group 1',
        },
      ],
      editing: false,
    },
    {
      id: 2,
      title: 'Group 2',
      items: [
        {
          name: 'Item 1 - Group 2',
        },
        {
          name: 'Item 2 - Group 2',
        },
        {
          name: 'Item 3 - Group 2',
        },
        {
          name: 'Item 4 - Group 2',
        },
      ],
      editing: false,
    },
    {
      id: 3,
      title: 'Group 3',
      items: [
        {
          name: 'Item 1 - Group 3',
        },
      ],
      editing: false,
    },
  ];

  dropItem(event: CdkDragDrop<string[]>, groupId?: number) {
    if (event.previousContainer === event.container) {
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
    }
    const data = this.groups.find((g) => g.id === groupId);
    console.log(data.items[event.currentIndex].name);
  }

  getConnectedList(): any[] {
    return this.groups.map((x) => `${x.id}`);
  }

  dropGroup(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.groups, event.previousIndex, event.currentIndex);
  }

  addGroup() {
    const maxId = this.groups.reduce(
      (max, group) => (group.id > max ? group.id : max),
      0
    );
    this.groups.push({
      id: maxId + 1,
      title: `Group ${maxId + 1}`,
      items: [],
      editing: false,
    });
  }

  removeGroup(groupId: number, index: number) {
    const group = this.groups.find((g) => g.id === groupId);
    if (group) {
      console.log('group: ', group);
      this.groups.splice(index, 1);
    }
    console.log('groups: ', this.groups);
  }

  getItem(groupId: number) {
    console.log(
      'get item: ',
      JSON.stringify(this.groups[groupId - 1], null, 2)
    );
  }

  editGroup(index: number) {
    this.groups[index].editing = true;
  }

  saveGroup(index: number) {
    this.groups[index].editing = false;
  }

  removeItemInGroup(groupId: number, itemName: string) {
    const group = this.groups.find((g) => g.id === groupId);
    if (group) {
      group.items = group.items.filter((item) => item.name !== itemName);
    }
  }

  handleKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.editGroup(index);
      event.preventDefault();
    }
  }

  addItemInGroup(groupId: number) {
    try {
      const group = this.groups.find((group) => group.id === groupId);
      if (group) {
        group.items.push({
          name: `Item ${group.items.length + 1} - Group ${groupId}`,
        });
      }
    } catch (error) {
      console.log(error, ' group is not exiting...');
    }
  }
}

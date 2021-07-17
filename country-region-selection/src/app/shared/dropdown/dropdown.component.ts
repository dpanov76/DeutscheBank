import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() items: string[] = [];

  onSelect( country: string ): void {
    //dispatch select country action
  }
}

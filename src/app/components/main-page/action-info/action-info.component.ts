import { Component, Input } from '@angular/core';
import { PageInfo } from 'src/app/models/interfaces/page-info.interface';

@Component({
  selector: 'qr-action-info',
  templateUrl: './action-info.component.html',
  styleUrls: ['./action-info.component.scss'],
})
export class ActionInfoComponent {
  @Input() activePageInfo!: PageInfo;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'wmd-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class WnbPageHeaderComponent {
  @Input() title!: string;
  @Input() subTitle!: string;
}

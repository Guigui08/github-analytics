import { Component, Input } from '@angular/core';

@Component({
  selector: 'wmd-commits-timeline',
  templateUrl: './commits-timeline.component.html',
  styleUrls: ['./commits-timeline.component.scss'],
})
export class CommitsTimelineComponent {
  @Input() commits!: any[];
}

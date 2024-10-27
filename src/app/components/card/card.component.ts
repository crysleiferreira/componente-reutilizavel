import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule
  ],
  templateUrl:'./card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent { 
  @Input() title: string = '';
  @Input() content: string = '';
  
}

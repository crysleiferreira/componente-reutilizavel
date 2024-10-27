import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
],
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  
 }

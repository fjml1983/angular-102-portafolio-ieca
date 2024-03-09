import { Component, Input } from '@angular/core';
import { Daily } from '../../interfaces/daily';

@Component({
  selector: 'app-info-daily-card',
  templateUrl: './info-daily-card.component.html',
  styleUrl: './info-daily-card.component.css'
})
export class InfoDailyCardComponent {
  @Input('notaDelDia') daily: Daily = {
    id:0,
    note:""
  }
}

import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { UserInfo } from '../../models/user.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() userData: UserInfo = {
    name: "Ernesto Garcia",
    numberPhonr: 5555555555,
    numerAccount: 123456,
    startOfTerm: new Date('2021-12-13'),
    endOfTerm: new Date('2023-12-13'),
    term: 12,
    plan: "ATT&T Ármalo 8 GB",
  };
}

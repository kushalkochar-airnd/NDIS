import { Component, signal } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './clients/components/client-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ClientListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ndis-ui');
}

import { Component, OnInit } from '@angular/core';
import { ClientService, Client } from '../services/client.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients$: Observable<Client[]>;

  constructor(private clientService: ClientService) {
    this.clients$ = this.clientService.getClients();
  }

  ngOnInit(): void {}
}

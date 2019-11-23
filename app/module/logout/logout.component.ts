import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cmail-logout',
  templateUrl: '',
  styleUrls: ['']
})
export class LogoutComponent implements OnInit {

  constructor(private roteador: Router) { 
    localStorage.removeItem('TOKEN');
    this.roteador.navigate(['/login']);
  }

  ngOnInit() { }

}
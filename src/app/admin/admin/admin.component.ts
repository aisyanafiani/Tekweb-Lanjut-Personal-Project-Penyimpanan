import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl:'./admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  mode:string='side';

  menu = [
    {
      name: 'Class',
      icon: 'home',
      url: '/admin/dashboard'
    },
    {
      group: 'Enrolled',
      children: [
        {
          name: 'Teknologi Website Lanjut',
          icon: 'laptop_chromebook',
          url: '/admin/product'
        },
        {
          name: 'Pemrograman Visual',
          icon: 'integration_instructions',
          url: '/public/home'
        },
        {
          name: 'Sekuritas Komputer',
          icon: 'vpn_key',
          url: '/public/home'
        }
      ]
    }
  ];

}
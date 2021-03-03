import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  backgroundImgs = [
    'assets/img/br.jpg',
    'assets/img/pk.jpg',
    'assets/img/cz2.jpg',
    'assets/img/db1.webp',
    'assets/img/db2.jpg',
    'assets/img/n1.jpg',
    'assets/img/n2.jpg',
    'assets/img/pk.jpg',
    'assets/img/pk2.jpg',
    'assets/img/pk3.jpg',
  ];

  constructor() {}

  ngOnInit() {
    this.setBackgroundImg();
    setInterval(() => {
      this.setBackgroundImg();
    }, 10000);
  }

  setBackgroundImg(): any {
    let random = this.getRandom(0, this.backgroundImgs.length);
    let bgImg = `url(${this.backgroundImgs[random]})`;
    const main = document.getElementById('main');
    main.style.backgroundImage = bgImg;
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

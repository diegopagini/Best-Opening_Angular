import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  openings = [
    { name: 'Pokemon', video: 'https://www.youtube.com/embed/uDIoEbbFKAY' },
    { name: 'Dragon Ball', video: 'https://www.youtube.com/embed/9Hbd1QeI1Og' },
    { name: 'Naruto', video: 'https://www.youtube.com/embed/uMyuSHewmks' },
  ];

  backgroundImgs = [
    'assets/img/br.jpg',
    'assets/img/br1.jpg',
    'assets/img/cz1.jpg',
    'assets/img/cz2.jpg',
    'assets/img/db1.jpg',
    'assets/img/db2.jpg',
    'assets/img/n1.jpg',
    'assets/img/n2.jpg',
    'assets/img/pk2.jpg',
    'assets/img/pk3.jpg',
    'assets/img/one1.jpg',
    'assets/img/one2.jpg',
    'assets/img/yg.jpg',
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

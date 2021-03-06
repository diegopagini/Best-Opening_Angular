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
    {
      name: 'Ranma 1/2',
      video: 'https://www.youtube.com/embed/OcYKuG9Ceys',
    },
    {
      name: 'Sailor Moon',
      video: 'https://www.youtube.com/embed/Zq8_XppDXdk',
    },
    {
      name: 'Inuyasha',
      video: 'https://www.youtube.com/embed/MwyQf8BaOK4',
    },
    {
      name: 'Caballeros del Zodiaco',
      video: 'https://www.youtube.com/embed/XkUV1Ry9q7Q',
    },
    {
      name: 'Slam Dunk',
      video: 'https://www.youtube.com/embed/euW71JOlKy0',
    },
    {
      name: 'Dragon Ball Z',
      video: 'https://www.youtube.com/embed/-r27tgxNr1I',
    },
    {
      name: 'Bt X',
      video: 'https://www.youtube.com/embed/rxcgCwjYVdM',
    },
    {
      name: 'El Baron Rojo',
      video: 'https://www.youtube.com/embed/dQPiE0qN_gE&t=72s',
    },
    {
      name: 'Dragon Ball GT',
      video: 'https://www.youtube.com/embed/wgZ-ATUGXDw',
    },
    {
      name: 'Yu-Gi-Oh!',
      video: 'https://www.youtube.com/embed/fZZkvMKd4Fs',
    },
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
    'assets/img/inu1.jpg',
    'assets/img/ran1.jpg',
    'assets/img/inu2.jpg',
    'assets/img/sm.jpg',
    'assets/img/sm1.jpg',
    'assets/img/slam1.jpg',
    'assets/img/slam2.jpg',
    'assets/img/btx.jpg',
    'assets/img/btx2.jpg',
    'assets/img/neon.jpg',
    'assets/img/gt1.jpg',
    'assets/img/gt2.jpg',
  ];

  constructor() {}

  ngOnInit() {
    this.setBackgroundImg('header-1');
    this.setBackgroundImg('header-2');
    this.setBackgroundImg('header-3');
    this.setBackgroundImg('header-4');
    this.setBackgroundImg('header-5');

    setInterval(() => {
      this.setBackgroundImg('header-1');
      this.setBackgroundImg('header-2');
      this.setBackgroundImg('header-3');
      this.setBackgroundImg('header-4');
      this.setBackgroundImg('header-5');
    }, 10000);
  }

  setBackgroundImg(element): any {
    let random = this.getRandom(0, this.backgroundImgs.length);
    let bgImg = `url(${this.backgroundImgs[random]})`;
    const main = document.getElementById(element);
    main.style.backgroundImage = bgImg;
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

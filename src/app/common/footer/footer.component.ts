import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
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
    this.setBackgroundImg('footer-1');
    this.setBackgroundImg('footer-2');
    this.setBackgroundImg('footer-3');
    this.setBackgroundImg('footer-4');
    this.setBackgroundImg('footer-5');

    setInterval(() => {
      this.setBackgroundImg('footer-1');
      this.setBackgroundImg('footer-2');
      this.setBackgroundImg('footer-3');
      this.setBackgroundImg('footer-4');
      this.setBackgroundImg('footer-5');
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

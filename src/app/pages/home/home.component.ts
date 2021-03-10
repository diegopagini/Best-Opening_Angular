import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  vote: boolean = true;

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
      video: 'https://www.youtube.com/embed/dQPiE0qN_gE',
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

  constructor() {}

  ngOnInit() {}

  voteOpening() {
    this.vote = !this.vote;
  }
}

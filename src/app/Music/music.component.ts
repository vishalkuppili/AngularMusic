import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';
import { MusicModel } from './music.model';


@Component({
    selector: 'app-music',
    templateUrl: "./music.component.html",
    styleUrls: ['./music.component.css']
})

export class MusicComponent{

    musicModel: MusicModel[];
    title: String = 'Music Application';

    constructor(private _musicService: MusicService){}
    
    ngOnInit(): void{
        this._musicService.getArtists()
          .subscribe((data) => this.musicModel = data);
      }
  
}

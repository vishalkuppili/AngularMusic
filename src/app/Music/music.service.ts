import { Injectable } from '@angular/core';
import { MusicModel } from './music.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class MusicService {

    private _musicUrl = 'https://ngmusicdb.herokuapp.com/api/getMusic';
    constructor(private _httpClient: HttpClient) {}

    getArtists(): Observable<MusicModel[]> {
        return this._httpClient.get<MusicModel[]>(this._musicUrl);
    }
}

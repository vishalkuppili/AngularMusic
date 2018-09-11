export interface MusicModel {
    _id: string;
    artists:{
        id: number;
        name: string;
        cover: string;
        bio: string;
        genre: string;
        albums: {
                albumId: string;
                title: string;
                year: number;
                cover: string;
                price: number;
       }

    }
}



export interface SongCard{
    imgURL: string;
    name: string,
    artist: string;
    id: number;
}

export function individual(search: SongCard){
    return (
        <div className="song-card-inner" key={search.id}>
            <img src={search.imgURL} style={{height:'100px'}}/>
            <div className="song-card-text">
                <h1>{search.name}</h1>
                <p>{search.artist}</p>
            </div>
        </div>
    )

}


export function reformatIndividual(songData: any){
    var artists = "by ";
    const name = songData.name;
    const id = songData.id;
    const imgUrl = songData.album.images[0].url;

    for (var artist of songData.artists){
        artists+= `${artist.name}, `
    }
    artists = artists.slice(0,-2);

    return {
        id: id,
        name: name,
        artist: artists,
        imgURL: imgUrl,

    } as SongCard;
}

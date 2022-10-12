import React from 'react';
import style from "../home.module.scss";

const Charts = () => {
    const songs = [
        {
            id: 1,
            image: "1.png",
            title: "golden age of 80s",
            artist: "sean swadder",
            time: {
                hour: 2,
                minute: 34,
                second: 45,
            }
        },
        {
            id: 2,
            image: "2.png",
            title: "golden age of 80s",
            artist: "sean swadder",
            time: {
                hour: 2,
                minute: 34,
                second: 45,
            }
        },
        {
            id: 3,
            image: "3.png",
            title: "golden age of 80s",
            artist: "sean swadder",
            time: {
                hour: 2,
                minute: 34,
                second: 45,
            }
        },
    ];

    return (
        <div className={style.chart}>
            {
                songs.map(function (song) {
                    return (
                        <div key={song.id} className={style.song_container}>
                            <div className={style.song_image}>
                                <img src={require(`./${song.image}`)} alt={song.title} />
                            </div>
                            <div className={style.song_info}>
                                <p>{song.title}</p>
                                <p>{song.artist}</p>
                                <p>
                                    <span>{song.time.hour}</span>:<span>{song.time.minute}</span>:<span>{song.time.second}</span>
                                </p>
                            </div>
                            <div className={style.song_fav}>
                                <img src={require("./heart.png")} alt="like" />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Charts;
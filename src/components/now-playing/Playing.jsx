import React from 'react';
import style from "./playing.module.scss";

const Playing = () => {
    return (
        <section className={style.playing}>
            <div className={style.play_left}>
                <img src="https://dummyimage.com/200x200/000/fff" alt="" />
                <div>
                    <span>name of song</span>
                    <span>artist</span>
                </div>
            </div>
            <div className={style.play_center}>
                <div>
                    <span>
                        shuffle
                    </span>
                    <span>
                        previous
                    </span>
                    <span>
                        play/pause
                    </span>
                    <span>
                        next
                    </span>
                    <span>
                        repeat
                    </span>
                </div>
                <div>
                    <div>
                        <span>seek</span>
                    </div>
                </div>
            </div>
            <div className={style.play_right}>
                <span>volume</span>
                <div>
                    <span>volume amount</span>
                </div>
            </div>
        </section>
    );
};

export default Playing;
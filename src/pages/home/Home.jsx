import React from 'react';
import style from "./home.module.scss";
import Charts from './components/Charts';

const Home = () => {
    return (
        <section className={style.home}>
            <div className={style.hero}>
                <div className={style.hero_left}>
                    <div>
                        <span>
                            currated playlist
                        </span>
                        <div>
                            <span>
                                r & b hits
                            </span>
                            <p>
                                All mine, Lie again, Petty call me everyday <br />
                                Out of time, No love, Bad habit, <br />
                                and so much more.
                            </p>
                        </div>
                        <span>
                            <img src={require("./favourites.png")} alt="" />
                        </span>
                    </div>

                    <div>
                        <span>
                            <img src={require("./vector.png")} alt="" />
                        </span>
                        <span>
                            <img src={require("./person.png")} alt="" />
                        </span>
                    </div>
                </div>
                <div className={style.hero_right}>
                    <h2>top charts</h2>
                    <Charts />
                </div>
            </div>
        </section >
    );
};

export default Home;
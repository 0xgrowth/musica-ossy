import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./navigation.module.scss";
import {
    Home,
    MusicPlaylist,
    Radio,
    VideoHorizontal,
    Profile,
    Logout,
} from 'iconsax-react';

const Navigation = () => {
    return (
        <nav className={style.side_nav}>
            <div className={style.nav_top}>
                <NavLink className={style.link} to="/">
                    <Home size="32" color="#FACD66" variant='Bold' />
                </NavLink>
                <NavLink className={style.link} to="/collections">
                    <MusicPlaylist size="32" color="#efeee040" variant="Bold" />
                </NavLink>
                <div className={style.link}>
                    <Radio size="32" color="#efeee040" variant="Bold" />
                </div>
                <div className={style.link}>
                    <VideoHorizontal size="32" color="#efeee040" variant="Bold" />
                </div>
            </div>

            <div className={style.nav_bottom}>
                <div className={style.link}>
                    <Profile size="32" color="#efeee040" variant="Bold" />
                </div>
                <div className={style.link}>
                    <Logout size="32" color="#efeee040" variant="Bold" />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
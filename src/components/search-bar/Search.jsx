import React from 'react';
import style from "./search.module.scss";
import { SearchNormal1 } from 'iconsax-react';

const Search = () => {
    return (
        <nav className={style.top_nav}>
            <div className={style.logo}>
                <img src={require("./logo.png")} alt="logo" />
            </div>
            <div className={style.search_bar}>
                <SearchNormal1 size="24" color="#efeee040" />
                <input type="text" placeholder='search artists' />
            </div>
        </nav>
    );
};

export default Search;
import React from 'react';

import logo from '../../../assets/logo.svg' ;
import search from '../../../assets/search-solid.svg';
import shoppingBag from '../../../assets/shopping-bag-solid.svg';

import './styles.scss';

const Search = () => {
    return (
        <div className="container-fluid">
            <div className="row search-container">
                <div className="col-xl-2 d-block d-sm-none d-md-block">
                    <img src={logo} className="search-container__logo"/>
                </div>
                <div className="col-xl-8 col-sm-10 search-container__box">
                    <div className="search-container__box__placeholder">Search within 26 million photos, illustrations & videos</div>
                    <img src={search} className="search-container__box__search-icon"/>
                </div>
                <div className="col-xl-2 col-sm-2" style={{alignSelf: 'center'}}>
                    <img src={shoppingBag} className="search-container__box__shopping-bag-icon"/>
                </div>
            </div>
        </div>
    );
}

export default Search;
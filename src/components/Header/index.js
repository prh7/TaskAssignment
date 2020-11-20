import React from 'react';

import './styles.scss';

const Header = () => (
    <div className="container-fluid">
        <div className="row sub-container">
            <div className="col">
                <div style={{display: 'flex'}}>
                    <div className="text">
                        Categories
                    </div>
                    <div className="text">
                        Images
                    </div>
                    <div className="text">
                        Vectors
                    </div>
                    <div className="text">
                        Videos
                    </div>
                </div>
            </div>
            <div className="col">
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <div className="text">
                        Prices
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="text">
                        Login
                    </div>
                    <div className="text">
                        Sign up
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Header;

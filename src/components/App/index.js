import React, {useState, useEffect}  from 'react';
import Header from 'components/Header';
import Search from 'components/Search';

import popularSearches from '../../../assets/popular-searches';

const App = () => {
    const size = 4;
    const [searches, setSearches] = useState([]);
    
    useEffect(() => {
        const size = 4;
        const result = popularSearches.reduce((acc, curr, i) => {
            if ( !(i % size)  ) {
              acc.push(popularSearches.slice(i, i + size));
            }
            return acc;
          }, []);
          setSearches(result);
    }, []);

    return <>
        <div style={{position: 'sticky', top: 0, zIndex: 2}}>
            <Header />
            <Search />
        </div>
        <div className="container-fluid">  
            <div>
                <h2>Popular Searches</h2>
                <div style={{display: 'flex'}}>
                    {
                        searches.map((item, idx) => {
                            return <div className="col-xl-3" key={idx} style={{display: 'flex', flexDirection: 'column', padding: 0}}>
                                {
                                    item.map((itm, i) => <a key={i} href={itm.url}>{itm.name}</a>)
                                }
                            </div>
                        })
                    }
                </div>
            </div> 
            <div className="row">
                <div className="col-xl-10 col-sm-8" >
                    <h2>Save 80% with Theme Packs</h2>
                </div>
                <div className="col-xl-2 col-sm-4">
                    <a style={{float: 'right', color: '#000000'}} href="">See all Theme Packs</a>
                </div> 
            </div>
            <div className="row">
                <div className="col-xl-6">
                    <img src={'../../../assets/christmas-min.png'} style={{width: '100%'}}/>
                    <div style={{marginTop: 15}}>
                        <h4>Christmas Pack</h4>
                        <h6>Includes: 25 images</h6>
                    </div>
                </div>
                <div className="col-xl-6">
                    <img src={'../../../assets/bundle21.png'} style={{width: '100%'}}/>
                    <div style={{marginTop: 15}}>
                        <h4>Autumn Pack</h4>
                        <h6>Includes: 22 images, 3 vectors</h6>
                    </div>
                </div> 
            </div>
        </div>
    </>
};

export default App;

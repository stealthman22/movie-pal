import React from 'react'

//  import components

import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';
import LoadMoreBtn from './elements/LoadMoreBtn';
import MovieThumb from './elements/MovieThumb';


// Use a react fragment when you don't wanna create a div
// or just empty brackets, it still is fragment 
const Home = () => (
    <React.Fragment>
        <HeroImage />
        <SearchBar />
        <Grid />
        <MovieThumb />
        <Spinner />
        <LoadMoreBtn />
    </React.Fragment>
)

export default Home;
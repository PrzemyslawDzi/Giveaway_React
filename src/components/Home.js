import React from 'react';
import HomeHeader from './HomeHeader'
import HomeMainSection from './HomeMainSection'
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";


class Home extends React.Component{
    render() {
        return(
            <>
                <HomeHeader/>
                <HomeMainSection/>
                <HomeThreeColumns/>
                <HomeSteps/>
            </>
        )
    }

}




export default Home;
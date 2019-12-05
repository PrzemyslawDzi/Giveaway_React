import React from 'react';
import HomeHeader from './HomeHeader'
import HomeMainSection from './HomeMainSection'
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";
import HomeAboutUs from "./HomeAboutUs";

class Home extends React.Component{
    render() {
        return(
            <>
                <HomeHeader/>
                <HomeMainSection/>
                <HomeThreeColumns/>
                <HomeSteps/>
                <HomeAboutUs/>
            </>
        )
    }

}




export default Home;
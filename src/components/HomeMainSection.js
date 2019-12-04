import React from 'react';


class HomeMainSection extends React.Component{
    render() {
        return(
            <>
                <div className={'home-main-container'}>
                        <div className={'home-main-image'}/>
                    <section className={'home-main-text-container'}>
                        <div className={"home-main-text"}>
                            <p>Zacznij pomagać!</p><br/>
                            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                            <div className={"home-main-line"}></div>
                            <div className={'home-main-links'}>
                                <a className={'home-main-link'} href="">Oddaj <br/>
                                rzeczy</a>
                                <a className={'home-main-link'} href="">Zorganizuj <br/>
                                Zbiórkę</a>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}






export default HomeMainSection;
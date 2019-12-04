import React from 'react';


class HomeHeader extends React.Component{
    render() {
        return(
            <>
                <div className={'header-container'}>
                    <div className={'header-first-row'}>
                        <ul>
                            <li>Zaloguj</li>
                            <li>Załóż konto</li>
                        </ul>
                    </div>
                    <div className={'header-second-row'}>
                        <ul>
                            <li>Start</li>
                            <li>O co chodzi?</li>
                            <li>O nas</li>
                            <li>Fundacja i organizacje</li>
                            <li>Kontakt</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}






export default HomeHeader;



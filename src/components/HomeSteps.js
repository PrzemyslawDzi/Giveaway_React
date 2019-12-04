import React from 'react';

class HomeSteps extends React.Component{
    render() {
        return(
            <>
                <div className={'home-steps-container'}>
                    <div className={'home-steps-header'}>
                        <p>Wystarczą 4 proste kroki</p>
                        <p className={'home-steps-line'}/>
                    </div>
                    <div className={'home-all-steps'}>
                        <div className={'home-all-steps-container'}>
                            <EachStep icon={'icon1'} text={'Wybierz rzeczy'} description={'ubrania, zabawki, sprzęt i inne'}/>
                            <EachStep icon={'icon2'} text={'Spakuj je'} description={'skorzystaj z worków na śmieci'}/>
                            <EachStep icon={'icon3'} text={'Zdecyduj komu chcesz pomóc'} description={'wybierz zaufane miejsce'}/>
                            <EachStep icon={'icon4'} text={'Zamów kuriera'} description={'kurier przyjedzie w dogodnym terminie'}/>
                        </div>
                    </div>
                    <div className={'home-steps-footer'}>
                        <a href="" className={'home-steps-button'}>Oddaj <br/> rzeczy</a>
                    </div>
                </div>
            </>
        )
    }

}

class EachStep extends React.Component{
    render() {
        return(
            <>
                <div className={'home-each-step'}>
                    <div className={this.props.icon}/>
                    <p>{this.props.text}</p>
                    <hr/>
                    <p>{this.props.description}</p>
                </div>
            </>
        )
    }
}

export default HomeSteps
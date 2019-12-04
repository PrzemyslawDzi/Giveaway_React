import React from 'react';


class HomeThreeColumns extends React.Component{
    render() {
        return(
            <>
                <section className={'home-three-container'}>
                    <Column number={10} description={'Oddanych Worków'}/>
                    <Column number={5} description={'Wspartych Organizacji'}/>
                    <Column number={7} description={'Zorganizowanych Zbiórek'}/>
                </section>
            </>
        )
    }
}

class Column extends React.Component{
    render() {
        return(
            <>
                <div className={'home-column'}>
                    <p>{this.props.number}</p>
                    <p>{this.props.description}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto, cumque distinctio dolor ducimus eligendi fuga illum incidunt iste labore laborum.</p>
                </div>
            </>
        )
    }

}




export default HomeThreeColumns
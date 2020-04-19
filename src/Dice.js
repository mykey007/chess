import React, { Component } from 'react'
import './Dice.css';
class Dice extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
        this.getRandom = this.getRandom.bind(this)
    }
    getRandom() {
        // pick random number
        let rand = Math.floor(Math.random() * 10) + 1
        // update state with new number
        this.setState({num: rand})
    }
    render() {
        return(
            <div>
                <i className={`Dice fas fa-dice-${this.props.face}`} />
                
            </div>
        )
    }
}

export default Dice
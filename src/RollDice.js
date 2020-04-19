import React, { Component } from 'react'
import Dice from './Dice'
import './RollDice.css'

class RollDice extends Component {
    // this wont change, make it static
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    constructor(props) {
        super(props)
        this.state = { dice1: 'one', dice2: 'two', rolling: false }
        this.roll = this.roll.bind(this)
    }

    roll() {
        // pick two new rolls
         const newDice1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
         const newDice2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        // set state with new rolls
        this.setState({ dice1: newDice1, dice2: newDice2, rolling: true })

        // wait one second to update text
        setTimeout(() => {
            this.setState({rolling: false})
        }, 1000)
    }

    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-continer'>
                    <Dice face={this.state.dice1}/>
                    <Dice face={this.state.dice2}/> 
                    <hr />
                    <button className="Biggton" onClick={this.roll} disabled={this.state.rolling}>
                        {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                    </button>
                </div>
            </div>
        )
    }
}

export default RollDice
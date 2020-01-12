import React, { Component } from 'react';

class Main extends Component {

    startNewGame = () => {
        console.log('lolololo')
        console.log(this.refs.playernumber.value);
        this.props.history.push('/game/', { response: this.refs.playernumber.value });
    }

    render() {
        return (
            <div>
                Hiiiii there
                <div>
                    Select number of players.
                    <select ref="playernumber" defaultValue="4">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
                <button onClick={this.startNewGame}>Start</button>
            </div>
        )
    }
}

export default Main
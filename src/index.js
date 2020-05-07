import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.value}
    </button>
  );
}


class Score extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      timer: 60,
    };
  }

  handleClick(i) {
    this.setState({
      score: this.state.score + i
    });
  }

  startNewGame() {
    this.resetGame()
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  resetGame() {
    this.setState({
      score: 0,
      timer: 60
    });
    clearInterval(this.timerID)
  }

  tick() {
    if (this.state.timer === 0) {
      clearInterval(this.timerID)
    } else {
      this.setState({
        timer: this.state.timer - 1
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>Skee Ball Score App</h1>
          <h1>Time left: {this.state.timer}</h1>
          <h1>Current Score: {this.state.score}</h1>
        </div>
        <div>
          <Button value="10 points" onClick={() => this.handleClick(10)} />
          <Button value="50 points" onClick={() => this.handleClick(50)} />
          <Button value="100 points" onClick={() => this.handleClick(100)} />
          <Button value="Start New Game" onClick={() => this.startNewGame()} />
          <Button value="Reset Game" onClick={() => this.resetGame()} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Score />,
  document.getElementById('root')
)

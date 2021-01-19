const React = require('react');

class BuyButton extends React.Component {
  render() {
    return (
      <form action={this.props.endpoint} method="POST">
        <input type="submit" value={`Buy ${this.props.name}`}></input>
      </form>
    );
  }
}

module.exports = BuyButton;

const React = require('react');

class DeleteButton extends React.Component {
  render() {
    return (
      <form action={this.props.endpoint} method="POST">
        <input type="submit" value={`Delete ${this.props.name}`}></input>
      </form>
    );
  }
}

module.exports = DeleteButton;

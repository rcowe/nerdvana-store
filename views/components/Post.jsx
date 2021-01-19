const React = require('react');

class Post extends React.Component {
  render() {
    return (
      <li className={'post-card'}>
        <h2 className={'post-card__heading'}>{this.props.name}</h2>
        <h4 className={'post-card__body'}>{this.props.description}</h4>
        {/* <h4 className={'post-card__body'}>{this.props.img}</h4> */}
        <img src={`/img/${this.props.img} `} className={'post-card__body'} />
        <h4 className={'post-card__body'}>{this.props.price}</h4>
        <h4 className={'post-card__body'}>{this.props.qty}</h4>
        {this.props.children}
      </li>
    );
  }
}
module.exports = Post;

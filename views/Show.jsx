const React = require('react');
const AppLayout = require('./layouts/AppLayout');
const Post = require('./components/Post');

class Show extends React.Component {
  render() {
    return (
      <AppLayout
        title={`${this.props.Product.name} Item Page`}
        pageClass={'show'}
      >
        <Post>
          name={this.props.Product.name}
          description={this.props.Product.description}
          img={this.props.Product.img}
          price={this.props.Product.price}
          qty={this.props.Product.qty}
        </Post>
      </AppLayout>
    );
  }
}

module.exports = Show;

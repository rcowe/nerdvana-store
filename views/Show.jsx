const React = require('react');
const AppLayout = require('./layouts/AppLayout');
// const Post = require('./components/Post');
const DeleteButton = require('./components/DeleteButton');
const BuyButton = require('./components/BuyButton');
const ShowLayout = require('./layouts/ShowLayout');

class Show extends React.Component {
  render() {
    return (
      <AppLayout
        title={`${this.props.Product.name} Item Page`}
        pageClass={'show'}
      >
        <ShowLayout
          name={this.props.Product.name}
          description={this.props.Product.description}
          img={this.props.Product.img}
          price={this.props.Product.price}
          qty={this.props.Product.qty}
        ></ShowLayout>
        <a href={`/nerdvana/${this.props.Product._id}/edit`}>Edit Item</a>
        <BuyButton
          endpoint={`/nerdvana/${this.props.Product._id}`}
          name={this.props.Product.name}
        >
          <a href={`/nerdvana/${this.props.Product._id}/cart/`}>Buy</a>
        </BuyButton>
        <DeleteButton
          endpoint={`/nerdvana/${this.props.Product._id}?_method=DELETE`}
          name={this.props.Product.name}
        >
          <a href={`/nerdvana/${this.props.Product._id}`}>
            Delete This Product Here
          </a>
        </DeleteButton>
      </AppLayout>
    );
  }
}

module.exports = Show;

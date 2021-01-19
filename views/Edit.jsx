const React = require('react');
const AppLayout = require('./layouts/AppLayout');

class Edit extends React.Component {
  render() {
    return (
      <AppLayout
        title={`${this.props.Product.name} Edit Page`}
        pageClass={'edit'}
      >
        <form action="/nerdvana" method="POST">
          <label>
            Item Name:{' '}
            <input type="text" name="name" value={this.props.Product.name} />
          </label>
          <label>
            Description:{' '}
            <input
              type="text"
              name="description"
              value={this.props.Product.description}
            />
          </label>
          <label>
            Image:{' '}
            <input type="text" name="img" value={this.props.Product.img} />
          </label>
          <label>
            Price:{' '}
            <input
              type="Number "
              name="price"
              value={this.props.Product.price}
            />
          </label>
          <label>
            Quantity:{' '}
            <input type="Number" name="qty" value={this.props.Product.qty} />
          </label>
          <input type="submit" value={'Edit an Existing Product'} />
        </form>
      </AppLayout>
    );
  }
}

module.exports = Edit;

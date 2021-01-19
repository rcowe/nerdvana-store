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
          </label>{' '}
          <br />
          <label>
            {' '}
            <br />
            Description:{' '}
            <input
              type="text"
              name="description"
              value={this.props.Product.description}
            />
          </label>{' '}
          <br />
          <label>
            {' '}
            <br />
            Image:{' '}
            <input type="text" name="img" value={this.props.Product.img} />
          </label>{' '}
          <br />
          <label>
            {' '}
            <br />
            Price:{' '}
            <input
              type="Number "
              name="price"
              value={this.props.Product.price}
            />
          </label>{' '}
          <br />
          <label>
            {' '}
            <br />
            Quantity:{' '}
            <input type="Number" name="qty" value={this.props.Product.qty} />
          </label>{' '}
          <br />
          <input type="submit" value={'Edit an Existing Product'} /> <br />
        </form>
      </AppLayout>
    );
  }
}

module.exports = Edit;

const React = require('react');
const AppLayout = require('./layouts/AppLayout');

class New extends React.Component {
  render() {
    return (
      <AppLayout title={'New Page'} pageClass={'new'}>
        <form action="/nerdvana" method="POST">
          <label>
            Item Name: <input type="text" name="name" />
          </label>
          <label>
            Description: <input type="text" name="description" />
          </label>
          <label>
            Image: <input type="text" name="img" />
          </label>
          <label>
            Price: <input type="Number " name="price" />
          </label>
          <label>
            Quantity: <input type="Number " name="qty" />
          </label>
          <input type="submit" value={'Add a Product'} />
        </form>
      </AppLayout>
    );
  }
}

module.exports = New;

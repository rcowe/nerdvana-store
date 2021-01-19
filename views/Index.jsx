const React = require('react');
const AppLayout = require('./layouts/AppLayout');
// const Post = require('./components/Post');
const IndexLayout = require('./layouts/IndexLayout');
const BuyButton = require('./components/BuyButton');

class Index extends React.Component {
  render() {
    return (
      <AppLayout title={'Index Page'} pageClass={'index'}>
        <a href="/nerdvana/newItem">Add New Item</a>
        <ul>
          {this.props.Products.map((nerdvanaItem) => {
            return (
              <IndexLayout
                key={nerdvanaItem._id}
                name={nerdvanaItem.name}
                description={nerdvanaItem.description}
                img={nerdvanaItem.img}
                price={nerdvanaItem.price}
                qty={nerdvanaItem.qty}
              >
                <a href={`/nerdvana/${nerdvanaItem._id}`}>
                  See More About: {`${nerdvanaItem.name}`}
                </a>
                <BuyButton
                  endpoint={`/nerdvana/${nerdvanaItem._id}?_method=POST`}
                  name={nerdvanaItem.name}
                >
                  <a href={`/nerdvana/${nerdvanaItem._id}/buy/`}>Buy</a>
                </BuyButton>
              </IndexLayout>
            );
          })}
        </ul>
      </AppLayout>
    );
  }
}

module.exports = Index;

const React = require('react');
const AppLayout = require('./layouts/AppLayout');
const Post = require('./components/Post');
const Button = require('./components/Button');

class Index extends React.Component {
  render() {
    // const theItem = this.props.nerdvana;
    return (
      <AppLayout>
        <a href="/nerdvana/newItem">Add New Item</a>
        <ul>
          {this.props.nerdvana.map((nerdvanaItem) => {
            console.log('accessed map func, 14');
            return (
              <Post
                key={nerdvanaItem._id}
                name={nerdvanaItem.name}
                description={nerdvanaItem.description}
                // img={}
                price={nerdvanaItem.price}
                qty={nerdvanaItem.qty}
              >
                <a href={`/nerdvana/${nerdvanaItem._id}`}>Go to Pages:</a>
                {/* <Button>Show More</Button>
                <Button>Add to Cart</Button> */}
              </Post>
            );
          })}
        </ul>
      </AppLayout>
    );
  }
}

module.exports = Index;

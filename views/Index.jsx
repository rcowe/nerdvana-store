const React = require('react');
const AppLayout = require('./layouts/AppLayout');
const Post = require('./components/Post');
const Button = require('./components/Button');
class Index extends React.Component {
  render() {
    const theItem = this.props.nerdvana;
    return (
      <AppLayout>
        <a href="/nerdvana/new">Add New Item</a>
        <ul>
          {theItem.nerdvana.map((nerdvana) => {
            return (
              <Post
                key={nerdvana._id}
                name={nerdvana.name}
                img={}
                price={nerdvana.price}
                qty={nerdvana.qty}
              >
                <Button>Show More</Button>
                <Button>Add to Cart</Button>
              </Post>
            );
          })}
        </ul>
      </AppLayout>
    );
  }
}

module.exports = Index;

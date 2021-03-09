const React = require('react');

class IndexLayout extends React.Component {
  render() {
    return (
      <div className="index-layout">
        <div className="staff-picks">Staff Picks</div>
        <a href="/nerdvana/newItem">Add a New Product</a>
        <ul className="products">
          <li>
            <div className="product-index-card">
              <div className={'post-card__heading'}>{this.props.name}</div>
              <div className={'post-card__img'}>
                <a href={`/nerdvana/${this.props._id}/`}>
                  <img
                    src={`/img/${this.props.img} `}
                    width="500"
                    height="500"
                    alt=""
                  />
                </a>
              </div>
              <div className={'post-card__description'}>
                {this.props.description}
              </div>
              <div className={'post-card__price'}>{this.props.price}</div>
              <div className={'post-card__quantity'}>{this.props.qty}</div>
              {this.props.children}
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

module.exports = IndexLayout;

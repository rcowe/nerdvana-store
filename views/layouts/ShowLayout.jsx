const React = require('react');

class ShowLayout extends React.Component {
  render() {
    return (
      <div className="single-item-view">
        <a className="back-home-show" href="/nerdvana">
          Back Home
        </a>
        <h1>{this.props.name}</h1>
        <div className="single-layout">
          <div className="single-item-img">
            <img src={`/img/${this.props.img} `} width="500" height="500" />
          </div>

          <div className="single-item-name">{this.props.name}</div>

          <div className="single-item-description">
            {this.props.description}
          </div>

          <div className="single-item-price">
            Current Price: {this.props.price}
          </div>

          <div className="single-item-qty">
            Current Quantity: {this.props.qty}
          </div>

          {this.props.children}
        </div>
      </div>
    );
  }
}

module.exports = ShowLayout;

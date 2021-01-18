const React = require('react');

class AppLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/css/main.css" />
          <title>{this.props.nerdvana.name}</title>
        </head>
        <body>
          <div>
            <h1>{this.props.nerdvana.name}</h1>
            {this.props.children}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = AppLayout;

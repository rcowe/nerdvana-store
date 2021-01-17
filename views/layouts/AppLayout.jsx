const React = require('react');

class AppLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/css/main.css" />
          <title>{this.props.title}</title>
        </head>
        <body>
          <div className={this.props.pageClass}>
            <h1>{this.props.title}</h1>
            {this.props.children}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = AppLayout;

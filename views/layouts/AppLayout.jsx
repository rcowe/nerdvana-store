const React = require('react');

class AppLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/css/main.css" />
          <title>NerdVana</title>
        </head>
        <body>
          <div className="grid-container">
            <header className="page-header">
              <div className="brand">
                <a href="/nerdvana">
                  <h1>NerdVana</h1>
                </a>
                {/* <h1>NerdVana</h1> */}
              </div>
              <div className="header-links">
                <a href="">About NerdVana</a>
                <a href="">Sign In</a>
                <a href="">Cart</a>
                <a href="">Account</a>
              </div>
            </header>
            <aside className="sidebar">
              <h3>Shopping Categories</h3>
              <ul>
                <li>
                  <a href="">Star Wars</a>
                </li>
                <li>
                  <a href="">Game of Thrones</a>
                </li>
              </ul>
            </aside>
            <main className="main">
              <div className="content">
                <div className={this.props.pageClass}>
                  {this.props.children}
                </div>
              </div>
            </main>
          </div>
          <footer className="footer">All rights reserved.</footer>
        </body>
      </html>
    );
  }
}

module.exports = AppLayout;

//
// I prever using css over letting React set the styles, so I linked the css file in the html file head.
// I will probably make another example using a build tool to combine the css into this file.
//

var HeaderMain = React.createClass({
  displayName: "HeaderMain",

  /*
  This is where you put the html-like syntax that JSX will use to build the html of the React
  component.
  If you are not going to use just javascript then it would be html, but JSX requires a few
  differences from normal html syntax, which is why I said html-like.
  */
  render: function() {
    return (
      <div className="header-main">
        <a href="/">
          <svg className="icon-logo">
            <use xlinkHref='svg/my-svgs.svg#airbnb-icon' />
          </svg>
        </a>

        <div className="right-btn login">Log In</div>
        <div className="right-btn signup">Sign Up</div>
        <div className="right-btn help">Help</div>
        <div className="right-btn become-a-host">
          <div>Become a Host</div>
        </div>

        <div className="search-bar-wrapper">
          <form className="search-form">
            <div className="search-bar">
              <div className="search-bar-icon"></div>
              <input type="text" placeholder="Where to?" autocomplete="off" name="location" id="header-search-form" class="location"></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<HeaderMain  />, document.body);

var React           = require('react');
var ReactDOM        = require('react-dom');
var ArticleList     = require('./components/articles/ArticleList.jsx');
var SocialIconsList = require('./components/social/SocialIconsList.jsx');

ReactDOM.render(<ArticleList />, document.getElementById('article-list'));
ReactDOM.render(<SocialIconsList />, document.getElementById('social-icons-list'));

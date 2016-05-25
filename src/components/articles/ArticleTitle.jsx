var React = require('react');

var ArticleTitle = React.createClass({
    render: function() {
        return (<h3>{this.props.articleTitleText}</h3>);
    }
});

module.exports = ArticleTitle;

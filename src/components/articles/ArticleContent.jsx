var React = require('react');

var ArticleContent = React.createClass({
    render: function() {
        return (<p>{this.props.articleContentText}</p>);
    }
});

module.exports = ArticleContent;

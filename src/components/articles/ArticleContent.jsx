var React = require('react');

var ArticleContent = React.createClass({
    render: function() {
        return (<p>{this.props.articleContentCopy}</p>);
    }
});

module.exports = ArticleContent;

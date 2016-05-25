var React = require('react');

var ArticleSubtitle = React.createClass({
    render: function() {
        return (<h5>{this.props.articleSubtitleText}</h5>);
    }
});

module.exports = ArticleSubtitle;

var React = require('react');

var ArticleThumb = React.createClass({
    render: function() {
        return (<img src={this.props.articleThumbSrc} />);
    }
});

module.exports = ArticleThumb;

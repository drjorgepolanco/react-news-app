var React = require('react');

var ArticleSubtitle = React.createClass({
    render: function() {
        return (<h5>{this.props.subtitleCopy}</h5>);
    }
});

module.exports = ArticleSubtitle;

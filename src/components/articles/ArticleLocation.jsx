var React = require('react');

var ArticleLocation = React.createClass({
    render: function() {
        return (<h6>{this.props.articleLocationText}</h6>);
    }
});

module.exports = ArticleLocation;

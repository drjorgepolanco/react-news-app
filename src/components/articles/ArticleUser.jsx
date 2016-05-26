var React = require('react');

var ArticleUser = React.createClass({
    render: function() {
        return (
            <img src={this.props.articleUserProfilePic} />
        );
    }
});

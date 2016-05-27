var React = require('react');

var SocialIcon = React.createClass({
    render() {
        return (
            <li className="social-icon">
                <i className={"fa fa-" + this.props.socialNetwork + " fa-fw"}></i>
            </li>
        );
    }
});

module.exports = SocialIcon;

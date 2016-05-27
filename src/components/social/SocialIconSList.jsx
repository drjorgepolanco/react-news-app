var React      = require('react');
var SocialIcon = require('./SocialIcon.jsx');

var counter = 0;
var icons = [
    {
        "id": counter++,
        "name": "twitter"
    },
    {
        "id": counter++,
        "name": "facebook"
    },
    {
        "id": counter++,
        "name": "instagram"
    },
    {
        "id": counter++,
        "name": "linkedin"
    },
    {
        "id": counter++,
        "name": "envelope"
    },
];

var SocialIconsList = React.createClass({
    render: function() {
        var listOfSocialIcons = icons.map(function(icon) {
            return (<SocialIcon key={icon.id} socialNetwork={icon.name} />);
        });

        return (<ul className="social-icons-list-items">{listOfSocialIcons}</ul>);
    }
});

module.exports = SocialIconsList;

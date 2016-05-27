var React           = require('react');
var ArticleTitle    = require('./ArticleTitle.jsx');
var ArticleSubtitle = require('./ArticleSubtitle.jsx');
var ArticleContent  = require('./ArticleContent.jsx');
var ArticleThumb    = require('./ArticleThumb.jsx');
var ArticleLocation = require('./ArticleLocation.jsx');
var ArticleUser     = require('./ArticleUser.jsx');

var Article = React.createClass({
    render: function() {
        var title      = this.props.title,
            subtitle   = this.props.subtitle,
            content    = this.props.content,
            thumb      = this.props.thumb,
            location   = this.props.location;
            profilePic = this.props.profilePic;

        return (
            <li className="row panel panel-default">
                <div className="col-xs-12 inner">
                    <div className="col-xs-12 col-sm-2">
                        <ArticleUser articleUserProfilePic={profilePic} />
                    </div>
                    <div className="col-xs-12 col-sm-10">
                        <ArticleTitle articleTitleText={title} />
                        <ArticleSubtitle articleSubtitleText={subtitle} />
                        <ArticleContent articleContentText={content} />
                        <ArticleThumb articleThumbSrc={thumb} />
                        <ArticleLocation articleLocationText={location} />
                    </div>
                </div>
            </li>
        );
    }
});

module.exports = Article;

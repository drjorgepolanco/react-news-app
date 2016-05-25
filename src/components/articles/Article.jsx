var React           = require('react');
var ArticleTitle    = require('./ArticleTitle.jsx');
var ArticleSubtitle = require('./ArticleSubtitle.jsx');
var ArticleContent  = require('./ArticleContent.jsx');
var ArticleThumb    = require('./ArticleThumb.jsx');
var ArticleLocation = require('./ArticleLocation.jsx');

var Article = React.createClass({
    render: function() {
        var title    = this.props.title,
            subtitle = this.props.subtitle,
            content  = this.props.content,
            thumb    = this.props.thumb,
            location = this.props.location;

        return (
            <li className="row">
                <div className="col-xs-12">
                    <ArticleTitle articleTitleText={title} />
                    <ArticleSubtitle articleSubtitleText={subtitle} />
                    <ArticleContent articleContentText={content} />
                    <ArticleThumb articleThumbSrc={thumb} />
                    <ArticleLocation articleLocationText={location} />
                </div>
            </li>
        );
    }
});

module.exports = Article;

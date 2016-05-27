var React   = require('react');
var Article = require('./Article.jsx');

var counter = 0;
var articles = [
    {
        "id": counter++,
        "title": "First Article Title",
        "subtitle": "First Article Subtitle",
        "content": "Nonne vides quid sit? Tu es ... Jesse me respice. Tu ... blowfish sunt. A blowfish! Cogitare. Statura pusillus, nec sapientium panem, nec artificum. Sed predators facile prædam blowfish secretum telum non se habet. Non ille? Quid faciam blowfish, Isai. Blowfish quid faciat? In blowfish inflat, purus?",
        "thumb": "http://i.imgur.com/hOtWXAp.gif",
        "location": "New York, NY",
        "profilePic": "http://i.imgur.com/eFtGFtr.jpg"
    },
    {
        "id": counter++,
        "title": "Second Article Title",
        "subtitle": "Second Article Subtitle",
        "content": "Blowfish librantur in se quatuor, quinquies maior quam normalis, et quare? Quare id faciam? Ut terrorem facit, qui quid. Terrent! Ut alter, scarier pisces agminis off. Et quod tu es? Vos blowfish. Tu iustus in omnibus visio. Vides ... suus ' suus 'non aliud aerem. Nunc ... qui cum partibus blowfish Isai? Tu damnare ius. Vos blowfish. Dicere iterum. Dicere illam quasi velis eam. Es BLOWFISH!",
        "thumb": "http://i.imgur.com/NdOut3L.gif",
        "location": "Santa Monica, CA",
        "profilePic": "http://i.imgur.com/yJbNh8s.jpg"
    },
    {
        "id": counter++,
        "title": "Third Article Title",
        "subtitle": "Third Article Subtitle",
        "content": "Ut sibi fuerat socius sagittis. Ego intervenerit. Vere quia a te nuper iratus occidit illos undecim annorum puer. Deinde, si hoc forte qui fuit imperavit.",
        "thumb": "http://i.imgur.com/gIo45d8.gif",
        "location": "Miami, FL",
        "profilePic": "http://i.imgur.com/SSMMfX3.jpg"
    },
    {
        "id": counter++,
        "title": "Fourth Article Title",
        "subtitle": "Fourth Article Subtitle",
        "content": "Quod satis pecuniae sempiternum. Ut sciat oportet motum. Nunquam invenies eum. Hic de tabula. Ego vivere, ut debui, et nunc fiant. Istuc quod opus non est. Lorem ipsum occurrebat pragmaticam semper ut, si quis ita velim tibi bene recognoscere. Quorum duo te mihi videtur.",
        "thumb": "http://i.imgur.com/TFM6t7A.gif",
        "location": "Minneapolis, MN",
        "profilePic": "http://i.imgur.com/7yWvSie.jpg"
    }
];

var ArticleList = React.createClass({
    render: function() {

        var listOfArticles = articles.map(function(article) {
            return (<Article key={article.id} title={article.title} subtitle={article.subtitle} content={article.content} thumb={article.thumb} location={article.location} profilePic={article.profilePic} />);
        });

        return (<ul>{listOfArticles}</ul>);
    }
});

module.exports = ArticleList;

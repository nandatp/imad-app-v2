var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {

articleone: {
    title: 'Article One | Heern Darji',
    heading: 'Article One',
    date: 'Feb 16, 2017',
    content: `  <p>This is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.</p>

                    <p>This is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.</p>

                    <p>This is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.</p>

                    <p>This is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.</p>

                    <p>This is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.</p>`

},
articletwo: {
    title: 'Article Two | Heern Darji',
    heading: 'Article Two',
    date: 'Feb 16, 2017',
    content: `  <p>This is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.</p>

                    <p>This is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.</p>

                    <p>This is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.</p>

                    <p>This is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.</p>

                    <p>This is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.</p>`
                  },
articlethree: {
     title: 'Article Three | Heern Darji',
    heading: 'Article Three',
    date: 'Feb 16, 2017',
    content: `  <p>This is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.</p>

                    <p>This is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.</p>

                    <p>This is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.</p>

                    <p>This is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.</p>

                    <p>This is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.his is the fucking first line.</p>`
}

};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
        <html>
          <head>
                            <title>${title}</title>
                             <link href="/ui/style.css" rel="stylesheet" />
                        </head>


                        <body>
                            <div class="container">
                                <div>
                                <a href="/">Home</a>
                                </div>
                                </hr>
                                <h3>${heading}</h3>
                                <div>
                                    ${date}
                                </div>

                                <div>
                                ${content}

                                </div>
                            </div>
                        </body>
                    </html>
                    `;


    return htmlTemplate;

};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

/*app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
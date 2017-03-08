var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

var articles = {
'article-One': {
title: 'Article One | Nanda',
heading: 'Article One',
date: 'March 6,2017',
content: `
<p>
Content for my first article.Content for my first article.Content for my first article.Content for my first article.Content for my first article.
</p>
<p>
Content for my first article. Content for my first article. Content for my first article.Content for my first article.Content for my first article.
</p>
<p>
Content for my first article. Content for my first article. Content for my first article.Content for my first article.Content for my first article.
</p>`
},
'article-two': {
title: 'Article Two | Nanda',
heading: 'Article Two',
date: 'March 7,2017',
content: `
<p>
Content for my Second article.

</p>`
},
'article-three': {
    title: 'Article Three | Nanda',
heading: 'Article Three',
date: 'March 8,2017',
content: `
<p>
Content for my third article.
</p>`
}
};

function createTemplate (data){
var title = data.title;
var date = data.date;
var heading = data.heaading;
var content = data.content;

var htmltemplate = `
<html>
 <head>
     <title>
         $(title)
     </title>
     <link href="/ui/style.css" rel="stylesheet" />
 </head>   
  <body>
      <div class="container">
      <div>
          <a href="/">Home</a>
      </div>
      <hr/>
      <h3>
          $(heading)
      </h3>
      <div>
          $(date)
      </div>
     $(content)
      </div>
  </body>  
</html>
`;
return htmltemplate;
} 




app.get('/', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/:articleName', function (req, res){
  //articleName == article-one
  //articles[articleName] == {} content object for article one
  var articleName = req.params.articlename;
  res.send(CreateTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

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

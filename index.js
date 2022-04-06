// run `node index.js` in the terminal

var fs = require('fs');
var path = require('path');
var MarkdownIt = require('markdown-it');
var md = new MarkdownIt();

var MarkdownItMeta = require('markdown-it-meta');
md.use(MarkdownItMeta);
var blogPostPath = path.join(__dirname, 'blog-posts', 'blog-one.md');
console.log(blogPostPath);
var blogPost = fs.readFileSync(blogPostPath);

console.log(blogPost);

var html = md.render(blogPost.toString());
console.log(html);

var template = `
<title>${md.meta.title}</title>

`;

fs.writeFileSync('index.html', template + html);

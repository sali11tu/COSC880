// include modules
var    express = require('express'),
    app = express(),
    path = require('path'),
    less = require('less-middleware');
    
// compile and serve css
app.use(less(path.join(__dirname,'source','less'),{
    dest: path.join(__dirname, 'public'),
    options: {
        compiler: {
            compress: false,
        },
    },
    preprocess: {
        path: function(pathname, req) {
            return pathname.replace('/css/','/'); 
        },
    },
    force: true,
}));
// serve static content
app.use(express.static(path.join(__dirname, 'public')));

// setup server
var server = app.listen(1337);

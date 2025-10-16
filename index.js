var http = require("http");
const port = 8000

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
    <style>
     body {
      background-color:pink
    }
    </style>
</head>
<body>
    <p>Hi</p>
    <p>My name is Nicole</p>
    <p> I'm 20 </p>
    <p> :) <3 <p>
    <p> :) <3 <p>
    <p> My fave colour is pink <p>
</body>
</html>`);
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 
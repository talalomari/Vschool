var http = require("http");
var fs = require("fs");
var filePath = "./index.html";

var server = http.createServer(function (request, response) {
    console.log("i have hit the server");
    fs.readFile(filePath, "binary", function (err, file) {
        if (err) {
            console.log(err);
            response.writeHeader(500, {
                "Content-Type": "Text/html"
            });
            response.write(err);
            response.end();

        } else {
            response.writeHeader(200, {
                "Content-Type": "Text/html"
            });
            response.write(file, "binary");
            response.end
        }
    });
    response.writeHeader(200, {
        "Content-Type": "text/plain"
    });
    response.write("hello server");
    response.end();
});
server.listen(8080);
console.log("Iam running the server");
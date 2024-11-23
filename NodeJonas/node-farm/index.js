const fs = require("fs");
const http = require("http");
const url = require("url");

const slugify = require('slugify');

/////////////////////////////////////////////////////////////
// Files

// Blocking, synchronous way
// const textIn = fs.readFileSync("../starter/txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("../starter/txt/output.txt", textOut);
// console.log("File written!");

// Non-blocking, asynchronous way
// fs.readFile("../starter/txt/start.txt", "utf-8", (err, data1) => {
//     if (err) return console.log("Error!");

//     fs.readFile(`../starter/txt/${data1}.txt`, "utf-8", (err, data2) => {
//         console.log(data2);
//         fs.readFile("../starter/txt/append.txt", "utf-8", (err, data3) => {
//             console.log(data3);

//             fs.writeFile("../starter/txt/final.txt", `${data2}\n${data3}`, "utf-8", err => {
//                 console.log("Your file has been written!");
//             });
//         });
//     });
// });
// console.log("Will read file!"); 


///////////////////////////////////////////////////////
// SERVER
const tempOverview = fs.readFileSync(`${__dirname}/../starter/templates/template-overview.html`,"utf-8");
const tempCard = fs.readFileSync(`${__dirname}/../starter/templates/template-card.html`,"utf-8");
const tempProduct = fs.readFileSync(`${__dirname}/../starter/templates/template-product.html`,"utf-8");

const data = fs.readFileSync(`${__dirname}/../starter/dev-data/data.json`,"utf-8");
const dataObj = JSON.parse(data)

const slugsArray = dataObj.map(el => slugify(el.productName, { lower: true }));
module.exports = slugsArray;
const replaceTemplate = require("../modules/replaceTemplate");
const path = require("path");

const server = http.createServer((req, res) => {
    let { query, pathname } = url.parse(req.url, true);

    // Overview page
    if (pathname === "/" || pathname === "/overview") {
        console.log(query)
        res.writeHead(200, {'Content-type': 'text/html'});
        
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        
        res.end(output);
        
    }else {
        pathname = pathname.split('/');
        // Product page
        if (pathname[1] === "product") {
            res.writeHead(200, { 'Content-type': 'text/html'});
            const product = dataObj.find(item => item.productName.toLowerCase().replace(/ /g, '-') === pathname[2]);
                
            const output = replaceTemplate(tempProduct, product);

            res.end(output);
        // API
        } else if (pathname[1] === "api") {

            res.writeHead(200, {"Content-type":"application/json"});
            res.end(data);

        // Not found
        } else {
            res.writeHead(404, {
                "Content-type": "text/html",
                "my-own-header": "hello-world"
            });
            res.end("<h1>Page not found!</h1>");
        }
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to requests on port 8000");
});


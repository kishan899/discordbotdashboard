const { log } = require("console");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, '../templates/views');
const partialspath = path.join(__dirname, '../templates/partials');

app.set("view engine", "hbs");
app.set('views', templatepath);
hbs.registerPartials(partialspath);
app.use(express.static(staticpath));

app.get("/", (req, res) => {
res.render("index")
});
app.get("/commands", (req, res) => {
    res.render("commands")
});
app.get("/contacts", (req, res) => {
    res.render("contacts")
});
app.listen("3000", () => {
    console.log(`Listening port 3000.`);
})

const axios = require("axios");
const cheerio = require("cheerio");
/* async function get(url) {
    let response = await axios.get(url);
    let $ = cheerio.load(response.data);
    let result = [];
    $('title').each(function (i, e) {
        result.push($(e).text());
    });
    return result;
}
module.exports = {
    get
}; */
module.exports = class Crawler {
    constructor() { }
    static async get(url) {
        let response = await axios.get(url);
        let $ = cheerio.load(response.data);
        let result = [];
        $('title').each(function (i, e) {
            result.push($(e).text());
        });
        return result;
    }
}
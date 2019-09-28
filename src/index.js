const request = require('request');
const cheerio = require('cheerio');

const mainurl = "https://www.ratemyprofessors.com/search.jsp?query=";

chrome.browserAction.onClicked.addListener(function() {
    chrome.tab.executeScript({
        code: "window.getSelection().toString(); "
    }, function(selection) {
        chrome.tabs.create({
            url: mainurl + selection[0] 
        });
    });
});

function getRating(name){
    var mainlink = url.concat(name);
    request(mainlink, (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
    
            $('#searchResultsBox > div.listings-wrap > ul > li').each((i, el) => {
                const item = $(el).text().replace(/\s\s+/g, '');
                const link = $(el).find('a').attr('href');
    
                if (item.includes("University of Toronto")){
                    var link1 = "https://www.ratemyprofessors.com";
                    var link2 = link1.concat(link);
                    getScore(link2);
                }
            });
        }
    });
}

function getScore(link) {
    request(link, (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            const gradefield = $('.breakdown-wrapper').text().replace(/([^0-9\.])/g, '');
            var grade = gradefield.substring(0, 3);
            var difficulty = gradefield.substring(3, 6);
            console.log(grade);
            console.log(difficulty);
        }
    });
}

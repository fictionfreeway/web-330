/*  Title: watlington-whatabook2.js
    Author: William Watlington
    Date: 7/16/2022
    Description: script for whataboook2 app */

import { HttpClient} from "./http-client";

http = new HttpClient;
const isbns = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
];

const params = {
    "bibkeys": `ISBN:${isbns.join(",")}`,
    "format": "json",
    "jscmd": "details"
}

http.get("https://openlibrary.org/api/books", params).then(res => {
    console.log(res);

    document.getElementById("bookList").innerHTML = buildHtmlString(res, "table");

    addIsbnClickEvents();
})
.catch(e => {
    console.log(e);
})


function getBook(e) {
    e.preventDefault();

    let self = this;
    let isbn = self.innerText;
    http.get("https://openlibrary.org/api/books", params).then(res => {
        
    })
}

function addIsbnClickEvents() {
    let viewButtons = document.querySelectorAll("#bookTable tbody .isbn-link");
    for(let i=0; i<viewButtons.length; i++) {
        viewButtons[i].addEventListener("click", anchorClicked);
    }
}
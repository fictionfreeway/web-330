/*  Title: watlington-whatabook2.js
    Author: William Watlington
    Date: 7/16/2022
    Description: script for whataboook2 app */

import { HttpClient} from "./http-client.js";

let http = new HttpClient;

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
        document.getElementById("selectedBook").innerHTML = buildHtmlString(res, "ul");
    })
    .catch(e => {
        console.log(e);
    })
}

function buildHtmlString(res, format) {
    let tableString = "<table class='table' id='bookTable'><tr><th>ISBN</th><th>Title</th><th>Description</th><th>Pages</th><th>Authors</th></tr>";
    let ulString = "";
    
    for(let key in res) {
        ulString += "<ul style='list-style-type: none;'>";

        if(res.hasOwnProperty(key)) {
            let authors = [];
            if(res[key].details.authors) {
                authors = res[key].details.authors.map(function(author){
                    return author.name;
                })
            }

            let book = {
                isbn: res[key].details.isbn_13 | res[key].details.isbn_13 | res[key].details.isbn_10,
                title: res[key].details.title,
                description: res[key].details.subtitle | res[key].details.subtitle | "N/A",
                pages: res[key].details.number_of_pages | res[key].details.number_of_pages | "N/A",
                authors: authors.join(',')
            }

            ulString += `<li><b>ISBN:</b> ${book.isbn}</li><li><b>Title:</b> ${book.title}</li><li><b>Description:</b> ${book.description}</li><li>
            <b>Pages:</b> ${book.pages}</li><li><b>Authors:</b> ${book.authors}`;
            
            tableString += `<tr><td data-value="ISBN"><a href="#" class="isbn-link">${book.isbn}</a></td><td data-value="Title">${book.title}</td>
            <td data-value="Description">${book.description}</td><td data-value="Pages">${book.pages}</td><td data-value="Authors">${book.authors}</td></tr>`;
        }
    }
    tableString += "</table>"
    if(format == "table") {
        return tableString;
    } else {
        return ulString;
    }
}

function addIsbnClickEvents() {
    let viewButtons = document.querySelectorAll("#bookTable tbody .isbn-link");
    for(let i=0; i<viewButtons.length; i++) {
        viewButtons[i].addEventListener("click", anchorClicked);
    }
}
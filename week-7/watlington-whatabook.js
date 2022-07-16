/*  Title: watlington-whatabook1.js
    Author: William Watlington
    Date: 7/15/2022
    Description: script for whataboook app */


let filename = "books.xml";

fetch(filename)
.then(res => res.text())
.then(data => {
    let domParser = new DOMParser;
    let xmlBooks = domParser.parseFromString(data, "text/xml");
    loadBooks(xmlBooks);
    addIsbnClickEvents();
});

function loadBooks(xml) {
    let books = xml.getElementsByTagName("book");
    let tableData = "<table class='table' id='bookTable'><tr><th>ISBN</th><th>Title</th><th>Description</th><th>Pages</th><th>Authors</th></tr><tbody>";
    for (let book of books) {
        let isbn = book.getElementsByTagName("isbn")[0].childNodes[0].nodeValue;
        let title = book.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        let description = book.getElementsByTagName("description")[0].childNodes[0].nodeValue;
        let pages = book.getElementsByTagName("pages")[0].childNodes[0].nodeValue;
        let authors = book.getElementsByTagName("authors")[0].childNodes[0].nodeValue;
        tableData += `<tr><td data-value="ISBN"><a href="#" class="isbn-link">${isbn}</a></td><td data-value="Title">${title}</td>
        <td data-value="Description">${description}</td><td data-value="Pages">${pages}</td><td data-value="Authors">${authors}</td></tr>`
    }
    tableData += '</tbody></table>';
    document.getElementById("bookList").innerHTML = tableData;
}

function anchorClicked(e) {
    e.preventDefault();

    let self = this;
    let cell = self.parentElement;
    let row = cell.parentElement;

    let data = row.querySelectorAll("td");

    let bookData = `<ul style="list-style-type: none">`;

    for (let field of data) {
        bookData += `<li><b>${field.dataset.value}`;
    }

    bookData += '</ul>'
    document.getElementById("selectedBook").innerHTML = bookData;
}

function addIsbnClickEvents() {
    let viewButtons = document.querySelectorAll("#bookTable tbody .isbn-link");
    for(let i=1; i<viewButtons.length; i++) {
        viewButtons[index].addEventListener("click", anchorClicked);
    }
}
const book_url = 'https://share.dataturd.com/books/the-dune-country-1916-58330-0.txt';

fetch(book_url).then(function (response) {
    return response.text();
}).then(function (html) {
    document.querySelector('.content').innerHTML = html;
}).catch(function (err) {
    console.warn('Something went wrong.', err);
});

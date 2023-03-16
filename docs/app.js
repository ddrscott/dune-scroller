const book_url = 'https://raw.githubusercontent.com/ganesh-k13/shell/master/test_search/www.glozman.com/TextPages/Frank%20Herbert%20-%20Dune.txt';

fetch(book_url).then(function (response) {
    return response.text();
}).then(function (html) {
    document.querySelector('.content').innerHTML = html.replace(/\n\n/g, '<br/>');
}).catch(function (err) {
    console.warn('Something went wrong.', err);
});

async function downloadMovies() {
    throw new Error()

    return $.getJSON('http://api.movies.com/top10');
}

try {
    var movies = await downloadMovies();
} catch {
    alert('there was an error');
}
const artApp = {}
artApp.key = 'x118vnSi'


artApp.displayPieces = (data) => {
    data.forEach(piece => {
        const title = $('<h2>').text(piece.title);
        const artist = $('<p>').addClass('artist').text(piece.principalOrFirstMaker);
        const image = $('<img>').attr('src', piece.webImage.url);
        const artPiece = $('<div>').addClass('piece').append(image, title, artist);
        $('#artwork').append(artPiece)
    })
}

artApp.getPieces = (query) => {
    $.ajax({
        url: 'https://www.rijksmuseum.nl/api/en/collection',
        method: 'GET',
        dataType: 'json',
        data: {
            key: artApp.key,
            q: query
        }
    }).then(result => artApp.displayPieces(result.artObjects))

}

artApp.init = () => {
    $("#animal").on("change", function() {
        $("#artwork").empty()
        console.log("new animal selected")
        const animal = $(this).val()
        artApp.getPieces(animal);
    })
}

$(() => {
    artApp.init()
})

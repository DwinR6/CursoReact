export const getGifs = async ( category ) => {

    const url = 'https://api.giphy.com/v1/gifs/search?limit=10&api_key=XfLL1z17YcRPXfPDYj0hdSv86TQpVr9P&q=' + encodeURI( category);
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    console.log(gifs);
    return gifs;

}
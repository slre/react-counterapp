
// const getImage = async() =>{
//     const giphy_api_key = 'YUZ61mZNtKfKZrcoYbdnxRn3PU15W7mN';
//     const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${giphy_api_key}`);
//     const { data } = await resp.json();
//     return data;
// }


export const getImage = async() => {

    try {
        const giphy_api_key = 'YUZ61mZNtKfKZrcoYbdnxRn3PU15W7mN';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${giphy_api_key}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        return url;
        
    } catch (error) {
        //error handler
        console.error(error);
        return 'Not found';
    }
}



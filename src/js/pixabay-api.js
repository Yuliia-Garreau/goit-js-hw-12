import axios from 'axios';

export const fetchImages = async (search, page=1) => {
    const url = `https://pixabay.com/api/`;
const results = await axios.get(url, {
    params: {
        key: "47281419-922d6d2c66ee391f8ff42b6d3", 
        q: search,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: 15,
    }
});
    return results;
}
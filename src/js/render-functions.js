
export const renderImages = (images) => {
    return images
  .map(
    image => `
      <li class="item-gallery">
      <a class="link-gallery" href="${image.largeImageURL}">
        <img  
        src="${image.webformatURL}"
        class="img-gallery"
           
          alt="${image.tags}"
          title=""
        />
      
        <ul class="list-info">
          
        <li class="list-item-info">
            <p class="info-title">Likes</p>
            <p class="info-value">${image.likes}</p>
        </li>

          <li class="list-item-info">
            <p class="info-title">Views</p>
            <p class="info-value">${image.views}</p>
          </li>

          <li class="list-item-info">
            <p class="info-title">Comments</p>
            <p class="info-value">${image.comments}</p>
          </li>

          <li class="list-item-info">
            <p class="info-title">Downloads</p>
            <p class="info-value">${image.downloads}</p>
          </li>

        </ul>
        </a>
      </li>
    
  `)
.join("");
}

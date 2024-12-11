
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import error from "./img/error.png"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

iziToast.settings({
  timeout: 1000,
  position: 'topRight',
});

const galleryLargeImage = new SimpleLightbox('.item-gallery a', {
    captionsData: 'alt',
    captionDelay: 300,
    className: 'bg-color',
  });

const form = document.querySelector('.form-search');
const gallery = document.querySelector('.gallery-list');
const loader = document.querySelector(".loader");
const loadMore = document.querySelector(".load-more");
loader.style.display = 'none';
loadMore.style.display = 'none';

let page = 1;
let perPage = 100;


form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let inputValue = event.target.elements.input.value.trim();
    
    if (inputValue === '') {
      loader.style.display = 'none';
      loadMore.style.display = 'none';
      gallery.innerHTML = '';
      iziToast.warning({
        title: 'Caution',
        iconUrl: error,
        message: 'The field is empty, please type your request',
    });    
    return ;
    }
    if (inputValue) {
    loader.style.display = 'block';
    }
    
    fetchImages(inputValue)
    .then((results) => {
        if(results.data.totalHits === 0){
        loadMore.style.display = 'none';
        loader.style.display = 'none';
        iziToast.error ({
        iconUrl: error,
        titleColor: '#fff',
        messageColor: '#fff',
        imageWidth: 24,
        iconColor: '#fff',
        message: 'Sorry, there are no images matching your search query. Please try again!',
    })
    } else {
    gallery.innerHTML = renderImages(results.data.hits);
    loader.style.display = 'none';
    galleryLargeImage.refresh();
    loadMore.style.display = 'block';
    const totalPages = results.data.totalHits / perPage;

    if(results.config.params.page >= totalPages) {
        loadMore.style.display = 'none';
            iziToast.info({
                position: "topRight",  
                iconUrl: error,      
                message: "We're sorry, there are no more images to load"
                });
    }

    loadMore.addEventListener("click", handleLoadMore)
        async function handleLoadMore() {
        results.config.params.page += 1;    
        loader.style.display = 'block';
        try {
        const {data} = await fetchImages(inputValue, results.config.params.page);
        gallery.insertAdjacentHTML("beforeend", renderImages(data.hits));   
        loader.style.display = 'none'; 

        const photo = document.querySelector(".item-gallery");
            const itemHeight = photo.getBoundingClientRect().height;
            window.scrollBy({
                left: 0,
                top: itemHeight * 2,
                behavior: "smooth"
            });

        if(results.config.params.page >= totalPages) {
            loadMore.style.display = 'none';
                iziToast.info({
                    position: "topRight",  
                    iconUrl: error,      
                    message: "We're sorry, there are no more images to load"
                    });
        }
        }
        catch(error) {
            console.log(error.message)
        };
        }
    }
    })
    .catch((error) => {
        loadMore.style.display = 'none';
    console.log(error.message);            
    }
    )
    .finally(() => {
    event.target.elements.input.value = "";
    })
    }  


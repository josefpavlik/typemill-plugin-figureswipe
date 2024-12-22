import PhotoSwipeLightbox from './lib/PhotoSwipe/dist/photoswipe-lightbox.esm.js';
import PhotoSwipeDynamicCaption from './lib/photoswipe-dynamic-caption-plugin/dist/photoswipe-dynamic-caption-plugin.esm.min.js';


document.addEventListener('DOMContentLoaded', () => {
    let images=[];
    const galleryEl = document.querySelector('article');
    const el=galleryEl.querySelectorAll('figure');
    for (let i = 0; i < el.length; i++) {
        el[i].setAttribute('data-id', i);
        let img=el[i].querySelector('img');
        images.push({
            id: i,
            src: img.src,
            width: img.getAttribute('width'),
            height: img.getAttribute('height'),
            alt: img.getAttribute('alt'),
        });
        el[i].addEventListener('click', () => {
            pswpLightbox.loadAndOpen(i);
        });
        el[i].style.cursor = 'zoom-in';
    }

    const lightbox = new PhotoSwipeLightbox({
        dataSource: images,
        pswpModule: () => import('./lib/PhotoSwipe/dist/photoswipe.esm.js'),
    });
    lightbox.addFilter('thumbEl', (thumbEl, data, index) => {
        const el = galleryEl.querySelector('[data-id="' + data.id + '"] img');
        if (el) {
            return el;
        }
        return thumbEl;
    });
    lightbox.addFilter('placeholderSrc', (placeholderSrc, slide) => {
        const el = galleryEl.querySelector('[data-id="' + slide.data.id + '"] img');
        if (el) {
            return el.src;
        }
        return placeholderSrc;
    });

    const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
        // Plugins options, for example:
        type: 'auto',
        captionContent: (slide) => {
            return slide.data.alt;
        }
    });
    lightbox.init();

    // expose to use within onclick attribute
    window.pswpLightbox = lightbox;
});
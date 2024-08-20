import langs from '../langs.json' with { type: 'json' };
import localImgPaths from '../localImages.json' with { type: 'json' };





// BURGER

const checkbox = document.querySelector('.navigation__checkbox');
const menuItemsBlock = document.querySelector('.navigation__list');

menuItemsBlock.addEventListener('click', (event) => {
  if (event.target.classList.contains('navigation__link')) {
    checkbox.checked = !checkbox.checked;
  }
});

// SELECT

const alllangs = ['ru', 'en'];

const select = document.querySelector('#lang-select-id');

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  console.log(lang);
  location.href = `${window.location.pathname}#${lang}`;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash.substring(1);

  if (!alllangs.includes(hash)) {
    location.href = `${window.location.pathname}#ru`;
    location.reload();
  }

  select.value = hash;

  const currentLanguageContent = langs[hash]




  // text changing
  for (let key in currentLanguageContent) {
    const element = document.querySelector(`.lang-${key}`)
    element.innerHTML = currentLanguageContent[key]
  }

  // image changing
  const heroImages = document.querySelectorAll(".cases__card-img")

  Object.entries(localImgPaths[hash]).forEach(([_, value], index) => {
    heroImages[index].src = value
  });
}

changeLanguage();


// SWIPER

// new Swiper(".swiper", {
//   navigation: {
//     prevEl: ".swiper-button-prev",
//     nextEl: ".swiper-button-next",
//   },


//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     990: {
//       slidesPerView: 2,
//     }
//   }
// })

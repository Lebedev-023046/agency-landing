// BURGER
const checkbox = document.querySelector('.navigation__checkbox')
const menuItemsBlock = document.querySelector('.navigation__list')

if (checkbox && menuItemsBlock) {
	menuItemsBlock.addEventListener('click', event => {
		if (event.target.classList.contains('navigation__link')) {
			checkbox.checked = !checkbox.checked
		}
	})
}

// SELECT
const allLangs = ['ru', 'en']
const select = document.getElementById('lang-select-id')

select.addEventListener('change', changeURLLanguage)

function changeURLLanguage() {
	let lang = select.value
	location.href = `${window.location.pathname}#${lang}`
	location.reload()
}

function changeLanguage() {
	let hash = window.location.hash.substring(1)

	if (!allLangs.includes(hash)) {
		location.href = `${window.location.pathname}#ru`
		location.reload()
	}
	select.value = hash

	// get access to json files
	fetch(`../json/langs.json`)
		.then(response => {
			if (!response.ok) {
				throw new Error('Failed to load JSON')
			}
			return response.json()
		})
		.then(async langs => {
			// text changing
			const currentLanguageHash = langs[hash]
			for (let key in currentLanguageHash) {
				const element = document.querySelector(`.lang-${key}`)
				if (element) {
					element.innerHTML = currentLanguageHash[key]
				}
			}
			// image changing
			fetch(`../json/localImages.json`)
				.then(response => {
					if (!response.ok) {
						throw new Error('Failed to load JSON')
					}
					return response.json()
				})
				.then(imgPaths => {
					const jpgs = document.querySelectorAll('.cases__card-jpg')
					const avifs = document.querySelectorAll('.cases__card-avif')
					const webps = document.querySelectorAll('.cases__card-webp')

					Object.entries(imgPaths[hash]).forEach(
						([_, imgPathValue], imageIndex) => {
							Object.entries(imgPathValue).forEach(([_, value]) => {
								if (avifs[imageIndex] && value.endsWith('.avif')) {
									avifs[imageIndex].srcset = value
								}
								if (webps[imageIndex] && value.endsWith('.webp')) {
									webps[imageIndex].srcset = value
								}
								if (jpgs[imageIndex] && value.endsWith('.jpg')) {
									jpgs[imageIndex].src = value
								}
							})
						}
					)
				})
		})
}

changeLanguage()

// SWIPER
new Swiper('.swiper-projects', {
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next'
	},
	spaceBetween: 15,
	breakpoints: {
		320: {
			slidesPerView: 1
		},
		990: {
			slidesPerView: 2
		}
	}
})

new Swiper('.swiper-feedback', {
	navigation: {
		prevEl: '.go-left',
		nextEl: '.go-right'
	},

	spaceBetween: 15,
	slidesPerView: 1,
	initialSlide: 1,
	loop: true
})

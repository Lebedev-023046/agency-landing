// BURGER
const checkbox = document.querySelector('.navigation__checkbox');
const menuItemsBlock = document.querySelector('.navigation__list');
const languageData = {
	ru: {
		'nav-home': 'меню',
		'nav-services': 'услуги',
		'nav-portfolio': 'портфолио',
		'nav-pricing': 'цена',
		'nav-about': 'о нас',
		'contact-us': 'Связаться с нами',
		'hero-unskewed-text': 'Маркетинговое',
		'heading-primary': 'Агентство',
		'heading-secondary-hero': 'Цифровое агентство, основанное в чехии',
		'heading-tertiary-hero':
			'IK.Agency - это динамичное и инновационное маркетинговое агентство, которое помогает клиентам достигать поставленных целей в рекламе.',
		'potential-heading': 'Раскрой свой маркетинговый потенциал с нами ',
		'potential-paragraph':
			'У нас небольшая команда, и это позволяет нам быть гибкими, быстро адаптирующимися к работе  с нашими клиентами для достижения наивысших результатов',
		'service-decoration': 'что входит в наши услуги',
		'services-heading-secondary': 'Наши',
		'services-unskewed-text': 'Услуги',
		'services-paragraph':
			'Ik.Agency  предлагает широкий спектр маркетинговых услуг, разработанных с учетом уникальных потребностей каждого клиента',
		'magic-question':
			'Когда-нибудь задумывались, как происходит маркетинговое волшебство?',
		'magic-answer': 'Как это работает',
		'benefits-question':
			'Ищете маркетологов, которые могли бы помочь вашему бизнесу получать прибыль?',
		'benefits-answer': 'Наши сотрудники',
		'process-vertical-text': 'как это работает',
		'process-heading': 'Процесс запуска наших рекламных ',
		'process-unskewed-text': 'кампаний',
		'process-paragraph':
			'Ik.Agency придерживается совместного и итеративного подхода к маркетингу, уделяя особое внимание пониманию и удовлетворению индивидуальных потребностей каждого клиента.',
		'discovery-title': 'Знакомство',
		'discovery-info':
			'Мы начинаем с того, что знакомимся с нашими клиентами, их бизнес-целями и целевой аудиторией.',
		'strategy-title': 'Стратегия',
		'strategy-info':
			'Мы разрабатываем стратегию, которая определяет маркетинговый подход, опыт клиентов и ключевые особенности проекта.',
		'testing-title': 'Тестирование',
		'testing-info':
			'Мы всегда тестируем рекламные креативы и целевые страницы перед запуском, чтобы наша реклама была максимально эффективной.',
		'advertisement-title': 'Реклама',
		'advertisement-info':
			'После тестирования мы устанавливаем настройки, необходимые для максимизации прибыли от наших рекламных кампаний при масштабировании',
		'portfolio-vertical-text': 'портфолио',
		'projects-heading-start': 'Результаты',
		'projects-unskewed-text': 'наших',
		'projects-heading-end': 'крупных проектов',
		'projects-btn': 'Больше результатов &rarr;',
		traffic: 'Серый трафик',
		volumes: 'Большие объемы',
		recouped: 'Окупаемость',
		'more-cases': 'Вы можете увидеть больше наших кейсов здесь',
		'projects-paragraph':
			'Мы начинаем со знакомства с нашими клиентами, их бизнес-целями и целевой аудиторией. Это включает в себя проведение исследований, анализ данных и обсуждение идей, чтобы получить более точное представление о потребностях наших клиентов.',
		'feedback-vertical-text': 'Отзыввы',
		'feedback-unskewed-text': 'Отзывы, которые',
		'feedback-heading': 'говорят о нас больше, чем результат',
		'paragraph-feedback':
			'Ознакомьтесь с нашими отзывами для понимания, почему нашим клиентам нравится работать с нами, и как мы можем помочь вам достичь ваших бизнес-целей с помощью креативного и эффективного маркетинга.',
		'volsky-feedback-paragraph':
			'С командой IK.С агентством было приятно работать. Они были коммуникабельны, отзывчивы и предоставили ценную информацию, которая помогла нам усовершенствовать наше маркетинговое видение. Мы настоятельно рекомендуем их всем, кто ищет первоклассные маркетинговые решения.',
		'timurov-feedback-paragraph':
			'Сотрудничество с агентством IK.Agency произвело исключительно положительное впечатление. Они действительно прислушались к нашим потребностям и создали эффективную рекламу, которая превзошла наши ожидания. Мы были невероятно довольны итоговым результатом!',
		'myakisheva-feedback-paragraph':
			'От начала и до конца сотрудничество с IK.В агентстве было безупречным. Они были профессиональными, креативными и выполнили все работы в срок и в рамках бюджета. Мы в восторге от конечного результата и с нетерпением ждем возможности работать с ними снова в будущем.',
		innovate: 'Innovate',
		create: 'Create',
		launch: 'Launch',
		spent: 'Потраченный рекламный бюджет',
		info: '19%&nbsp;за&nbsp;последний&nbsp;месяц',
		'values-paragraph':
			'Ik.Agency - это идеальное сочетание  творчества и стратегического мышления, обеспечивающее маркетинг, который находит отклик и приносит результаты.',
		'hire-us': 'Начать сотрудничество',
		consultation: 'Записаться на консультацию',
	},
	en: {
		'nav-home': 'home',
		'nav-services': 'services',
		'nav-portfolio': 'portfolio',
		'nav-pricing': 'pricing',
		'nav-about': 'about',
		'contact-us': 'Contact Us',
		'hero-unskewed-text': 'Marketing',
		'heading-primary': 'Agency',
		'heading-secondary-hero': 'Czech-Based Digital Agency',
		'heading-tertiary-hero':
			'IK.Agency is a dynamic and innovative marketing agency that helps clients achieve their advertising goals. With our expertise and experience, we guarantee exceptional results.',
		'potential-heading': 'Unlock Your Marketing Potential with us',
		'potential-paragraph':
			'Despite being a small team, we believe that it gives us only opportunities, allowing us to be flexible, adaptable and able to work closely with our clients to achieve truly awesome results',
		'service-decoration': 'what we do',
		'services-heading-secondary': 'Our',
		'services-unskewed-text': 'Services',
		'services-paragraph':
			'IK.Agency offers a range of marketing services elaborated to the unique needs of each client',
		'magic-question': 'Have you ever wondered how marketing magic happens?',
		'magic-answer': 'see how we work',
		'benefits-question':
			'Are you looking for marketing specialists who can help your business make a profit?',
		'benefits-answer': 'meet our experts',
		'process-vertical-text': 'see how it works',
		'process-heading': 'How Our Marketing Process',
		'process-unskewed-text': 'Works',
		'process-paragraph':
			'IK.Agency follows a collaborative and iterative approach to marketing, with a focus on understanding and meeting the unique needs of each client.',
		'discovery-title': 'Discovery',
		'discovery-info':
			'We start by getting to know our clients, their business goals and their target audience.',
		'strategy-title': 'Strategy',
		'strategy-info':
			'We develop a strategy that outlines the marketing approach, user experience, and key features of the project.',
		'testing-title': 'Testing',
		'testing-info':
			'We always test advertising creatives and landing pages before launching the main advertisement so that our advertising is as effective as possible.',
		'advertisement-title': 'Advertisement',
		'advertisement-info':
			'After testing, we already know exactly which settings we will to use to maximize the profit of our advertising campaigns when scaling',
		'portfolio-vertical-text': 'portfolio',
		'projects-heading-start': 'Our',
		'projects-unskewed-text': 'Best Work',
		'projects-heading-end': 'of Successful Projects',
		'projects-btn': 'See more &rarr;',
		traffic: 'Grey traffic',
		volumes: 'Large volumes',
		recouped: 'Quickly recouped',
		'more-cases': 'You can see most of our cases here',
		'projects-paragraph':
			'We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs.',
		'feedback-vertical-text': 'Testimonials',
		'feedback-unskewed-text': 'Testimonials',
		'feedback-heading': 'that Speak to Our Results',
		'volsky-feedback-paragraph':
			'The team at IK.Agency was a pleasure to work with. They were communicative, responsive, and provided valuable insights that helped us refine our marketing vision. We highly recommend them to anyone looking for top-notch marketing solutions.',
		'timurov-feedback-paragraph':
			"Working with IK.Agency  has been an incredible experience. They truly listened to our needs and created effective advertising that exceeded our expectations. We couldn't be happier with the final result!",
		'myakisheva-feedback-paragraph':
			"From start to finish, working with IK.Agency was a seamless experience. They were professional, creative, and delivered on time and within budget. We're thrilled with the final result and look forward to working with them again in the future.",
		innovate: 'Innovate',
		create: 'Create',
		launch: 'Launch',
		spent: 'Spent ad budget',
		info: '19%&nbsp;for&nbsp;the&nbsp;last&nbsp;month',
		'values-paragraph':
			'Where Creativity Meets Results: IK.Agency is the perfect blend of artistic creativity and strategic thinking, delivering marketing that resonates and performs.',
		'hire-us': 'Hire Us',
		consultation: 'Book Consultation',
	},
};
const localImageData = {
	en: {
		adult: {
			avif: './assets/img/dist/cases/en/adult.avif',
			webp: './assets/img/dist/cases/en/adult.webp',
			jpg: './assets/img/dist/cases/en/adult.jpg',
		},
		nutra: {
			avif: './assets/img/dist/cases/en/nutra.avif',
			webp: './assets/img/dist/cases/en/nutra.webp',
			jpg: './assets/img/dist/cases/en/nutra.jpg',
		},
		casino: {
			avif: './assets/img/dist/cases/en/casino.avif',
			webp: './assets/img/dist/cases/en/casino.webp',
			jpg: './assets/img/dist/cases/en/casino.jpg',
		},
		apps: {
			avif: './assets/img/dist/cases/en/apps.avif',
			webp: './assets/img/dist/cases/en/apps.webp',
			jpg: './assets/img/dist/cases/en/apps.jpg',
		},
	},
	ru: {
		adult: {
			avif: './assets/img/dist/cases/ru/adult.avif',
			webp: './assets/img/dist/cases/ru/adult.webp',
			jpg: './assets/img/dist/cases/ru/adult.jpg',
		},
		nutra: {
			avif: './assets/img/dist/cases/ru/nutra.avif',
			webp: './assets/img/dist/cases/ru/nutra.webp',
			jpg: './assets/img/dist/cases/ru/nutra.jpg',
		},
		casino: {
			avif: './assets/img/dist/cases/ru/casino.avif',
			webp: './assets/img/dist/cases/ru/casino.webp',
			jpg: './assets/img/dist/cases/ru/casino.jpg',
		},
		apps: {
			avif: './assets/img/dist/cases/ru/apps.avif',
			webp: './assets/img/dist/cases/ru/apps.webp',
			jpg: './assets/img/dist/cases/ru/apps.jpg',
		},
	},
};

if (checkbox && menuItemsBlock) {
	menuItemsBlock.addEventListener('click', (event) => {
		if (event.target.classList.contains('navigation__link')) {
			checkbox.checked = !checkbox.checked;
		}
	});
}

// SELECT
const allLangs = ['ru', 'en'];
const select = document.getElementById('lang-select-id');
const page = document.body;

if (select) {
	select.addEventListener('change', changeURLLanguage);
}

function changeURLLanguage() {
	let lang = select.value;
	window.location.hash = lang;
	changeLanguage();
}

function markPageAsReady() {
	page.classList.remove('page-is-loading');
}

function changeLanguage() {
	let hash = window.location.hash.substring(1);

	if (!allLangs.includes(hash)) {
		location.href = `${window.location.pathname}#ru`;
		hash = 'ru';
	}
	if (!select) {
		markPageAsReady();
		return;
	}
	select.value = hash;

	try {
		const currentLanguageHash = languageData[hash];
		for (let key in currentLanguageHash) {
			const element = document.querySelector(`.lang-${key}`);
			if (element) {
				element.innerHTML = currentLanguageHash[key];
			}
		}

		const jpgs = document.querySelectorAll('.cases__card-jpg');
		const avifs = document.querySelectorAll('.cases__card-avif');
		const webps = document.querySelectorAll('.cases__card-webp');

		Object.entries(localImageData[hash]).forEach(
			([_, imgPathValue], imageIndex) => {
				Object.entries(imgPathValue).forEach(([_, value]) => {
					if (avifs[imageIndex] && value.endsWith('.avif')) {
						avifs[imageIndex].srcset = value;
					}
					if (webps[imageIndex] && value.endsWith('.webp')) {
						webps[imageIndex].srcset = value;
					}
					if (jpgs[imageIndex] && value.endsWith('.jpg')) {
						jpgs[imageIndex].src = value;
					}
				});
			}
		);
	} catch (error) {
		console.error(error);
	} finally {
		markPageAsReady();
	}
}

changeLanguage();
window.addEventListener('hashchange', changeLanguage);

// SWIPER
function initSwipers() {
	if (typeof Swiper === 'undefined') {
		console.error('Swiper library is not loaded');
		return;
	}

	const projectsSlider = document.querySelector('.swiper-projects');
	if (projectsSlider) {
		new Swiper(projectsSlider, {
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			spaceBetween: 15,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				990: {
					slidesPerView: 2,
				},
			},
		});
	}

	const feedbackSlider = document.querySelector('.swiper-feedback');
	if (feedbackSlider) {
		new Swiper(feedbackSlider, {
			navigation: {
				prevEl: '.go-left',
				nextEl: '.go-right',
			},
			spaceBetween: 15,
			slidesPerView: 1,
			initialSlide: 1,
			loop: true,
		});
	}
}

initSwipers();

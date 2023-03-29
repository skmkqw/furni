
/*--------------------BURGER--------------------*/



const menu = document.querySelector('.menu-body')
const menuBtn = document.querySelector('.menu-icon')
const body = document.querySelector('body')

if (menu && menuBtn) {
	menuBtn.addEventListener('click', function () {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.querySelectorAll('.menu-link').forEach(link => {
		link.addEventListener('click', function () {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	});
}

/*--------------------/BURGER--------------------*/

/*--------------------HEADER-LINKS--------------------*/

const tabsTitle = document.querySelectorAll('.menu-link');


tabsTitle.forEach(item => item.addEventListener('click', event => {

	tabsTitle.forEach(element => element.classList.remove('active'));

	item.classList.add('active');


}));
document.querySelector('[data-link="1"]').classList.add('active');

/*--------------------/HEADER-LINKS--------------------*/


/*--------------------SWIPER--------------------*/

const swp = new Swiper('.swiper', {

	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

/*--------------------/SWIPER--------------------*/


/*--------------------HIDDEN--------------------*/

const hideLink = document.querySelector('.blog-link')
const blogCnt = document.querySelector('.blog-wrapper')

if (hideLink && blogCnt) {
	hideLink.addEventListener('click', function () {
		blogCnt.classList.toggle('active')
	})
}

/*--------------------/HIDDEN--------------------*/
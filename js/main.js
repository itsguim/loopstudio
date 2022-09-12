function initMenuToggle() {
	const btnOpen = document.querySelector('.btn-openmenu'),
		btnClose = document.querySelector('.btn-closemenu');
	;

	function menuToggle() {
		document.body.classList.toggle('menu-expanded')
	}

	btnOpen.addEventListener('click', menuToggle)
	btnClose.addEventListener('click', menuToggle)

}
initMenuToggle()


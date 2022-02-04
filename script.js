let burger = document.querySelector('.burger')
let toggler = document.querySelector('.toggler')
let togglerMobile = document.querySelector('.togglerMobile')
let hiddenNavbar = document.querySelector('.hiddenNavbar')


burger.addEventListener('click', function(){
	this.classList.toggle('change');
	hiddenNavbar.classList.toggle('change');
})


toggler.onclick = () =>{
	toggler.classList.toggle('active');

	if(toggler.classList.contains('active')){
		document.body.classList.add('active');
	}else{
		document.body.classList.remove('active');
	}
}

togglerMobile.onclick = () =>{
	togglerMobile.classList.toggle('active');

	if(togglerMobile.classList.contains('active')){
		document.body.classList.add('active');
	}else{
		document.body.classList.remove('active');
	}
}









// const burger = document.querySelector('.burger')
// const sidebar = document.querySelector('.sidebar')
// const bgSidebar = document.querySelector('.bg-sidebar')

// burger.addEventListener('click', function () {
//     this.classList.toggle('change')
//     sidebar.classList.toggle('change')
//     bgSidebar.classList.toggle('change')
// })

// bgSidebar.addEventListener('click', function () {
//     this.classList.remove('change')
//     sidebar.classList.remove('change')
//     burger.classList.remove('change')
// })
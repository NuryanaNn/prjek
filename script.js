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


window.addEventListener('scroll', reveal);

function reveal(){
	let reveals = document.querySelectorAll('.reveal');

	for(var i = 0; i < reveals.length; i++){
		let windowheight = window.innerHeight;
		let revealtop = reveals[i].getBoundingClientRect().top;
		let revealpoint = 150;

		if(revealtop < windowheight - revealpoint){
			reveals[i].classList.add('active');
		}else{
			reveals[i].classList.remove('active');
		}
	}
}


let list = document.querySelectorAll('.list');
let itmBx = document.querySelectorAll('.itmBx');

for( let i = 0; i<list.length; i++){
	list[i].addEventListener('click', function(){
		for (let j = 0; j<list.length; j++){
			list[j].classList.remove('active');
		}
		this.classList.add('active');

		let dataFilter = this.getAttribute('data-filter')

		for (let k = 0; k < itmBx.length; k++) {
                    itmBx[k].classList.remove('active');
                    itmBx[k].classList.add('hide');

                    if (itmBx[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
                        itmBx[k].classList.remove('hide');
                        itmBx[k].classList.add('active');
                    }
                }
	})
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
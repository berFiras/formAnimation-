function animatedForm() {
	const arrows = document.querySelectorAll('.fa-arrow-circle-right');

	arrows.forEach((arrow) => {
		arrow.addEventListener('click', () => {
			const input = arrow.previousElementSibling;
			const parent = arrow.parentElement;
			const nextForm = parent.nextElementSibling;
			//  check for validation stuff (you can do more validation)
			if (input.type === 'text' && validateUser(input)) {
				nextSlide(parent, nextForm);
			} else if (input.type === 'email' && validateEmail(input)) {
				nextSlide(parent, nextForm);
			} else if (input.type === 'password' && validateUser(input)) {
				nextSlide(parent, nextForm);
			} else {
				parent.style.animation = 'shake 0.5s ease';
			}
			// rid animation
			parent.addEventListener('animationend', () => {
				parent.style.animation = '';
			});
		});
	});
}

function validateUser(user) {
	if (user.value.length < 6) {
		colorBehavior('#DD4132');
	} else {
		colorBehavior('rgb(87,189,130)');
		return true;
	}
}
function validateEmail(email) {
	// email validation with regex (copy&past)
	const validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	if (validation.test(email.value)) {
		console.log('work');
		colorBehavior('rgb(87,189,130)');
		return true;
	} else {
		colorBehavior('#DD4132');
	}
}
function nextSlide(parent, nextForm) {
	// trasition out and then transition in the next input
	parent.classList.add('inactive');
	parent.classList.remove('active');
	nextForm.classList.add('active');
}

function colorBehavior(color) {
	document.body.style.backgroundColor = color;
}

animatedForm();

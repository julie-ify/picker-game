const button = document.getElementById('click-me');
const answer = document.querySelector('.answer');
answer.innerHTML = '';

button.addEventListener('click', () => {
	const randomNum = Math.floor(Math.random() * 20) + 1;
	answer.innerHTML = `Winner: ${randomNum}`;
});

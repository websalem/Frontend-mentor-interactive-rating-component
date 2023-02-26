const nums = document.querySelectorAll('.rating-nums > div');
const btn = document.querySelector('button');
const ratingState = document.querySelector('.rating-state');
const thankYou = document.querySelector('.thank-you-state');
const rating = document.querySelector('.rating');
nums.forEach(num => {
    num.addEventListener('click', () => {
        num.classList.add('clicked');
        let numValue = num ? num.innerHTML : 'nothing';
        rating.innerHTML = numValue;
    });
})
btn.addEventListener('click', () => {
    ratingState.classList.add('hidden');
    thankYou.classList.remove('hidden');
});
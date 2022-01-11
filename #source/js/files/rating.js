'use strict'

const ratings = document.querySelectorAll('.rating');
const ratingValues = document.querySelectorAll('.rate__value');

if (ratings.length > 0) {
	initRatings();
}

function initRatings() {
	let ratingActive, ratingValue;
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}

	function initRating(rating) {
		initRatingVars(rating);
		setRatingActiveWidth();

		setRating(rating);
	}

	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active-wrapper');
		for (let index = 0; index < ratingValues.length; index++) {
			if (rating.dataset.rating === ratingValues[index].dataset.rating) {
				ratingValue = ratingValues[index];
			}
		}
	}

	function setRatingActiveWidth(value = ratingValue.innerHTML) {
		const ratingActiveWidth = value / 0.1;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}

	function setRating(rating) {
		const ratingItems = rating.querySelectorAll('.rating__item');
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index];
			ratingItem.addEventListener("mouseenter", function(e) {
				initRatingVars(rating);
				setRatingActiveWidth(ratingItem.value);
			});
			ratingItem.addEventListener("mouseleave", function(e) {
				setRatingActiveWidth();
			});
			ratingItem.addEventListener("click", function(e) {
				initRatingVars(rating);
				setRatingValue(ratingItem.value, rating);
			});
		}
	}

	async function setRatingValue(value, rating) {
		if (!rating.classList.contains('rating_sending')) {
			rating.classList.add('rating_sending');

			let res = await fetch('rating.json', {
				method: 'GET',
			});

			if (res.ok) {
				const result = await res.json();
				const newRating = result[`newRating-${rating.dataset.rating}`];
				ratingValue.innerHTML = newRating;
				setRatingActiveWidth();
				rating.classList.remove('rating_sending');
			}
		} else {
			alert('ERROR');
			rating.classList.remove('rating_sending');
		}
	}
}
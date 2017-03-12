// loading the image

function loadImage (event) {
	
	let target = event.target || event.srcElement
	let files = target.files

	if (FileReader && files && files.length) {
		const fr = new FileReader()
		fr.onload = () => {
			document.querySelector('img').src = fr.result
		}

		fr.readAsDataURL(files[0])
	} 

}

document.querySelector('input').addEventListener('change', loadImage)

// filter amount

let filterAmountBars = document.querySelectorAll('.filter-amount-bar')

function setFilterAmount (event) {

	let filterAmountBar = event.currentTarget
	let percentage = ((event.pageX - filterAmountBar.getBoundingClientRect().left) / filterAmountBar.offsetWidth) * 100
	let filterAmount = filterAmountBar.querySelector('.filter-amount')
	let filterName = filterAmountBar.getAttribute('data-filter')

	let image = document.getElementById('subject-image')

	filterAmount.style.width = percentage + '%'

	if (image.style.filter.indexOf(filterName) >= 0) {
		let oldFilterValue = new RegExp(filterName + '\\(\\d+\\%\\)')
		let newFilterValue = filterName + '(' + Math.floor(percentage) + '%)'
		image.style.filter = image.style.filter.replace(oldFilterValue, newFilterValue)
	} else {
		image.style.filter += (' ' + filterName + '(' + Math.floor(percentage) + '%)')
	}

}

for (let bar of filterAmountBars) {
	bar.addEventListener('click', setFilterAmount)
}

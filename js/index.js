// Year:
document.querySelector('#current-year').innerText = new Date().getFullYear()
// Navigation:
var music = document.querySelector('#music')
var discography = document.querySelector('#discography')
var bio = document.querySelector('#bio')
var contact = document.querySelector('#contact')

var activeColor = '#efefef'
var inactiveColor = '#9e9e9e'

var musicContainer = document.querySelector('#music-container')
var discographyContainer = document.querySelector('#discography-container')
var bioContainer = document.querySelector('#bio-container')
var contactDetailsContainer = document.querySelector('#contact-details-container')

function hide (victims, victimContainers) {
	victims.forEach((victim) => {
		victim.style.color = inactiveColor
		victim.style.border = 'none'
	})
	victimContainers.forEach((container) => {
		container.style.display = 'none'
	})
}

function navigate (target, victims, targetContainer, victimContainers) {
	target.addEventListener('click', () => {
		hide(victims, victimContainers)
		target.style.color = activeColor
		target.style.borderBottom = '3px solid ' + activeColor
		targetContainer.style.display = 'block'
	})
}

navigate(music, [discography, bio, contact], musicContainer, [discographyContainer, bioContainer, contactDetailsContainer])
navigate(discography, [music, bio, contact], discographyContainer, [musicContainer, bioContainer, contactDetailsContainer])
navigate(bio, [discography, music, contact], bioContainer, [discographyContainer, musicContainer, contactDetailsContainer])
navigate(contact, [music, discography, bio], contactDetailsContainer, [musicContainer, discographyContainer, bioContainer])

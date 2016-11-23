var music = document.querySelector('#music')
var video = document.querySelector('#video')
var activeColor = '#fafafa'
var inactiveColor = '#9e9e9e'
var musicContainer = document.querySelector('#music-container')
var videoContainer = document.querySelector('#video-container')

function navigate (target, victim, targetContainer, victimContainer) {
	target.addEventListener('click', () => {
		target.style.color = activeColor
		victim.style.color = inactiveColor
		victimContainer.style.display = 'none'
		targetContainer.style.display = 'block'
	})
}

navigate(music, video, musicContainer, videoContainer)
navigate(video, music, videoContainer, musicContainer)
new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    loopFillGroupWithBlank: true,
	initialSlide: 7,
});







const player = document.getElementById("player")
const vol = document.getElementById("volume")
const volumator = document.getElementById('volumator')
let volumeValue

function changeVolume() {
  if (vol.value == 0) {
    volumator.classList.remove('active')
    volumator.classList.add('mute')
  } else {
    volumator.classList.remove('mute')
    volumator.classList.add('active')
  }
  player.volume = vol.value
}

function mute() {
  if (volumator.classList.contains('active')) {
    volumator.classList.remove('active')
    volumator.classList.add('mute')
    volumeValue = vol.value
    vol.value = 0
  } else {
    volumator.classList.remove('mute')
    volumator.classList.add('active')
    vol.value = volumeValue
  }
}
let tempArr = []
let trackName = [
	'Dawn',
	'Demon King',
	'Animal',
	'Altered Eyes',
	'Prophecy Of The Falcon',
	'Perfect World',
	'Mortal Vessel',
	'Foe Of The Inhuman',
	'Vengeance',
	'Ruin',
	'Corridor Of Dreams',
	'Lifeblood'
]
let currentAlbum = [
	'../music/Brand Of Sacrifice/01. Dawn.mp3',
	'../music/Brand Of Sacrifice/02. Demon King.mp3',
	'../music/Brand Of Sacrifice/03. Animal.mp3',
	'../music/Brand Of Sacrifice/04. Altered Eyes.mp3',
	'../music/Brand Of Sacrifice/05. Prophecy Of The Falcon.mp3',
	'../music/Brand Of Sacrifice/06. Perfect World.mp3',
	'../music/Brand Of Sacrifice/07. Mortal Vessel.mp3',
	'../music/Brand Of Sacrifice/08. Foe Of The Inhuman.mp3',
	'../music/Brand Of Sacrifice/09. Vengeance.mp3',
	'../music/Brand Of Sacrifice/10. Ruin.mp3',
	'../music/Brand Of Sacrifice/11. Corridor Of Dreams.mp3',
	'../music/Brand Of Sacrifice/12. Lifeblood.mp3'
]
let brandOfSacrifice = [
	'../music/Brand Of Sacrifice/01. Dawn.mp3',
	'../music/Brand Of Sacrifice/02. Demon King.mp3',
	'../music/Brand Of Sacrifice/03. Animal.mp3',
	'../music/Brand Of Sacrifice/04. Altered Eyes.mp3',
	'../music/Brand Of Sacrifice/05. Prophecy Of The Falcon.mp3',
	'../music/Brand Of Sacrifice/06. Perfect World.mp3',
	'../music/Brand Of Sacrifice/07. Mortal Vessel.mp3',
	'../music/Brand Of Sacrifice/08. Foe Of The Inhuman.mp3',
	'../music/Brand Of Sacrifice/09. Vengeance.mp3',
	'../music/Brand Of Sacrifice/10. Ruin.mp3',
	'../music/Brand Of Sacrifice/11. Corridor Of Dreams.mp3',
	'../music/Brand Of Sacrifice/12. Lifeblood.mp3'
]
 let treckNameBrandOfSacrifice = [
	'Dawn',
	'Demon King',
	'Animal',
	'Altered Eyes',
	'Prophecy Of The Falcon',
	'Perfect World',
	'Mortal Vessel',
	'Foe Of The Inhuman',
	'Vengeance',
	'Ruin',
	'Corridor Of Dreams',
	'Lifeblood'
]
let orbitCulture = [
	'../music/Orbit Culture - Nija/01. At The Front.mp3',
	'../music/Orbit Culture - Nija/02. North Star Of Nija.mp3',
	'../music/Orbit Culture - Nija/03. Day Of The Cloud.mp3',
	'../music/Orbit Culture - Nija/04. Behold.mp3',
	'../music/Orbit Culture - Nija/05. Open Eye.mp3',
	'../music/Orbit Culture - Nija/06. Mirrorslave.mp3',
	'../music/Orbit Culture - Nija/07. Nensha.mp3',
	'../music/Orbit Culture - Nija/08. Rebirth.mp3',
	'../music/Orbit Culture - Nija/09. The Shadowing.mp3',
	'../music/Orbit Culture - Nija/10. Set Us Free.mp3'
]
let treckNameOrbitCulture = [
	'At The Front',
	'North Star Of Nija',
	'Day Of The Cloud',
	'Behold',
	'Open Eye',
	'Mirrorslave',
	'Nensha',
	'Rebirth',
	'The Shadowing',
	'Set Us Free'
]
let trName = document.getElementById('track_name')
let track = 0

function next() {
  track++
  if (track == currentAlbum.length) {
    track = 0
    player.src = currentAlbum[track]
    changeStatusPlayPause('pause')
  } else {
  	player.src = currentAlbum[track]
  	changeStatusPlayPause('play')
  }
}
function previous() {
  track--
  if (track < 0) {
    track = currentAlbum.length - 1
  }
  player.src = currentAlbum[track]
  changeStatusPlayPause('play')
}

function changeStatusPlayPause(activeStatus) {
  let play = document.getElementById('play')
  let pause = document.getElementById('pause')

  if (play.classList.contains("visible") || activeStatus == 'play') {
    play.classList.remove('visible')
    play.classList.add('hidden')
    pause.classList.remove('hidden')
    pause.classList.add('visible')
    trName.textContent = trackName[track]
    player.play()
  } else {
    pause.classList.remove('visible')
    pause.classList.add('hidden')
    play.classList.remove('hidden')
    play.classList.add('visible')
    trName.textContent = trackName[track]
    player.pause()
  }
}

const durationContainer = document.getElementById('duration')

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60)
  const seconds = Math.floor(secs % 60)
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
  return `${minutes}:${returnedSeconds}`
}

const displayDuration = () => {
  durationContainer.textContent = calculateTime(player.duration);
}

const seekSlider = document.getElementById('seek_slider');
const setSliderMax = () => {
  seekSlider.max = Math.floor(player.duration);
}

if (player.readyState > 0) {
  displayDuration();
  setSliderMax();
} else {
  player.addEventListener('loadedmetadata', () => {
    displayDuration();
    setSliderMax();
  });
}

const currentTimeContainer = document.getElementById('current_time')

seekSlider.addEventListener('input', () => {
	currentTimeContainer.textContent = calculateTime(seekSlider.value)
})
seekSlider.addEventListener('change', () => {
	player.currentTime = seekSlider.value

})

let repeatFlag = false
player.addEventListener('timeupdate', () => {
	seekSlider.value = Math.floor(player.currentTime)
	currentTimeContainer.textContent = calculateTime(seekSlider.value)

	displayDuration()
	setSliderMax()

	if (player.currentTime == player.duration && repeatFlag == false) {
		next()
	} else if (player.currentTime == player.duration && repeatFlag == true) {
		player.currentTime = 0
		player.play()
	}
})

const like = document.getElementById('like')
function likeTreck() {
	like.classList.toggle('liked')
}

const shuffle = document.getElementById('shuffle')
function shufflePlaylist() {
	if (shuffle.classList.contains('active')) {
		copyArray(tempArr, currentAlbum)
	} else {
		copyArray(currentAlbum, tempArr)
		shuffleAlbum(currentAlbum)
	}
	shuffle.classList.toggle('active')
}

function shuffleAlbum(array) {
  let currentIndex = array.length,  randomIndex

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }
  return array
}

function copyArray(currentArray, tempArray) {
	let currentIndex = currentArray.length
	while (currentIndex != 0) {
		tempArray[currentIndex - 1] = currentArray[currentIndex - 1]
		currentIndex--
	}
	return tempArray
}

const repeat = document.getElementById('repeat')
function repeatPlaylist() {
	if (repeat.classList.contains('active')) {
		repeatFlag = false
	} else {
		repeatFlag = true
	}
	repeat.classList.toggle('active')
}



const miniCover = document.getElementById('mini_cover_album')
const card = document.querySelectorAll('.card')
const trackAuthor = document.getElementById('track_author')
function cardPlay(album) {
	currentAlbum = []
	trackName = []
	tempArr = []
	copyArray(album, currentAlbum)
	track = 0
	if (album == brandOfSacrifice) {
		copyArray(treckNameBrandOfSacrifice, trackName)
		mini_cover_album.src = '../music/Brand Of Sacrifice/Cover.jpg'
		trackAuthor.textContent = 'Brand of Sacrifice'
	} else {
		copyArray(treckNameOrbitCulture, trackName)
		mini_cover_album.src = '../music/Orbit Culture - Nija/Cover.jpg'
		trackAuthor.textContent ='Orbit Culture'
	}
	player.src = currentAlbum[track]
	changeStatusPlayPause('play')
}
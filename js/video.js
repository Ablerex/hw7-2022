let video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.getElementById("play").addEventListener("click", function() {
console.log("Play Video")
video.play()
document.getElementById("volume").innerHTML = video.volume * 100 + '%';
});

document.getElementById("pause").addEventListener("click", function(){
console.log("Pause Video")
video.pause()
});

document.getElementById("slower").addEventListener("click", function(){
console.log("Slow Video")
video.playbackRate *= .90
console.log("Speed is", video.playbackRate)
});

document.getElementById("faster").addEventListener("click", function(){
	console.log("Speed up video")
	video.playbackRate /= .90
	console.log("speed is", video.playbackRate)
});

document.getElementById("skip").addEventListener("click", function(){
	console.log("Skipping ahead")
	video.currentTime += 10
	console.log("current playtime is", video.currentTime)
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
		console.log("current playtime is", video.currentTime)
	}
});

document.getElementById("mute").addEventListener("click", function(){
	console.log("Video Muted")
	if (video.muted == true){
		console.log("Unmute")
		video.muted = false
		this.innterHTML = "Mute"
	}
	else {
		console.log("mute")
		video.muted = true
		this.innerHTML = "Unmute"
	}
});

document.getElementById("slider").addEventListener("click", function(){
	console.log("Volume is Changing")
	video.volume = this.value / 100
	console.log('Volume is', video.volume)
	document.getElementById('volume').innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener('click', function(){
	console.log("Using Old School");
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener('click', function(){
	console.log("Back to original");
	video.classList.remove('oldSchool');
})

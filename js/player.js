var currPlayer = 0

// 0 - YouTube
// 1 - Daily Motion

// Create Youtube Player
socket.on('createYoutube', function(data) {
    if (currPlayer != 0){
        var playerIn = document.getElementById("playerArea")
        console.log(playerIn.innerHTML)
        playerIn.innerHTML = "<iframe id=\"player\"allowfullscreen=\"0\"width=\"640\" height=\"360\"src=\"https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1\"frameborder=\"0\"style=\"border: solid 4px #37474F\"></iframe>"
        onYouTubeIframeAPIReady()
        currPlayer = 0
    }
});

// Create Daily Motion Player
socket.on('createDaily', function(data) {
    // player.destroy()
    if (currPlayer != 1) {
        var playerIn = document.getElementById("playerArea")
        console.log(playerIn.innerHTML)
        playerIn.innerHTML = "<iframe id=\"player1\" frameborder=\"0\" width=\"640\" height=\"360\"src=\"//www.dailymotion.com/embed/video/x26m1j4\"allowfullscreen allow=\"autoplay\"></iframe>"
        currPlayer = 1
    }
});

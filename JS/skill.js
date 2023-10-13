document.getElementById("trigger-b").onclick = function() {
    var p = document.getElementById("player-e");
    if (p.paused) p.play();
    else p.pause();
}
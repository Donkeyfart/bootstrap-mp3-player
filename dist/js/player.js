var player = function () {
    var playButton = document.getElementsByClassName('play')[0];
    var pauseButton = document.getElementsByClassName('pause')[0];
    var progressBar = document.getElementsByClassName('progress-bar')[0];
    var currentTimeWidget = document.getElementById('current-time');
    var durationWidget = document.getElementById('track-duration');
    var track = document.getElementById('liberation');

    var getProgressPercentage = function (audioElement) {
        // Divide the currentTime by the duration, return the percentage.
        return (audioElement.currentTime / audioElement.duration * 100).toFixed(2);
    };

    var getProgressTime = function (audioElement) {
        // Return the current time without decimal precision 
        return Math.round(audioElement.currentTime);
    };

    //Update our duration counter
    durationWidget.textContent = moment.utc(track.duration * 1000).format('mm:ss');

    // Wire up our 'click' event on the play button
    playButton.addEventListener('click', function () {
        // Play the <audio> element
        track.play();
    });

    //Wire up our 'click' event listener on the pause button
    pauseButton.addEventListener('click', function () {
        track.pause();
    });

    // Wire up the 'timeupdate' event listener on the audio element
    track.addEventListener('timeupdate', function () {
        // Get the track's percentage played
        var percentage = getProgressPercentage(track);
        var seconds = getProgressTime(track);

        // Update the progress bar's styles
        progressBar.setAttribute('style', 'width: ' + percentage + '%');
        progressBar.setAttribute('aria-valuenow', percentage);

        // Update the track's current time / duration widget
        currentTimeWidget.textContent = moment.utc(seconds * 1000).format('mm:ss');
    });
}();
//# sourceMappingURL=player.js.map

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const USEDTIME = "videoplayer-current-time";

player.on('timeupdate', throttle(data, 1000));

rePlay();

function data(event) {
    localStorage.setItem(USEDTIME, event.seconds)
}
function rePlay() {
const currentTime = localStorage.getItem(USEDTIME);
    if(currentTime) {
    player.setCurrentTime(currentTime)
    }
}



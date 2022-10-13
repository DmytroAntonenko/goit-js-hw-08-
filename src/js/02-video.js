import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const USEDTIME = "videoplayer-current-time";
player.on('timeupdate', throttle(data, 1000));


function data(event) {
    localStorage.setItem(USEDTIME, event.seconds)
}
const currentTime = localStorage.getItem(USEDTIME);
player.setCurrentTime(currentTime);

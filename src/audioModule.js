import buzz from './audios/buzz.mp3';
import clap from './audios/clap.mp3';
import cymbal from './audios/cymbal.mp3';
import flam from './audios/flam.mp3';
import kick from './audios/kick.mp3';
import opHat from './audios/opHat.mp3';
import shaker from './audios/shaker.mp3';
import snare from './audios/snare.mp3';
import tom from './audios/tom.mp3';

const audios = {
    'Q': [buzz, "Buzz"],
    'W': [clap, "Clap"],
    'E': [cymbal, "Cymbal"],
    'A': [flam, "Flam"],
    'S': [kick, "Kick"],
    'D': [opHat, "OpHat"],
    'Z': [shaker, "Shaker"],
    'X': [snare, "Snare"],
    'C': [tom, "Tom"]
};

export { audios };
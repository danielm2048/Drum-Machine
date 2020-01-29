import buzz from './audios/buzz.mp3';
import clap from './audios/clap.mp3';
import cymbal from './audios/cymbal.mp3';
import flam from './audios/flam.mp3';
import kick from './audios/kick.mp3';
import opHat from './audios/opHat.mp3';
import shaker from './audios/shaker.mp3';
import snare from './audios/snare.mp3';
import tom from './audios/tom.mp3';

const audiosDrum = {
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

const audiosSynth = {
    'Q': ["http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/808%20Drum%20Kick%20036-2478-Free-Loops.com.mp3", "Drum Kick"],
    'W': ["http://www.synthmania.com/Roland%20D-50/Audio/Waveform%20demos/PCM%2033%20-%20Steam.mp3", "Steam"],
    'E': ["http://www.downloadfreesound.com/wp-content/uploads/2014/07/Beep_5.mp3", "Beep"],
    'A': ["http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Moog%20Bass%20Hit%2019-2817-Free-Loops.com.mp3", "Moog"],
    'S': ["http://www.audiobulb.com/create/samples/perc_-_pop2.wav", "Percussion"],
    'D': ["http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Lil%20Jon%20Hi%20Hat-8247-Free-Loops.com.mp3", "Hi Hat"],
    'Z': ["http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/DnB%20Fat%20Acid%20Bass-14970-Free-Loops.com.mp3", "Bass"],
    'X': ["http://tones.fuzzup.net/mp3/44.mp3", "Bells"],
    'C': ["http://patrickjohnston.org/ASM/ROM%20data/Super%20Metroid/BF%20stuff/Aveon%20Theme/Bass.wav", "Super Bass"]
};

export { audiosDrum, audiosSynth };
//import module for autoplay video on open page
import AutoPlay from './pluggins/AutoPlay.js'

//constructor for MediaPlayer
function MediaPlayer(config) {
    this.media = config.el;
    this.pluggins=config.pluggins || [];
    this._initPlugins();
  }
  //starts runing plugins
  MediaPlayer.prototype._initPlugins=function(){
      this.pluggins.forEach(pluggin => {
          pluggin.run(this);
      });
  }
  //set play and next pause function 
  MediaPlayer.prototype.play = function() {
    this.media.play();
  };
  
  MediaPlayer.prototype.pause = function() {
    this.media.pause();
  };
  
  MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  };
  //a mute function just put muted on !muted
  MediaPlayer.prototype.mute=function(){
      this.media.muted=!this.media.muted;
  }
 
  //set video as document element video
  const video = document.querySelector('video');
  //starting MediaPlayer object on video and a plugin autoplay()
  const player = new MediaPlayer({ el: video,pluggins:[new AutoPlay()] });
  //set button as document button with id=boton1
  const button = document.getElementById('boton1');
  //set on click play/pause
  button.onclick = () => player.togglePlay();
  //set button2 as document button with id boton2 
  const button2=document.getElementById('boton2')
  //set on click mute/unmute
  button2.onclick=()=>player.mute();
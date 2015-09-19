/**
 * @file Timer class
 * @author Cameron Kilgore <ghostfreeman at gmail dot com>
 */
//"use strict"

/**
 * Constructor for the Timer Class
 * @param {[type]} name         [description]
 * @param {[type]} timerLength  Maximimum countdown length of the timer in seconds (default 60 seconds)
 */
function Timer(name, timerLength, interfaceID) {
  console.log("Timer Instance Created");

  this.name = name;
  this.length = typeof timerLength !== 'undefined' ? timerLength : 60;
  this.elementId = typeof interfaceID !== 'undefined' ? interfaceID : "clock1";
  this.remaining = this.length;
}

Timer.prototype.startTimer = function() {
  setInterval(function () {
    if (this.checkRemainingTime()) {
      this.remaining--;
      console.log("Remaining: "+remaining);
    } else {
      console.log("Time has run out");
    }
  }, 1000);
}

Timer.prototype.pauseTimer = function() {

}

Timer.prototype.resumeTimer = function() {

}

Timer.prototype.resetTimer = function() {
  //Soft interfaces back to startTimer
  this.startTimer();
}

Timer.prototype.checkRemainingTime = function() {
  if (this.remaining != 0) {
    return true;
  } else {
    return false;
  }
}

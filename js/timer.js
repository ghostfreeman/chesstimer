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
  self = this; //TODO refactor as super() call

  this.intervalObj = setInterval(function () {
    if (self.checkRemainingTime()) {
      self.remaining--;
      console.log("Remaining: "+self.remaining);
      self.formatTime(self.remaining);
    } else {
      console.log("Time has run out");
      self.stopTimer();
    }
  }, 1000);
}

Timer.prototype.resumeTimer = function() {
  this.startTimer(); //Requirements don't call for a pausing mode so we recreate a new setInterval
}

Timer.prototype.stopTimer = function() {
  clearInterval(this.intervalObj);

  //this.formatTime(this.length);
}

Timer.prototype.formatTime = function(seconds) {
   console.debug("Seconds (start of method)", seconds);
  if (seconds > 60) {
    displayMinutes = parseInt(seconds / 60)
    displaySeconds = seconds % 60;
    console.debug("Minutes", displayMinutes);
  } else {
    displayMinutes = "";
    displaySeconds = seconds;
  }

  console.debug("Seconds", seconds);

  //Return time to the interface
  document.getElementById(this.elementId).innerHTML = displayMinutes+":"+displaySeconds;
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
  return false;
}

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
function Timer(name, timerLength, interfaceID, buttonID) {
  console.log("Timer Instance Created");

  this.name = name;
  this.length = typeof timerLength !== 'undefined' ? timerLength : 60;
  this.elementId = typeof interfaceID !== 'undefined' ? interfaceID : "clock1";
  this.buttonId = typeof buttonID !== 'undefined' ? buttonID : "clockbutton1";
  this.paused = false;
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
      window.alert("Time has run out, and "+this.name+" has won!");
      self.stopTimer();
    }
  }, 1000);
}

Timer.prototype.resumeTimer = function() {
  console.debug("Remaining time for Timer", this.remaining);
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

Timer.prototype.stopTimer = function() {
  clearInterval(this.intervalObj);
  this.remaining = this.length;
}

Timer.prototype.pauseTimer = function() {
  clearInterval(this.intervalObj);
  this.paused = true;
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
  this.stopTimer();
  this.formatTime(this.remaining);
  console.log("The timer has been reset");
}

Timer.prototype.checkRemainingTime = function() {
  if (this.remaining != 0) {
    return true;
  } else {
    return false;
  }
  return false;
}

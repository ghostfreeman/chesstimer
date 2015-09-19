/**
 * @file Timer class
 * @author Cameron Kilgore
 */

/**
 * Timer
 * @constructor
 * @param {string} name        User's name for the assigned Timer
 * @param {integer} timerLength Max length of timer in seconds (default 60)
 * @param {string} interfaceID HTML ID for the Timer column (displays MM:SS) (default "clock1")
 * @param {string} buttonID    HTML ID for the Timer Button ID (default "clockbutton1");
 */
function Timer(name, timerLength, interfaceID, buttonID) {
  console.log("Timer Instance Created");

  this.name = name;
  this.length = typeof timerLength !== 'undefined' ? timerLength : 60;
  this.elementId = typeof interfaceID !== 'undefined' ? interfaceID : "clock1";
  this.buttonId = typeof buttonID !== 'undefined' ? buttonID : "clockbutton1";
  this.remaining = this.length;
}

/**
 * Starts the timer, and will run until it hits a Zero Condition. On which it
 * will display a window.alert() for the winner.
 */
Timer.prototype.startTimer = function() {
  self = this;

  this.intervalObj = setInterval(function () {
    if (self.checkRemainingTime()) {
      self.remaining--;
      console.log("Remaining: "+self.remaining);
      self.formatTime(self.remaining);
    } else {
      console.log("Time has run out");
      window.alert("Time has run out, and "+self.name+" has won!");
      timer1.resetTimer();
      timer2.resetTimer();
    }
  }, 1000);
}

/**
 * Stops and resets the Timer object's remaining seconds
 */
Timer.prototype.stopTimer = function() {
  clearInterval(this.intervalObj);
  this.remaining = this.length;
}

/**
 * Stops the timer by clearing its Interval. To set again, use startTimer()
 */
Timer.prototype.pauseTimer = function() {
  clearInterval(this.intervalObj);
}

/**
 * Formats the time sent to the method in a human readable format. Division and
 * Moduluo is used to format the time into a readable form.
 * @param {integer} seconds Seconds to process into a readable form
 */
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

  if (displaySeconds < 10) {
    displaySeconds = '0' + displaySeconds;
  }

  //Return time to the interface
  document.getElementById(this.elementId).innerHTML = displayMinutes+":"+displaySeconds;
}

/**
 * Resets the Timer Object (lazy interface to stopTimer()) and resets
 * display time
 */
Timer.prototype.resetTimer = function() {
  this.stopTimer();
  this.formatTime(this.remaining);
  console.log("The timer has been reset");
}

/**
 * Checks to see if amount of seconds hasn't reached zero, and if so,
 * returns true. Otherwise, return false.
 * @return {boolean} States if time hasn't hit zero.
 */
Timer.prototype.checkRemainingTime = function() {
  if (this.remaining != 0) {
    return true;
  } else {
    return false;
  }
}

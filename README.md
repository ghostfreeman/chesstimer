# Chess Timer

This is a test application intended to implement a solution for a technical application screening. Do not use this code to cheat your way out of any said application screening. That's dishonest :).

## Design Considerations
Much of the Timer methods live inside a self-encapsulated Timer class, which is initalized on page load. Only the basic onClick() calls are used to interface with two instances of Timer class, each which manages the interface elements by ID reference. The use of a Class-based design promotes cleaner code with clearer abstraction support. Where necessary, strictly functional code is used to maintain cleanliness and readability.

The actual timing mechanism is rooted in setInterval(), which was selected over setTimeout() due to the repetitive firing nature. To avoid locking sync calls, only one setInterval() is used per Timer object. Considerations were made for a independent clock implementation, but to save time, was ignored outright.

The timer.js Class contains JSDoc blocks that further elaborate on method functionality.

## Known issues
* It is possible to use the Console to run both clocks simultaneously. This is an overlooked consideration as its assumed the user will interact with the clocks directly via UI, but adding runtime checking via Semaphore should be considered in a future version.
* The actual Timer class does contain some application-limiting logic, which assumes that there will be two timer Objects that must be reset when the clock reaches a Zero condition. A future version should use a callback to fire off a reset call, but was ignored as the requirements only specified for two Timer clocks (and there aren't a lot of <2 chess games in existence yet).
* Forcing Use Strict, time constraints prevented this from being implemented in this version.

## Improving
Feel free to submit pull requests.

All contributors agree to have their changes be subject to the software license of the application. If you do not agree to these terms, then do not contribute back to the software.

## Copying and Redistributing
See LICENSE

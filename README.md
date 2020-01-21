# event-loop-delay
Call at constant intervals in event-loop

# Usage

```javascript 1.5
import Delay from 'event-loop-delay'

let delay = new Delay(500); // Call at interval 500ms

delay(function(){
  //...
})
```

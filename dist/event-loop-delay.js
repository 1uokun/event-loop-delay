/**
 * @author 1uokun <https://github.com/1uokun>
 * @copyright 2020 1uokun. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

let listenersMap = new WeakMap();
function Delay(wait=0) {
    if(this instanceof Delay){

        listenersMap.set(this, []);

        let queue = listenersMap.get(this);

        function *f() {
            while(queue.length){
                yield queue.shift();
            }
        }

        return function delay(func){
            if(queue.length>0){
                queue.push({next:null});
                queue[queue.length-2].next = func;
                return false
            }

            queue.push({next:null});
            func();

            let timer = setInterval(()=>{
                let a = f().next();
                if(a.done){
                    clearInterval(timer);
                    return false
                }
                if(typeof a.value.next === "function"){
                    a.value.next.call(this);
                }
            },wait);
        }.bind(this)
    }
}

exports.Delay = Delay;

module.exports = Delay
module.exports.Delay = module.exports["default"] = Delay
//# sourceMappingURL=event-loop-delay.js.map

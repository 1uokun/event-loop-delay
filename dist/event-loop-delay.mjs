/**
 * @author 1uokun <https://github.com/1uokun>
 * @copyright 2020 1uokun. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
let listenersMap = new WeakMap();

function Delay(func,wait=0) {
        listenersMap.set(func, []);

        let queue = listenersMap.get(func);

        const f = function*() {
            while(queue.length){
                yield queue.shift();
            }
        };

        return function delay(){
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

export default Delay;
export { Delay };
//# sourceMappingURL=event-loop-delay.mjs.map

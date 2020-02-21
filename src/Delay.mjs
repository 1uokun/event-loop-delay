
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
                    a.value.next.call(this)
                }
            },wait);
        }.bind(this)
    }
}

export { Delay }
export default Delay;

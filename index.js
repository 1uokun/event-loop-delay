import LinkedList from './LinkedList'
let listenersMap = new WeakMap();
function Delay(wait=0) {
    if(this instanceof Delay){

        listenersMap.set(this, new LinkedList());

        let node = listenersMap.get(this);

        function *f() {
            while(node.length){
                yield node.removeAt(0);
            }
        }

        return function delay(func){
            if(node.length>0){
                node.append({first:false,event:func});
                return false
            }

            node.append({first:true,event:func});
            func();


            let timer = setInterval(()=>{
                let a = f().next();
                if(a.done){
                    clearInterval(timer);
                    return false
                }
                if(typeof a.value.event === "function" && !a.value.first){
                    a.value.event.call(this)
                }

            },wait);
        }.bind(this)
    }
}

module.exports = Delay;

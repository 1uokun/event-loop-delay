const assert = require('assert');
const delay = require('../src/Delay').delay;
const expect = require('chai').expect;


(function testIntervalTime(){
    const WAIT = 1000;
    // let delay = new Delay(WAIT);

    /* 第一个应该被立即执行 */
    let a = new Date().getTime();

    /* 第二个最短也要等 1000 ms 之后才能执行 */
    let b = 0;

    function func(){
        if(b === 0){
            assert(new Date().getTime() - a <= WAIT,"第一个应该被立即执行");

            b = new Date().getTime()
        }else {
            let interval = new Date().getTime() - b;
            assert( interval > WAIT && interval <= WAIT*2,"第二个应该在1S之后2S以内被执行");
        }
    }

    let _func = delay(func, WAIT);
    _func();
    _func();
})();

describe('Delay', function(){

    let func = function(){};

    it('should be a function', function() {
        expect(delay).to.be.a('function');
    });

    it('returns should be a function', function() {
        expect(delay(func)).to.be.a('function');
    });
});

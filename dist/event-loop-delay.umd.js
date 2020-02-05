/**
 * @author 1uokun <https://github.com/1uokun>
 * @copyright 2020 1uokun. All rights reserved.
 * See LICENSE file in root directory for full license.
 */(function(a){"function"==typeof define&&define.amd?define(a):a()})(function(){'use strict';function a(){var c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;if(this instanceof a){function g(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.length){a.next=5;break}return a.next=3,e.shift();case 3:a.next=0;break;case 5:case"end":return a.stop();}},d)}var d=regeneratorRuntime.mark(g);b.set(this,[]);var e=b.get(this);return function(a){var b=this;if(0<e.length)return e.push({next:null}),e[e.length-2].next=a,!1;e.push({next:null}),a();var d=setInterval(function(){var c=g().next();return c.done?(clearInterval(d),!1):void("function"==typeof c.value.next&&c.value.next.call(b))},c)}.bind(this)}}var b=new WeakMap;if(exports.Delay=a,"undefined"==typeof module&&"undefined"==typeof define){var c=Function("return this")();c.EventLoopDelay=a}});
//# sourceMappingURL=event-loop-delay.umd.js.map

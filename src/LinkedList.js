"use strict";

let Node = function(element){
    this.element = element;
    this.next = null;
};
export default class LinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
    }

    //向列表尾部添加一个新的项
    append(element){
        let node = new Node(element),
            current;    //创建当前节点的指针变量

        if(this.head === null){  //列表中的第一个节点
            this.head = node
        }else {
            current = this.head; //赋值第一个元素的引用

            //循环链表，直到找到最后一项
            while(current.next){
                current = current.next
            }

            //找到最后一项，将next赋给node，建立链接
            current.next = node
        }

        this.length++;   //更新链表的长度
    };

    //从列表的特定位置移除一项，并返回被移除的该项
    removeAt(position){
        //检查越界值
        if(position > -1 && position < this.length){
            let current = this.head, //当前项默认为链头的引用
                previous;       //被移除项的上一项

            //移除第一项
            if(position === 0){
                this.head = current.next
            }else {
                //※根据position定位到需要被移除项（current）以及该项的上一项（previous）
                while(position--){
                    previous = current;
                    current = current.next
                }
                //将previous与current的下一项链接起来：跳过current，从而移除它
                previous.next = current.next
            }

            this.length--;

            return current.element
        }
    };

    //向列表的特定位置插入一个新的项
    insert(element, position){
        //检查越界值
        if(position >= 0 && position <= this.length){
            let node = new Node(element),
                current = this.head,
                previous;

            //在第一个位置添加
            if(position === 0){
                node.next = current;    //新项的next赋值为前链表头
                this.head = node             //更新链表头
            }else {
                //※根据position定位到需要被加入项的上一项（previous）以及下一项（current）
                while(position--){
                    previous = current;
                    current = current.next
                }

                //将previous的下一项赋值为node，node下一项赋值为current：修改前一项的next从而加入到改链中
                previous.next = node;
                node.next = current
            }

            this.length++;

            return true
        }else {
            return false
        }
    };

    toString(){
        let current = this.head,
            string = '';

        while(current){
            string += current.element + (current.next ? 'n' : '');
            current = current.next
        }

        return string
    };

    indexOf(element){
        let current = this.head,
            index = 0;

        while(current){
            if(element === current.element){
                return index;
            }
            index++;
            current = current.next
        }

        return -1
    };

    //从列表中移除一项
    remove(element){
        // let index = this.indexOf(element);
        // return this.removeAt(index)

        // 重构remove方法
        let current = this.head;
        let prev = null;
        while(current){
            if(element === current.element) {

                this.length--;

                // 如果所删除的项不在第一个
                // 删除该项，只需要将该项的上一个节点和该项的下一个节点相连接
                // 该项失去引用，垃圾回收机制将自动回收该项的内存
                if(prev !== null){
                    prev.next = current.next
                }else {
                    // 如果第一个就是，则直接修改`this.head`的值
                    this.head = current.next;
                }
            }else {

                // 如果需要删除所有与element相同的节点
                // 应将prev放在这里
                prev = current;
            }

            // prev = current; // 址传递影响`this.head`
            current = current.next
        }



    }

    isEmpty(){
        return this.length === 0
    };

    size(){
        return this.length
    };

    getHead(){
        return this.head
    }
}

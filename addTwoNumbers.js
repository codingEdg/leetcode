

class NewNode {
    constructor(val, next = null) {
        this.val = val === undefined? 0 : val;
        this.next = next;
    }
}

const arrayToList = function(array) {
    let dummyHead = new NewNode(0)
    let current = dummyHead
    for (let item of array) {
        current.next = new NewNode(item)
        current = current.next
    }
    return dummyHead.next
}

const listToArray = function(list) {
    let array = []
    let current = list
    while(current) {
        array.push(current.val)
        current = current.next
    }
    return array
}

const addTwoNumbers = function(l1, l2) {
    let dummyHead = new NewNode(0);
    let current = dummyHead
    let carry = 0
    while(l1 || l2 || carry){
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry

        carry = Math.floor(sum / 10)
        current.next = new NewNode(sum % 10)
        current = current.next
        
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }
    return dummyHead.next
}
const  l1 = arrayToList( [9,9,9,9,9,9,9]), l2 =arrayToList( [9,9,9,9])
let list = addTwoNumbers(l1,l2)
const res =  listToArray(list)
console.log(res)


console.log("code ends")
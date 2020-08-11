// Stack
// Stack is very useful data structure and has a wide range application.
// Stack is a linear data structure which follows a particular order in which the operation are performed.
// Last In First Out(LIFO)
// First In Last Out(FILO)


    //   methods
// push:-  Add element to the collection.
// pop:-   Remove the most recently added element that was not yet remove.
// peek:-  Get the top element of stack, but doesn't delete it.

//     Helper methods
// length:- Return the length of stack.
// print:- Print the element of the stack.
// isEmpty:- Check the stack is empty.



class Stack{
    constructor(){
      this.item =[]
    }
  //   push insert an element
    push(element){
      this.item.push(element)
    }
    pop(){
      if(this.item.length == 0) return "UnderOverFlow"
      return this.item.pop()
    }
    peek(){
      return this.item[this.item.length - 1]
    }
    isEmpty(){
      return this.item.length == 0
    }
    printStack(){
      var str = ""
      for(let i = 0; i < this.item.length; i++){
        str += this.item[i] + " "
      }
      return str
    }
  }
  
  var stack = new Stack()
  
  console.log(stack.isEmpty()) // true
  console.log(stack.pop()) // "UnderOverFlow"
  
  stack.push(1); 
  stack.push(2); 
  stack.push(3);
  
  console.log(stack.printStack()) // "1 2 3"
  
  console.log(stack.peek()) // 3
  
  console.log(stack.pop()) // 3

  console.log(stack.printStack()) // "1 2"
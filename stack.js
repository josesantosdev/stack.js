// LIFO Last in Frist Out

const Stack = () =>{

    const data = []
    let top = -1

    const push = (value) =>{
        top++
        data[top] = value
        console.log(data)
        }
    const pop = () =>{
        if(top<0){
            return false
        }else{
            const itemToRetorun = data[top]
            data.splice(top, 1)
            top--
            return itemToRetorun
        }
    }
        const print = () =>{
            console.log(data)
        }
    
        return{
            push,
            pop,
            print
        }
}


const stack =  Stack()

stack.push(1)
stack.push(2)
console.log(stack.pop())
console.log(stack.pop())
stack.print()
stack.push(3)
stack.push(4)
stack.print()

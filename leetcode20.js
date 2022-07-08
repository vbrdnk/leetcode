/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = function(s) {
    // store all parantheses in a stack
    const stack = [];

    // example to compare
    const parens = '() {} []';
    
    for (let bracket of s) {
        // add each bracket to the stack
        stack.push(bracket);
        
        // check if last two elements in stack are valid parantheses
        const openParan = stack[stack.length - 2];
        const closeParan = stack[stack.length - 1];
        const combined = openParan + closeParan;
        
        // remove valid parantheses from stack
        if (parens.includes(combined)) {
            stack.pop();
            stack.pop();
        }
        
    }
    
    // if stack is empty, then all parantheses are valid
    return stack.length === 0;
};
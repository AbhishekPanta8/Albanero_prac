/* The Code tab has a code which attempts to add a clone of an array to itself.  */
function clone(arr){
    return [...arr,arr];
}
console.log(clone([1, 2, 3]));
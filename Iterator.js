/***
 * 
 *  {value: xx,done:ture/false}
 * 
 */

function manualIterator(data){
    let i=0;
    return {
        next(){
            let done = (i>=data.length);
            let value = !done?data[i++]:undefined;
            return {
                value:value,
                done:done
            }
        }
    }
}

let person = manualIterator(['a','b']);
console.log(person.next())
console.log(person.next())
console.log(person.next())


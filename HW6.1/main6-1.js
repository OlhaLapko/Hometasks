const message = prompt('Enter yor string');
const chars = prompt('Enter some chars for removing');
function foo(string, chars){
    let res = '';
    for (let i=0; i <string.length; i++){
        let delChar = false;
        for (let j=0; j<chars.length; j++){
            if (string[i] === chars[j]){
                delChar = true;
                break;
            }
        }
        if (!delChar){
            res += string[i];
        }
    }
    return res;
}
const res = foo(message, chars);
alert(res);
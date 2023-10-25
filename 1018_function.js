function printHello()
{
    console.log('Hello');
}
printHello();

function log(messege)
{
    console.log(messege);
}
log('Hello@');
log(1234);


function changeName(odj)
{
    Object.name = 'coder';
}
const ellie = { name : 'ellie' };
changeName(ellie);
console.log(ellie);


let globalMessege = 'global';
function printMessege()
{
    let messege = 'hello';
    console.log(messege);
    console.log(globalMessege);

    function printAnother()
    {
        console.log(messege);
        let childMessege = 'hello';
    }
    console.log(childMessege);
}
printMessege();

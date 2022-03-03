// simple a closur function
// const bank=woner=>{
//     balance=0;
//     return amount=>{
//         balance +=amount;
//         return balance;
//     }
// }
// const mofizBank=bank('mofiz')
// console.log(mofizBank(100))
// console.log(mofizBank(100))


// functional object
const bank=woner=>{
    balance=0;
    return {
        diposit:amount=>{
            balance +=amount;
            return balance;
        },
        widraw:amount=>{
            balance -=amount;
            return balance;
        },
    }
}
const mofizBank=bank('mofiz')
console.log(mofizBank.diposit(100))
console.log(mofizBank.diposit(100))
console.log(mofizBank.diposit(100))
console.log(mofizBank.diposit(100))
console.log(mofizBank.widraw(100))
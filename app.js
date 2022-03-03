// simple a closur function
const bank=woner=>{
    balance=0;
    return amount=>{
        balance +=amount;
        return balance;
    }
}
const mofizBank=bank('mofiz')
console.log(mofizBank(100))
console.log(mofizBank(100))
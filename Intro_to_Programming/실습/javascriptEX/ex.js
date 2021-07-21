//문제1. 3보다 큰 수만 뽑아서 새로운 배열 만들어 리턴
function biggerThanThree(number){
    let result = []
    
    for(let i = 0; i < number.length; i++){
        if(number[i] > 3 ){
            result.push(number[i]);
        }
    }
    return result;
}

const numbers = [1,2,3,4,5,6,7];
console.log(biggerThanThree(numbers));

export default biggerThanThree;


//문제2. 숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.
function countBiggerThanTen(numbers){
    let count = 0;
    numbers.filter(num => num > 10).forEach(element => {
        count++;
    });

    return count;
}
const count = countBiggerThanTen([1,2,3,4,5,10,20,30,40,50,60]);
console.log(count); //5
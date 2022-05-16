//funtional interface

interface Person4 {
    name: string;
    age: number;
    hello(): void;
}

const p41: Person4 = {
    name: "Mark",
    age: 39,
    hello: function (): void {
        console.log(`hello ${this.name}`);
    },
};
const p42: Person4 = {
    name: "Jason",
    age: 22,
    hello(): void {
        console.log(`hello ${this.name}`);
    },
};
// const p43: Person4 = {
//     name: 'Jason',
//     age: 22,
//     hello: (): void => { //arrow function에서는 this의 사용이 불가. 사용한다 하더라도 여기서의 this는 이 객체를 나타내지 않음
//         console.log(`hello ${this.name}`);
//     }
// }

p41.hello();
p42.hello();

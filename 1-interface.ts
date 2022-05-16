// interface는 자바스크립트에서는 지원하지 않는 문법.
// 실제 컴파일 될 때에는 사라짐. 컴파일 타임에만 필요.
interface Person1 {
    name: string;
    age: number;
}

// function hello1(person: {name: string, age: number}) : void {
function hello1(person: Person1): void {
    //return 없기 때문에 void
    console.log(`안녕하세요~ ${person.name}`);
}

// 아래와 같이 primitive 타입을 적어주는 대신 직접 작성하여 타입을 지정해줄 수도 있지만
// const p1 : { name: string, age: number } = {
//     name: 'Mark',
//     age: 39
// }
// 인터페이스를 적용해줄 경우 간결하고 깔끔하게 타입을 정의할 수 있다.
// 이는 상단의 hello1에도 적용 가능하여 중복되는 코드 및 오류를 방지할 수 있다.
const p1: Person1 = {
    name: "Mark",
    age: 39,
};

hello1(p1);

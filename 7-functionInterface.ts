//interface에서 함수 다루기

interface HelloPerson {
    (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string, age?: number) {
    console.log(`Hello ${name}`);
};

//helloPerson에서 age를 파라미터로 넘길 때, HelloPerson은 age가 선택적이지만 function의 파라미터에서는 필수값으로 들어가게 된다.
//따라서 파라미터 또한 인터페이스와 같이 optional인 경우 ?를 입력해주어야 에러가 발생하지 않음.

helloPerson("Mark", 33);

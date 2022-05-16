//optional property
//필요에 따라 있을 수도 있고 없을 수도 있는 property

interface Person2 {
    name: string;
    age?: number; //변수명 뒤에 ?를 통해 해당 속성이 있을 수도, 없을 수도 있다는 것을 정의
}

function hello2(person: Person2): void {
    console.log(`hello ${person.name}`);
}

hello2({ name: "Mark", age: 39 });
hello2({ name: "Jason" }); // 인터페이스에서 age에 ?가 없다면 에러 출력.

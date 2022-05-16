interface IPerson1 {
    name: string;
    age?: number;
    hello(): void;
}

//클래스를 사용하면서 인터페이스를 사용할 때 implements를 통해 사용 가능
//처음 생성 시 optional property가 아닌 변수의 경우 constructor를 통해 default를 설정해주어야 사용 가능
//class 내에서는 this 사용 가능.
class Person implements IPerson1 {
    name: string;
    age?: number | undefined;
    constructor(name: string) {
        this.name = name;
    }
    hello(): void {
        console.log(`hello ${this.name}`);
    }
}

let person: IPerson1 = new Person("mark");
person.hello();

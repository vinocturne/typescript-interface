//optional property
//indexable type

interface Person3 {
    name: string;
    age?: number;
    [index: string]: any; //해당 방식을 사용하면 원하는 프로퍼티를 언제나 추가 가능하게된다.
    // 사용은 Person3 인터페이스를 사용하는 객체 a에서, a['원하는 속성명'] = 을 통해 지정이 가능.
}

function hello3(person: Person3): void {
    console.log(`hello ${person.name}`);
}

const p31: Person3 = {
    name: "Mark",
    age: 39,
};

const p32: Person3 = {
    name: "Jason",
    systers: ["Sung", "Chan"],
};

const p33: Person3 = {
    name: "Bob",
    father: p31,
    mother: p32, //indexable type을 통해 다른 객체를 넣는 것도 가능하다.
};

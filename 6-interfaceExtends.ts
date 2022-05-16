interface IPerson2 {
    name: string;
    age?: number;
}

//extends는 한 클래스에서 다른 클래스로 상속할 때 사용.
//여기서는 interface에서 다른 interface를 상속받아 사용하기 때문에 사용 가능

interface IKorean extends IPerson2 {
    city: string;
}

const k: IKorean = {
    name: "Mark",
    city: "Seoul",
    age: 33,
};

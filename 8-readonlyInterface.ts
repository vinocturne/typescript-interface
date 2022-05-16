interface Person8 {
    name: string;
    age?: number;
    readonly gender: string;
    //readonly는 인터페이스를 생성할 때 프로퍼티 명 앞에 설정하면 된다.
}

const p81: Person8 = {
    name: "Mark",
    gender: "Male",
};
//readonly를 정의하게되면 수정하려 할 때 에러를 표시해준다.
// p81.gender = "female";     * 에러

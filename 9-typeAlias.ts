//type alias vs interface

//////function
//type alias
type EatType = (food: string) => void;

//interface
interface IEat {
    (food: string): void;
}

//////array
//type alias
type PersonList = string[];

//interface
interface IPersonList {
    [index: number]: string; //indexable type
}

//////intersection

interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}
interface ArtistsData {
    artists: { name: string }[];
}

//type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;

//interface
interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let iar: IArtistsResponse;

//////union types
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

//type alias
type PetType = Bird | Fish;

//interface
// interface IPet extends PetType {} //union type으로 설정된 타입은 인터페이스로 상속이 불가능함.

// class Pet implements PetType {}

//////Declaration Merging

interface MergingInterface {
    a: string;
}
interface MergingInterface {
    b: string;
}

let mi: MergingInterface; //인터페이스가 같은 이름으로 두 개가 설정이 되어있다면, 사용하는 곳에서는 두 개가 Merge된 상태로 사용가능하다.

//type-alias
// type MergingType = {
//     a: string;
// }
// type MergingType = {
//     b: string;
// }
//type을 사용하게되면 merge는 사용 불가능. Merging 기능 자체가 Interface에만 들어있기 때문

//type-alias는 어떤 타입을 부르는 이름을 변경해주는 것
//interface는 새로운 타입을 만들어내는 것으로 이해하면 편할 듯.

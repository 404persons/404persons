export interface Person {
    name: string;
    age: number;
    gender: string;
    image: string;
    last_loc: string;
    last_seen: string;
    nationality: string;
    reported_by: string;
    status: boolean;
    // "last_loc": {
    //     "_lat": 5.5671881,
    //     "_long": -0.2195987
    //   },
    //   "last_seen": {
    //     "seconds": 1534161600,
    //     "nanoseconds": 0
    //   },

    // constructor(
    //     name: string,
    //     age: number,
    //     gender: string,
    //     image: string,
    //     last_loc: string,
    //     last_seen: string,
    //     nationality: string,
    //     reported_by: string,
    //     status: boolean
    // ) {
    //     this.name = name;
    //     this.age = age;
    //     this.gender = gender;
    //     this.image = image;
    //     this.last_loc = last_loc;
    //     this.last_seen = last_seen;
    //     this.nationality = nationality;
    //     this.reported_by = reported_by;
    //     this.status = status;
    // }
}

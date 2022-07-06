var fullname: string = "my name is shobha";
var number: number = 23;
var numArray: number[] = [302, 304, 306, 308, 310];
var mixedArray: (string | number)[] = ["hellow", 326, 327, 328, 329, 330];

interface addressType {
  id: number;
  isLogin: boolean;
  emial: string;
  skill: string[];
  company: {
    name: string;
    address: {
      doorNumber: number;
      road: string | number;
    };
  };

  
}

var address: addressType = {
  id: 18,
  isLogin: true,
  emial: "shobha@gmail.com",
  skill: ["HTML", "css", " javascript"],
  company: {
    name: "shobha",
    address: {
      doorNumber: 45,
      road: " 7th cross",
    },
  },
};

function add(x: number, y: number): number {
  return x + y;
}

add(2, 3);

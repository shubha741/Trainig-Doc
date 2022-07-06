let fullName = "shobha";
let interest = ["listening to podcasts", "gardening", "traveling", "drawing"];

let birth = {
    place: "haasan",
    year: 1996,
};

let textOne = `${fullName} is an indian Developer interestd in many topics ${interest.join(
  ", "
)}
born in ${birth.place} in  year in ${birth.year}`;

let textTwo =
    fullName +
    "is an indian Developer interestd in many topics " +
    interest.join(", ") +
    "born in" +
    birth.place +
    "in year in " +
    birth.year;

console.log(textOne);
console.log(textTwo);
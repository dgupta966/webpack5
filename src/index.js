import "./styles/index.css";

const obj = {
    name : "deepak",
    city : "new delhi",
    age :25
};

const newObj = {
    ...obj,
    age : 24,
    country : "India",
}

console.log(obj);
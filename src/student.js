import axios from 'axios';

export default class Student{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(`My name is ${this.name}`);
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => console.log(response.data))
    }
}
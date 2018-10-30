// // CommonJS module

// // const person = require("./mymodule1");

// // ES2015 -es6 module
// // import { person, sayHello } from "./mymodule2";

// import * as mod from "./mymodule2";

// console.log(mod.sayHello());
// console.log(mod.person.name);


import { http } from "./http";
import { ui } from "./ui";


// Get posts on dom load
document.addEventListener("DOMContentLoaded", getPosts);

function getPosts() {
    http.get("http://localhost:3000/posts")
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
}

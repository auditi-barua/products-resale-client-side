import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className=" text-xl bg-cyan-400">What are the different ways to manage a state in a React application?</h2>
            <p>React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.</p>
            <h2 className=" text-xl bg-yellow-400 ">How does prototypical inheritance work?</h2>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            <h2 className=" text-xl bg-green-700 ">What is a unit test? </h2>
            <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
           <h2 className=" text-xl bg-pink-600">Why should we write unit tests?</h2>
           <p> The key is: when you write test you take the perspective of the one that will consume your code. It forces you to have an holistic approach of the behavior to implement. This way ambiguities you get from requirements become obvious and are immediately taken account when code is written the first time.
            </p>
            <h2 className=" text-xl bg-red-500 ">React vs. Angular vs. Vue?</h2>
            <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
        </div>
    );
};

export default Blog;
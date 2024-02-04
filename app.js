const heading = React.createElement("h1", { id: "heading" }, "Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));


//creating nested HTML element using React

/*
*<div id ="parent">
*    <div id ="child">
*       <h1></h1>
        <h2></h2> if we need to create siblings use array
*   </div>
*
*</div>
*/

const parent = React.createElement("div", { id: "parent" }, 
    React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "I am an h1 tag"), React.createElement("h2",{},"I am an h2 tag")]));

    root.render(parent);
// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello World from React!"); // First argument is for type of object {} -> second argument is To give attributes to the tag which are called props and third argument is children
// const root = RaectDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{
  /* <div id="parent">
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an H1 tag"),
    React.createElement("h2", {}, "I am an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an H1 tag"),
    React.createElement("h2", {}, "I am an H2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

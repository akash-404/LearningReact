import React from "react";
import ReactDOM from "react-dom/client";

// React element => object

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));

// const jsxHeading = (
//   <h1 id="heading" className="head" tabIndex="1">
//     Namaste react by JSX
//   </h1>
// );

const Title = () =>(
  <h1 id="heading" className="head" tabIndex="1">
    Namaste react by JSX
  </h1>
);

const number1 = 1000;

// React component
// component composition - rendering one component inside other
const HeadingComponent = () => (
  <div id="container">
    {number1}
    Called Title component using three different ways:
    1 - <Title/>
    2 - <Title></Title>
    3 - {Title()}
    <h1 className="heading">Namaste React</h1>
  </div>
)

// root.render(heading);
// root.render(jsxHeading);
root.render(<HeadingComponent/>);

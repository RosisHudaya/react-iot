// import React from "react";
// import ReactDOM from "react-dom/client";
// import ExampleComponent from "./components/ExampleComponent";

// ReactDOM.render(
//     <React.StrictMode>
//         <ExampleComponent />
//     </React.StrictMode>,
// );
import React from "react";
import { createRoot } from "react-dom/client";
import ExampleComponent from "./components/ExampleComponent";

createRoot(document.getElementById("app")).render(<ExampleComponent />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {hydrateRoot} from "react-dom/client";

// hydrateRoot(
//     rootElement,
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>
//
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

);


// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//     hydrateRoot(
//         rootElement,
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     );
// } else {
//     const root =  ReactDOM.createRoot(rootElement);
//     root.render(
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     )
// }
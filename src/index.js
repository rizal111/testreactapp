import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_SECRET_KEY,

	authDomain: `${process.env.REACT_APP_DOMAIN}.firebaseapp.com`,

	projectId: process.env.REACT_APP_DOMAIN,

	storageBucket: `${process.env.REACT_APP_DOMAIN}.appspot.com`,

	messagingSenderId: "989076242971",

	appId: "1:989076242971:web:46c35acf134d273bfe6ebe",

	measurementId: "G-W546B49R7F",
};
const app = initializeApp(firebaseConfig);

console.log(`${process.env.REACT_APP_DOMAIN}.firebaseapp.com`);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

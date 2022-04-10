import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import clevertap from 'clevertap-web-sdk';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-analytics.js";
clevertap.init('TEST-4W5-9RR-646Z'); 
clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({useIP: true}); //set the flag to true, if the user agrees to share their IP data
		
			// TODO: Add SDKs for Firebase products that you want to use
			// https://firebase.google.com/docs/web/setup#available-libraries
		  
			// Your web app's Firebase configuration
			// For Firebase JS SDK v7.20.0 and later, measurementId is optional
			const firebaseConfig = {
			  apiKey: "AIzaSyA_Ogl_uvT3_b9isNPxr1QtwVYJ-CL0E3s",
			  authDomain: "ctest2-4f342.firebaseapp.com",
			  projectId: "ctest2-4f342",
			  storageBucket: "ctest2-4f342.appspot.com",
			  messagingSenderId: "68868130286",
			  appId: "1:68868130286:web:13f41cf53427ffbb84faff",
			  measurementId: "G-FGG4RYW3JL"
			};
		  
			// Initialize Firebase
			const app = initializeApp(firebaseConfig);
			const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import logo from './logo.svg';
import './App.css';
import clevertap from 'clevertap-web-sdk';
function App() {
  return (
    <div className="App">
       <header className="App-header">
       <h1>CLEVERTAP REACT PROJECT</h1>
       <div>
       <button className="btn" onClick={createUser}>SET IDENTITY</button>
       <button className="btn" onClick={showid}>SHOW CT ID</button>
       <button className="btn" onClick={notify}>ASK PERMISSION</button>
       <button className="btn" onClick={pushevent}>PUSH EVENT</button>
       </div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 id="test"> </h2>
       
      </header>
    </div>
  );
}

function createUser() {
 
  clevertap.onUserLogin.push({
   "Site": {
     "Name": "Biswa react",            // String
     "Identity": 5447,              // String or number
     "Email": "biswareact@web.com",         // Email address of the user
     "Phone": "+91779299",           // Phone (with the country code)
     "Gender": "M",                     // Can be either M or F
     "DOB": new Date(),                 // Date of Birth. Date object
  // optional fields. controls whether the user will be sent email, push etc.
     "MSG-email": true,                // Disable email notifications
     "MSG-push": true,                  // Enable push notifications
     "MSG-sms": true,                   // Enable sms notifications
     "MSG-whatsapp": true,              // Enable WhatsApp notifications
   
    }
  })
  console.log("user created");
}

function showid(){
	 var CT = clevertap.getCleverTapID();
   alert(CT);
  //document.getElementById("test").innerHTML = CT;
  console.log(CT+"ID");
  }

  function notify(){
    
    clevertap.notifications.push({
        "titleText":'Would you like to receive Push Notifications?',
        "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
        "okButtonText":'Sign me up!',
        "rejectButtonText":'No thanks',
        "okButtonColor":'#778046'});
        console.log("permission asked");
    }

    function pushevent(){
      clevertap.event.push("biswaWebpush");
      console.log("event pushed");
      }

export default App;

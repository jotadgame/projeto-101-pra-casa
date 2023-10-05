const firebaseConfig = {
    apiKey: "AIzaSyDkiNZ2cV7G65bZdiwAcb0afEDhwdD0P58",
    authDomain: "projeto-101-e86be.firebaseapp.com",
    databaseURL: "https://projeto-101-e86be-default-rtdb.firebaseio.com",
    projectId: "projeto-101-e86be",
    storageBucket: "projeto-101-e86be.appspot.com",
    messagingSenderId: "701561040668",
    appId: "1:701561040668:web:34a6b621217f4673b0d4d9"
  };
  // Initialize Firebase
  // no  firebase vai  estar const  app, nos  vamos trocar para firebase.
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name"); 
  room_name = localStorage.getItem("room_name"); 
  
  function send() 
  { msg = document.getElementById("msg").value; 
  firebase.database().ref(room_name).push({
 name:user_name, 
 message:msg, 
 like:0 }); 
 
 document.getElementById("msg").value = ""; }
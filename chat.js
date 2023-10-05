// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "AIzaSyDkiNZ2cV7G65bZdiwAcb0afEDhwdD0P58",
    authDomain: "projeto-101-e86be.firebaseapp.com",
    databaseURL: "https://projeto-101-e86be-default-rtdb.firebaseio.com",
    projectId: "projeto-101-e86be",
    storageBucket: "projeto-101-e86be.appspot.com",
    messagingSenderId: "701561040668",
    appId: "1:701561040668:web:34a6b621217f4673b0d4d9"
  };
// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    
    localStorage.setItem("user_name", user_name);
    
    window.location = "chat_room.html";
}




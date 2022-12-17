function main(){
    event.preventDefault()
    window.location.href ="index2.html"
}
function signup(e){
    event.preventDefault()

    var email = document.getElementById('email').value;
    if(document.getElementById('email').value.length == 0){
        alert("Please fill in everything correctly")
        window.location.href ="index2.html"
        localStorage.clear();
        return
    }
    var username = document.getElementById('username').value;
    if(document.getElementById('username').value.length == 0){
        alert("Please fill in everything correctly")
        window.location.href ="index2.html"
        localStorage.clear();
        return
    }
    var pass = document.getElementById('password').value;
    if(document.getElementById('password').value.length == 0){
        alert("Please fill in everything correctly")
        window.location.href ="index2.html"
        localStorage.clear();
        return
    }

    var user = {
        email: email,
        username: username,
        password: pass,
    };
    
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('user added');
    window.location.href ="login.html";
}

function loginFunc(e){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var result= document.getElementById('result');
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);
    
    if(data == null){
        result.innerHTML = 'Неправильный логин';
    }else if(username == data.username && pass == data.password){
        result.innerHTML = 'Вы вошли успешно';
        sessionStorage.setItem('sessionuser', data.username);
        window.location.href = "index2.html";
    }else{
        result.innerHTML = 'Неправильный пароль';
    }
}

function logout(){
    event.preventDefault();
    alert("Вы вышли!")
    window.location.href =('login.html') 
}
function signup2(){
    event.preventDefault();
    window.location.href =('index2.html') 
}
function loginFunc2(){
    event.preventDefault();
    window.location.href =('login.html') 
}


const container = document.querySelector('#container')
const getRes = async(url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`status: ${res.status}`);
    }
    return await res.json()
}
}

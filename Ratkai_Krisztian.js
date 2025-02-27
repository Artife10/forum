let fnev = "";
let email = "";
let jels = "";
let datum = "";
let error = "";
let helyesek = 0;

let kor = 0

let ma = new Date()
let ev = 0
let honap = 0
let nap = 0

function Forumkuld() {
    error = "";
    helyesek = 0;

    fnev= document.getElementById("name").value;
    email= document.getElementById("email").value;
    jels= document.getElementById("passw").value;
    datum= document.getElementById("date").value



    ForumNezesNev();
    ForumNezesEmail();
    ForumNezesJel();
    Eletkor();
    if (helyesek == 4) {
        error = "<p id='helyes'>HELYES</p>"
        document.getElementById("error").innerHTML = error
    }
}

function ForumNezesNev() {
    var nevlenght = fnev.length
    if (nevlenght != 0) {
        if (nevlenght < 8) {
            error = error + "A nevednek legalább 8 karakter hosszúnak kell lennie <br>"
        }
        else{
            if (nevlenght > 15) {
                error = error + "A nevednek maximum 15 karaktere lehet<br>"
            }
            else{
                helyesek += 1
            }
        }
    }
    document.getElementById("error").innerHTML = error
}

function ForumNezesEmail() {
    var emaillenght = email.length

    if (emaillenght > 12) {
        if (email.indexOf(".") == -1 || email.indexOf("@") == -1) {
            error = error + "Emailnek tartalmaznia kell egy pontot és egy @ jelet <br>"
        }
        else{
            helyesek += 1
        }
    }
    else{
        if (emaillenght != 0) {
            error = error + "Az emailnek legalább 12 karakter hosszúnak kell lennie"   
        }
    }
    document.getElementById("error").innerHTML = error
}

function ForumNezesJel() {
    var jellenght = jels.length
    if (jellenght != 0) {
        if (jellenght < 8) {
            error = error + "A jelszavadnak legalább 8 karakter hosszúnak kell lennie <br>"
        }
        else{
            if (jellenght > 15) {
                error = error + "A jelszavadnak maximum 15 karaktere lehet<br>"
            }
            else{
                helyesek += 1
            }
        }
    }
    document.getElementById("error").innerHTML = error
}

function Eletkor() {
    
    datum = datum.replace("-","")
    datum = datum.replace("-","")

    ev = datum.substring(0,4)
    honap = datum.substring(4,6)
    nap = datum.substring(6,8)

    kor = ma.getFullYear() - ev

    if (kor > 18) {
        helyesek += 1
    }else{
        error = error + "Nagykorúnak kell lenned<br>"
    }
    document.getElementById("error").innerHTML = error
}
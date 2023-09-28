// jQuery
$(document).ready(function () {
    LoadInfoToPartialView("#content-main", "/flores.html");
    GetDayPhrase();
});

function LoadInfoToPartialView(place, url) {
    $(place).load(url, function (response, status, xhr) {
        if (status != "success") {
            alert(response);
            return "error";
        } else {
            return "ok";
        }
    });
}

async function GetDayPhrase() {
    let response = await fetch("assets/json/poems.json");
    if (response.ok) {
        let json = await response.json();
        ShowMessage(json.title);
    } else {
        alert("Error-HTTP: " + response.status);
    }
}

function ShowMessage(message){
    
}
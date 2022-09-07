function submitFeedback(){
    var div = document.getElementById("feedbackDiv");
    var textbox = document.getElementById("textbox");   

    var text = textbox.value;

    var cardDiv = document.createElement("div");
    div.classList = "card";

    var p = document.createElement("p");
    p.innerHTML = text;

    cardDiv.appendChild(p);

    div.appendChild(cardDiv);

    return false;
}
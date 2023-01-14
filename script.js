var fontSizeSelect = document.getElementById("font-size-select");
fontSizeSelect.addEventListener("change", function() {
    var selectedSize = fontSizeSelect.value;
    ctx.font = selectedSize + "px Impact";
});

function previewImage() {
    var file = document.getElementById("image-input").files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = document.getElementById("image-preview");
        img.src = e.target.result;
        img.style.display = "block";
    };
    reader.readAsDataURL(file);
}

function addMemeText() {
    var img = document.getElementById("image-preview");
    var text1 = document.getElementById("meme-text1").value;
    var text2 = document.getElementById("meme-text2").value;
    var text3 = document.getElementById("meme-text3") ? document.getElementById("meme-text3").value : "";

    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);
    var selectedSize = fontSizeSelect.value;
    ctx.font = selectedSize + "px Impact";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.fillText(text1, canvas.width / 2, 50);
    ctx.strokeText(text1, canvas.width / 2, 50);
    ctx.fillText(text2, canvas.width / 2, canvas.height - 50);
    ctx.strokeText(text2, canvas.width / 2, canvas.height - 50);
    if (text3) {
        ctx.fillText(text3, canvas.width / 2, canvas.height / 2);
        ctx.strokeText(text3, canvas.width / 2, canvas.height / 2);
    }

    img.src = canvas.toDataURL();
}

function addMoreTextArea() {
    var form = document.querySelector("form");
    var newTextArea = document.createElement("input");
    newTextArea.setAttribute("type", "text");
    newTextArea.setAttribute("placeholder", "Enter your additional meme text");
    newTextArea.setAttribute("id", "meme-text3");
    form.appendChild(newTextArea);
    form.appendChild(document.createElement("br"));
}

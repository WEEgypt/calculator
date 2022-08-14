function CalQuota() {
    document.getElementById("RealMoney").value = Math.round(Math.ceil((document.getElementById("ReqBalance").value) * 10) / 7) + " LE";
}
function ResetCal() {
    document.getElementById("ReqBalance").value = "";
    document.getElementById("RealMoney").value = "";
}
function Thanks() {
    if (thanks.style.display === "none") {
        thanks.style.display = "block";
        document.getElementById("more").innerHTML = "˄";
    } else {
        thanks.style.display = "none";
        document.getElementById("more").innerHTML = "˅";
    }
}

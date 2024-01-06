function donooff() {

    document.querySelectorAll('#files form').
        forEach(function (frm) {
            frm.style.display = 'none'
        })
}


var a = document.querySelector('#fileicon')
a.addEventListener("click", function () {
    donooff();
    document.querySelector("#fileform").style.display = "block"
})

var a = document.querySelector('#foldericon')
a.addEventListener("click", function () {
    donooff();
    document.querySelector("#folderform").style.display = "block"
})

document.querySelector('#files').addEventListener("click",function(dets){
    console.log(dets.target.id)
    if(dets.target.id === "edit"){
        document.querySelector("#inp").value =dets.srcElement.parentElement.parentElement.textContent.trim();
        document.querySelector('#popup').style.display = "flex";
        document.querySelector("#popup").querySelector('form').setAttribute("action","/rename/"+dets.srcElement.parentElement.parentElement.textContent.trim());
    }

})









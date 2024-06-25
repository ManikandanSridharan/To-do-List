//selecting All
var inputbox = document.getElementById("inputbox")
var btn = document.getElementById("btn")
var container = document.getElementById("container")

btn.addEventListener("click", function () {
    var li = document.createElement("li")
    li.innerHTML = inputbox.value + "<button onclick='del(event)'>Delete</button>"
    container.append(li)

})

function del(event) {
    event.target.parentElement.remove()
}
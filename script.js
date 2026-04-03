function loadStudents(){

fetch("https://localhost:5001/api/students")
.then(response => response.json())
.then(data => {

let list = document.getElementById("students")

list.innerHTML = ""

data.forEach(student => {

list.innerHTML += 
`<li>${student.name} - ${student.course}</li>`

})

})

}

function ItemFive(){
  fetch("http://35.188.215.226:8000/my_program", {
    method: "POST",
    name: "frank",
    program: "all"
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
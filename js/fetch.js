function ItemSeven(){
  fetch("http://35.188.215.226:8000/my_program", {
    method: "POST",
    body: JSON.stringify({
      name: "frank",
      program: "all",
      completed:false
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
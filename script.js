console.log("Nacho");

const apiUrl = "http://localhost:3000/home";
fetch(apiUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Work with JSON data here
    console.log(data);
    document.getElementById("titulo").innerHTML = data.title;
  })
  .catch((err) => {
    // Do something for an error here
  });

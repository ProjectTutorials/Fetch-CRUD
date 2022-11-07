// GET EACH ELEMENT (UNORDERED)
function read_all() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log("success!");
      console.log(data);
      htmlOutput(data);
    });
}

// GET EACH ELEMENT BY JSON
function read_one() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        console.log("success!");
        htmlOutput(data[i].name);
      }
    });
}

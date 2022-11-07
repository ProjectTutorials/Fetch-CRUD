// DATA
const DATA2 = {
  name: "John",
  message: "I am John",
};

// UPDATE FUNCTION
function update_() {
  fetch(URL + ID, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(DATA2),
  });
  var msg = "update successful";
  console.log(msg);
  htmlOutput(msg);
}

// DATA
const DATA1 = {
  name: "Jane Doe",
  message: "This is Jane Doe",
};

// CREATE FUNCTION
function create_() {
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(DATA1),
  });
  var msg = "create successful";
  console.log(msg);
  htmlOutput(msg);
}

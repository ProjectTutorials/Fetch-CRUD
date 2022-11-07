// DELETE FUNCTION
function delete_() {
  fetch(URL + ID, {
    method: "DELETE",
  });
  var msg = "delete successful";
  console.log(msg);
  htmlOutput(msg);
}

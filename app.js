// URL DECLARATION
const URL = "http://localhost:3000/Messages/";
var ID = "6368f06089f972b674aefd1c";

// TO GET HTML OUTPUT
function htmlOutput(out) {
  $("body").append(
    $("<div>", {
      text: out,
    })
  );
  console.log("Printed");
}

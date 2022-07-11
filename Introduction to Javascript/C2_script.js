// accessing body element
const body = document.body;
// accessing element of id heading_1
const heading = document.getElementById("heading_1");
// accessing element of id para_1
const para = document.getElementById("para_1");
// accessing element of id div_1
const div = document.getElementById("div_1");

// styles for body
body.style.height = "100vh";
body.style.width = "100vw";
body.style.backgroundColor = "#76BA99";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.overflow = "hidden";

// styles for heading
heading.textContent = "Welcome to Javascript world";
heading.style.color = "black";
heading.style.fontSize = "40px";

// styles for para
para.textContent =
  "This is the intro to the js, we can explore more in further classes";
para.style.color = "#990000";
para.style.fontSize = "20px";
para.style.fontWeight = "600";

// styles for div
div.style.height = "200px";
div.style.width = "1000px";
div.style.backgroundColor = "#F6FBF4";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.border = "5px solid black";
div.style.borderRadius = "10px";

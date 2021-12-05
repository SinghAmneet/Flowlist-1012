
var inputBox = document.querySelector(".inputList input");//variable for the input box with "Create a list"
var addButton = document.querySelector(".inputList button"); // variable for the "+" button
var toDoList = document.querySelector(".toDoList"); //variable for class "toDoList" that contains empty lists (and the trash icons on the right)
var deleteBtn = document.querySelector(".footer button"); // variable for the "Clear All button"
var arrayList = [];

// making input box editable by user to enter their tasks
//when user enters characters in the input box, the onkeyup event executes
inputBox.onkeyup = function () {
  // .value returns what the user enters
  inputBox.value;

}

showLists(); //show lists

//when user clicks on the "+" button
addButton.onclick = function () {
  //returns the value of the user's
  var inputValue = inputBox.value;
  var FlowlistStorage = localStorage.getItem("New List"); //use localStorage object to store data with the id "New List" so that when the browser closes, the data doesn't get lost
  if (!FlowlistStorage) { //if localStorage has no data, then we create an empty array so users' lists can show in vertical format
    arrayList = [];
  } else {
    arrayList = JSON.parse(FlowlistStorage);  //convert JSON string into JS object
  }
  //push the users' entered list into the empty array
  arrayList.push(inputValue);
  localStorage.setItem("New List", JSON.stringify(arrayList)); //convert back to JSON string

  showLists(); // show lists 

}

function showLists() {
  var FlowlistStorage = localStorage.getItem("New List");

  if (!FlowlistStorage) {
    arrayList = [];
  } else {
    arrayList = JSON.parse(FlowlistStorage);
  }
  var pendingLists = document.querySelector(".pendingLists");
  pendingLists.textContent = arrayList.length;
  if (arrayList.length > 0) { //if array length is greater than 0
    deleteBtn.classList.add();
  } else {
    deleteBtn.classList.remove();
  }
  //to create a list with the trash icon after the user inputs 
  var newLists = "";
  //this subsitutes the HTML empty li content with the user's lists, with the trash icons on the right side 
  arrayList.forEach(function (element, index) {
    newLists = newLists + `<li>${element}<span class="icon" onclick="deleteList(${index})"><i class='bx bxs-trash-alt'></i></span></li>`;
  });

  toDoList.innerHTML = newLists;
  inputBox.value = ""; //this clears the input field after user adds a list
}


function deleteList(index) {
  var FlowlistStorage = localStorage.getItem("New List");
  arrayList = JSON.parse(FlowlistStorage);
  arrayList.splice(index, 1);
  localStorage.setItem("New List", JSON.stringify(arrayList)); //this allows user to delete lists using the pink trash icon on the right
  showLists(); //show lists
}

deleteBtn.onclick = function () { //when "Clear All" button is clicked
  arrayList = []; //empty out the array so it can restart
  localStorage.setItem("New List", JSON.stringify(arrayList)); //set the item in localstorage
  showLists(); // show lists
}
//add last modified date next to "Date created"
d = document.lastModified;
document.getElementById("listDate").innerHTML = d;


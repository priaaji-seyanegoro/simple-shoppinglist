var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

//cek panjang kata yg diinput
function inputLength(){
  return input.value.length;
}

// cek panjang list li
function checkLis(){
  return document.getElementsByTagName('li').length;
}

// create li and button
function createListItem(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value)); // buat jdin li child li parent dan createTextNode buat isi text tengah di elemnt li
  li.addEventListener('click' , toggleDone); // ketika li di click bakal passing ke function toggleDone
  ul.appendChild(li); // buat element li jd child ul
  input.value = ''; // buat kosongin input

  //create button delete
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("X"));
  btn.classList.add('btn-list');
  li.appendChild(btn);

  // action delete item
  btn.addEventListener('click' , delItem);

  // fungsi buat ngilangin tulisan h3 (Empty)
  if (checkLis() > 0 ) {
    var emptyList = document.querySelector('h3');
    emptyList.style.display = "none";
  }

  //fungsi buat nambahin class css .done
  function toggleDone(){
    li.classList.toggle('done');
  }

  // fungsi del item list
  function delItem(){
    li.remove();
    if (checkLis() === 0) {
      var emptyList = document.querySelector('h3');
      emptyList.style.display = "block";
    }
  }

}

// fungsi kalo tekann button enter
function afterClick(){
  if (inputLength() > 0) { // inputLength is a method for return input length
    createListItem(); // is a function for make a list
  }
}

// fungsi kalo menggunakan enter
function afterKeyPress(event){
  if (inputLength() > 0 && event.keyCode === 13) { // inputLength is a method for return input length & event.keyCode is code keyboard for enter
    createListItem(); // is a function for make a list
  }
}

button.addEventListener("click" , afterClick); // click is event mouse & after click is method

input.addEventListener("keypress" , afterKeyPress); // keypress is event keyboard & after afterKeyPress method

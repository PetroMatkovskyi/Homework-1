// task 1

document.querySelector('#test').innerHTML = 'Last';
document.getElementById('test').innerHTML = 'Last last';

// task 2

document.querySelector('.image').src = 'cat.jfif';
alert(document.querySelector('.image').src);

// task 3

const paragraph = document.querySelectorAll('#text p');

for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].innerHTML = `Selector text ${i}: ${paragraph[i].innerHTML}`;
}

// task 4

const list = document.querySelectorAll('#list li');
const list2 = document.getElementById('list');

alert(
  `${list[0].innerHTML}, ${list[4].innerHTML}, ${list[1].innerHTML}, ${list[3].innerHTML}, ${list[2].innerHTML}`
);

alert(
  `${list2.firstElementChild.innerText}, ${list2.lastElementChild.innerText}, ${list2.firstElementChild.nextElementSibling.innerText}, ${list2.lastElementChild.previousElementSibling.innerText}, ${list2.lastElementChild.previousElementSibling.previousElementSibling.innerText}`
);

// task 5

const header1 = document.querySelector('h1');
const myDiv = document.querySelectorAll('#myDiv p');
const myListLi = document.querySelectorAll('#myList li');
const myList = document.querySelector('#myList');
const span = document.querySelector('span');

header1.style.backgroundColor = 'green';
myDiv[0].style.fontWeight = 'bold';
myDiv[1].style.color = 'red';
myDiv[2].style.textDecoration = 'underline';
myDiv[3].style.fontStyle = 'italic';
span.style.display = 'none';

function makeHorizontal(arr, parent) {
  let horizontalList = '';

  for (let i = 0; i < arr.length; i++) {
    horizontalList += arr[i].innerHTML;
    arr[i].remove();
  }

  parent.insertAdjacentHTML('afterbegin', `<p>  ${horizontalList}</p>`);
}

makeHorizontal(myListLi, myList);

// task 6
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');

input1.value = prompt('input1', '');
input2.value = prompt('input2', '');

const input1Clone = input1.cloneNode(false);
const input2Clone = input2.cloneNode(false);

input1.value = input2Clone.value;
input2.value = input1Clone.value;

// task 7

const body = document.querySelector('body');

body.insertAdjacentHTML(
  'afterbegin',
  `<main class="mainClass check item"> 	
<div id="myDiv">
<p>Task 7</p>
<p>First paragraph</p>           
</div>
</main>`
);

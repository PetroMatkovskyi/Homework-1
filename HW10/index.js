//task 1

$('[href ^= "https://"]').attr('target', '_blank');

// task 2

let $head = $('h2.head');

$head.css('background-color', 'green');
$head.children('.inner').css('font-size', '35px');

// task 3

let $div = $('h3').next('div');
let $h3 = $('div').prev('h3');

for (let i = 0; i < $div.length; i++) {
  $h3[i].before($div[i]);
}

// task 4
let $checkbox = $('input[type="checkbox"]');

$checkbox.on('change', () => {
  let $count = 0;
  for (let item of $checkbox) {
    if (item.checked) $count++;
  }
  if ($count === 3) $checkbox.attr('disabled', 'true');
});

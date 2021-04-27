function test() {
    alert('hello world!');
}


function getDate() {
    var date = new Date();
    // var hours = date.getHours();
    // var minutes = date.getMinutes();
    // var seconds = date.getSeconds();
    // var day = date.getDay(); // день недели 1-7
    
    // //Привожу к правильному формату.
    // if (seconds < 10) seconds = '0' + seconds;
    // if (minutes < 10) minutes = '0' + minutes;
    // if (hours < 10) hours = '0' + hours;

    document.getElementById('timedisplay').innerHTML = date.toLocaleString("ru");

    // document.getElementById('timedisplay').innerHTML =  hours + ':' + 
    //                                                     minutes + ':' + 
    //                                                     seconds;


    setInterval(getDate, 0);
}



function createCalendar(elem, year, month) {
    let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon);

    let table = "<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";

    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    // <td> ячейки календаря с датами
    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    // закрыть таблицу
    table += '</tr></table>';

    elem.innerHTML = table;
  }

function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
}


// function blink(element, time) {
//   element.style.visibility = "hidden";
//   setTimeout(function () {
//     element.style.visibility = "visible";
//   }, time);
//   setTimeout(function () {
//     blink(element, time); // recurse
//   }, time * 2);
// }

function blink() {
  setTimeout(function () {
      if (document.getElementById('blink').style.display === 'inline') {
          document.getElementById('blink').style.display = "none";
      } else {
          document.getElementById('blink').style.display = "inline";
      }
  }, 500);
}
  


addAnother = function() {
  let text = prompt('Введите новый элемент', 111);
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  var children = ul.children.length + 1
  li.setAttribute("id", "element"+children)
  li.appendChild(document.createTextNode(text));
  ul.appendChild(li)
}
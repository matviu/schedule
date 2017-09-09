/* schedule filter */

(function(){

  var prokopyk = document.querySelector('[name="prokopyk"]');
  var macukov = document.querySelector('[name="macukov"]');
  var grigoriev = document.querySelector('[name="grigoriev"]');
  var ten = document.querySelector('[name="ten"]');
  var grigiriev = document.querySelector('[name="grigiriev"]');
  var dushkin = document.querySelector('[name="dushkin"]');
  var vasiliev = document.querySelector('[name="vasiliev"]');

  var items = document.querySelectorAll('.schedule__item');

  console.log()

  ten.onclick = function() {
    var checkedCells = document.querySelectorAll('.schedule__cell--lector-ten')

    for (var j = 0; j < checkedCells.length; j++) {
      checkedCells[j].parentNode.classList.toggle('schedule__item--show')
    }
  }

  prokopyk.onclick = function() {
    var checkedCells = document.querySelectorAll('.schedule__cell--lector-prokopyk');

    for (var j = 0; j < checkedCells.length; j++) {
      checkedCells[j].parentNode.classList.toggle('schedule__item--show')
    }
  }

  macukov.onclick = function() {
    var checkedCells = document.querySelectorAll('.schedule__cell--lector-macukov');

    for (var j = 0; j < checkedCells.length; j++) {
      checkedCells[j].parentNode.classList.toggle('schedule__item--show')
    }
  }

  grigoriev.onclick = function() {
    var checkedCells = document.querySelectorAll('.schedule__cell--lector-grigoriev');

    for (var j = 0; j < checkedCells.length; j++) {
      checkedCells[j].parentNode.classList.toggle('schedule__item--show')
    }
  }

  dushkin.onclick = function() {
    var checkedCells = document.querySelectorAll('.schedule__cell--lector-dushkin');

    for (var j = 0; j < checkedCells.length; j++) {
      checkedCells[j].parentNode.classList.toggle('schedule__item--show')
    }
  }

  vasiliev.onclick = function() {
    var checkedCells = document.querySelectorAll('.schedule__cell--lector-vasiliev');

    for (var j = 0; j < checkedCells.length; j++) {
      checkedCells[j].parentNode.classList.toggle('schedule__item--show')
    }
  }



})();

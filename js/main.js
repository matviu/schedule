/* schedule filter */

(function(){

  var prokopyk = document.querySelector('.prokopyk');
  var macukov = document.querySelector('.macukov');
  var grigoriev = document.querySelector('.grigoriev');
  var ten = document.querySelector('.ten');
  var grigiriev = document.querySelector('.grigiriev');
  var dushkin = document.querySelector('.dushkin');
  var vasiliev = document.querySelector('.vasiliev');

  var items = document.querySelectorAll('.schedule__item');

  ten.onclick = function() {
    var checkedCells = document.querySelectorAll('.schedule__cell--lector-ten')

    for (var j = 0; j < checkedCells.length; j++) {
      checkedCells[j].parentNode.classList.toggle('schedule__item--show')
    }

    this.classList.toggle('disabled');
  }

  prokopyk.onclick = function() {
    var checkedCells = document.querySelectorAll('.schedule__cell--lector-prokopyk');

    for (var j = 0; j < checkedCells.length; j++) {
      checkedCells[j].parentNode.classList.toggle('schedule__item--show')
    }

    this.classList.toggle('disabled');
  }

  macukov.onclick = function() {
    var checkedCells = document.querySelectorAll('.schedule__cell--lector-macukov');

    for (var j = 0; j < checkedCells.length; j++) {
      checkedCells[j].parentNode.classList.toggle('schedule__item--show')
    }

    this.classList.toggle('disabled');
  }

  grigoriev.onclick = function() {
    var checkedCells = document.querySelectorAll('.schedule__cell--lector-grigoriev');

    for (var j = 0; j < checkedCells.length; j++) {
      checkedCells[j].parentNode.classList.toggle('schedule__item--show')
    }

    this.classList.toggle('disabled');
  }

  dushkin.onclick = function() {
    var checkedCells = document.querySelectorAll('.schedule__cell--lector-dushkin');

    for (var j = 0; j < checkedCells.length; j++) {
      checkedCells[j].parentNode.classList.toggle('schedule__item--show')
    }

    this.classList.toggle('disabled');
  }

  vasiliev.onclick = function() {
    var checkedCells = document.querySelectorAll('.schedule__cell--lector-vasiliev');

    for (var j = 0; j < checkedCells.length; j++) {
      checkedCells[j].parentNode.classList.toggle('schedule__item--show')
    }

    this.classList.toggle('disabled');
  }

})();

var _ = require('lodash');
var moment = require('moment');

var dt = function () {
  moment.locale('es');
  return {
    fechaActual: fechaActual
  }
  function fechaActual () {
    return moment().format('LTS');
  }
}

var componente = function () {

  var lodash = _;

  return {
    div: function () {
      var div = document.createElement('div');
      div.innerHTML = dt().fechaActual();
      return div
    },
    parrafo: function () {
      var p = document.createElement('p');
      p.innerHTML = lodash.join(['Gemerson', 'Henry'], ' ');
      return p;
    }
  }

}

document.body.appendChild(componente().div());
document.body.appendChild(componente().parrafo());

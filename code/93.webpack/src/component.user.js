var componentUser = function (nombre, dni) {

  var user = {
    nombre: nombre,
    dni: dni
  };

  return {
    getNombre: getNombre,
    createComponent: createComponent
  };

  function getNombre() {
    return user.nombre;
  }

  function setNombre(nombre) {
    nombre = nombre;
  }

  function createComponent() {
    var div = document.createElement('div');
    var p = document.createElement('p');
    p.append(nombre);
    div.append(p);
    return div;
  }

}

export { componentUser };

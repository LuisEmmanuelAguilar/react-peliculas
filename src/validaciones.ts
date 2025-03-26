import * as Yup from 'yup';

export default function configurarValidaciones() {
  Yup.addMethod(Yup.string, 'primeraLetraMayuscula', function () {
    return this.test(
      'primera-letra-mayuscula',
      'La primera letra debe ser mayúscula',
      function (valor) {
        if (valor && valor.length > 0) {
          return valor[0] === valor[0].toUpperCase();
        }
        return true;
      }
    );
  });
}

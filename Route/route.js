var notes = require('../Controleur/controle');
module.exports.route =function (app) {

app.route('/list')
  .post(notes.PosteList)
  .get(notes.GetList)
}
var Note = require('../Model/client.model');
var nodemailer = require('nodemailer');

// Create and Save a new Note
module.exports.PosteList = function(req,res) {
   
    var nom = req.body.nom
    var email = req.body.email
    Note.find()
        .then(note => {
            if(note.length==0) {
                id = 0;
                console.log('tafa',id);
                
            }else{
                id = parseInt(note[note.length-1].id)+1;
            }

            const insert = new Note({id:id,nom:nom,email:email});
            (!nom || !email)? console.log("manque des données"):insert.save()
                .then(()=>{
                    Note.find()
                        .then(note=>{
                            res.send(note);
                        })
                })
                .catch(e=>{
                    res.status(500).send({mes:e.mes || "erreur"})
                })
        })
        var smtpTransport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "nantaraz8746@gmail.com",
                pass: "methodnum3"
            }
        });

        var mail = {
            from: "nantaraz8746@gmail.com",
            to: "nantaraz8746@gmail.com",
            subject: "connexion ok",
            html: "leCorpsDeVotreMessageEnHTML"
        }

        smtpTransport.sendMail(mail, function(error, response){
            if(error){
                console.log("Erreur lors de l'envoie du mail!");
                console.log(error);
            }else{
                console.log("Mail envoyé avec succès!")
            }
            smtpTransport.close();
        });
    
    
    }

    module.exports.GetList = (req, res) => {
        Note.find()
            .then(note=>{
                res.send(note)
            })
            .catch (e =>{
                res.status(500).send({mes:e.mes || "erreur"})
            });
    };
    
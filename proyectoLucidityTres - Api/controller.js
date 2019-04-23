const Usuario = require('./models/user');
const Test = require('./models/respuesta');

const crypt = require('./util/crypt-util');
const Token = require("./util/token");

exports.auth = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const clientePwd = crypt.encrypt(password);
    Usuario.auth(username, clientePwd)
    .then(([usuario]) => {
    if(usuario.length === 1){
        res.status(200)
            .send({
                'user': usuario[0].id,
                'token': Token.buildToken(usuario[0].id)
            });
        } else {
        res.send(404)
            .send("Usuario o contraseña incorrecta");
    }
    })
    .catch( err => {
        res.status(500).send(`Ups, hubo un problema en nuestro servidor: ${error.message}`);
    })
}


exports.getUser = (req, res, next) => {
    Usuario.get(req.params.userID)
    .then(([usuario]) => {
        if (usuario.length === 0) {
            res.status(404).send("No existe ningún usuario con ese id");
        }
        res.status(200).send(usuario[0]);
    })
    .catch((error) => {
        res.status(500).send(`Ups, hubo un problema en nuestro servidor: ${error.message}`);
    })

} 

exports.postUser = (req, res, next) => {
    // luego chequear si es objectData o no.
    const usuario = req.body;
    const name = usuario.name; 
    const lastname = usuario.lastname; 
    const email = usuario.email;
    const password = usuario.psw;
    const edad = parseInt(usuario.edad); 
    const city = usuario.city; 
    const cryptPasswd = crypt.encrypt(password);
    const user = new Usuario (null, name, lastname, cryptPasswd, email, edad, city, 1);
    user.post()
    .then(() => {
        res.status(201).send("Usuario creado éxitosamente.");
    })
    .catch((error) => {
        res.status(500).send(`Ups, hubo un problema en nuestro servidor: ${error.message}`);
    })
}

exports.putUser = (req, res, next) => {
    const id = req.params.userID;
    const usuario = req.body;
    const name = usuario.name; 
    const lastname = usuario.lastname; 
    const edad = parseInt(usuario.edad); 
    const ciudad = usuario.city; 
    Usuario.put(id, name, lastname, edad, ciudad)
    .then(() => {
        res.status(204).send("Usuario actualizado éxitosamente.");
    })
    .catch((error) => {
        res.status(500).send(`Ups, hubo un problema en nuestro servidor: ${error.message}`);
    })

}

exports.deleteUser = (req, res, next) => {
    const id = req.params.userID;
    Usuario.delete(id)
    .then(() => {
        res.status(200).send("Usuario borrado éxitosamente.");
    })
    .catch((error) => {
        res.status(500).send(`Ups, hubo un problema en nuestro servidor: ${error.message}`);
    })
}

exports.postTest = (req, res, next) => {
    const userID = req.params.userID;
    const test = req.body;
    const res_1 = test.res_1;
    const res_2 = test.res_2;
    const res_3 = test.res_3;
    const res_4 = test.res_4;
    const res_5 = test.res_5;
    const res_6 = test.res_6;
    const res_7 = test.res_7;
    const res_8 = test.res_8;
    const res_9 = test.res_9;
    const res_10 = test.res_10;
    const res_11 = test.res_11;
    const res_12 = test.res_12;
    const res_13 = test.res_13;
    const res_14 = test.res_14;
    const res_15 = test.res_15;
    const res_16 = test.res_16;
    const res_17 = test.res_17;
    const res_18 = test.res_18;
    const res_19 = test.res_19;
    const res_20 = test.res_20;
    const testRespuesta = new Test(null, res_1, res_2, res_3, res_4, res_5, res_6, res_7, res_8, res_9, res_10, res_11, res_12, res_13, res_14, res_15, res_16, res_17, res_18, res_19, res_20, userID);  
    testRespuesta.post()  
        .then(() => {
            res.status(201).send("Respuesta de test insertada en db éxitosamente");
        })  
        .catch((error) => {
            res.status(500).send(`Ups, hubo un problema en nuestro servidor: ${error.message}`);
        })
}

exports.getTest = (req, res, next) => {
    const userID = req.params.userID;
    const testID = req.params.testID;
    Test.get(userID, testID)
    .then(([respuesta]) => {
        if (respuesta.length === 0) {
            res.status(404).send("No existe ninguna respuesta de test con ese id para ese usuario");
          }
        res.status(200).send(respuesta[0]);
 
    })
    .catch((error) => {
        res.status(500).send(`Ups, hubo un problema en nuestro servidor: ${error.message}`);
    })
}

exports.getTests = (req, res, next) => {
    const userID = req.params.userID;
    Test.getAll(userID)
    .then(([respuesta]) => {
        if (respuesta.length === 0) {
            res.status(404).send("No existe ninguna respuesta de test con ese id para ese usuario");
          }
        res.status(200).send(respuesta);
 
    })
    .catch((error) => {
        res.status(500).send(`Ups, hubo un problema en nuestro servidor: ${error.message}`);
    })
}

exports.deleteTest = (req, res, next) => {
        const userID = req.params.userID;
        const testID = req.params.testID;
        Test.delete(userID, testID)
        .then(() => {
            res.status(200).send("Test borrado éxitosamente.");
        })
        .catch((error) => {
            res.status(500).send(`Ups, hubo un problema en nuestro servidor: ${error.message}`);
        })
}



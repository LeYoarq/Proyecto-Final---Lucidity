const db = require('../config/mysql');

// crear el modelo de tests:
// 1.- Crear el constructor.
module.exports = class Respuesta {
    constructor(id, res_1, res_2, res_3, res_4, res_5, res_6, res_7, res_8, res_9, res_10, res_11, res_12, res_13, res_14, res_15, res_16, res_17, res_18, res_19, res_20, user_id) {
      this.id = id;
      this.res_1 = res_1;
      this.res_2 = res_2;
      this.res_3 = res_3;
      this.res_4 = res_4;
      this.res_5 = res_5;
      this.res_6 = res_6;
      this.res_7 = res_7;
      this.res_8 = res_8;
      this.res_9 = res_9;
      this.res_10 = res_10;
      this.res_11 = res_11;
      this.res_12 = res_12;
      this.res_13 = res_13;
      this.res_14 = res_14;
      this.res_15 = res_15;
      this.res_16 = res_16;
      this.res_17 = res_17;
      this.res_18 = res_18;
      this.res_19 = res_19;
      this.res_20 = res_20;
      this.user_id = user_id;
    }

    post() {
      return db.execute(
      'INSERT INTO respuestas (res_1, res_2, res_3, res_4, res_5, res_6, res_7, res_8, res_9, res_10, res_11, res_12, res_13, res_14, res_15, res_16, res_17, res_18, res_19, res_20, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [this.res_1, this.res_2, this.res_3, this.res_4, this.res_5, this.res_6, this.res_7, this.res_8, this.res_9, this.res_10, this.res_11, this.res_12, this.res_13, this.res_14, this.res_15, this.res_16, this.res_17, this.res_18, this.res_19, this.res_20, this.user_id]
      );
    }

    static getAll(userId) {
      return db.execute('SELECT * from respuestas WHERE user_id = ? ORDER BY id DESC', 
      [userId]);
    }

    static get(userID, testID) {
        return db.execute('SELECT * from respuestas WHERE user_id = ? AND id = ?', 
        [userID, testID]);
      }

    static delete(userID, testID) {
        return db.execute(
            'DELETE FROM respuestas WHERE user_id = ? AND id = ?',
                [
                    userID, 
                    testID
                ]
        )
    }   

}
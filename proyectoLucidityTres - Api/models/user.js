const db = require('../config/mysql');

module.exports = class User {
    constructor(id, name, lastname, password, email, edad, city, role) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.password = password;
        this.email = email;
        this.edad = edad;
        this.city = city;        
        this.role = role;
    }

    static auth(email, password) {
        return db.execute(
            'select * from user where email = ? AND password = ?',
            [email, password]
        );
    }
    
    static get(userID) {
        return db.execute(
            'select * from user where id = ?',
        [userID]
        );}


    post() {
        return db.execute(
            'INSERT INTO user (name, lastname, password, email, edad, city, role) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [this.name, 
                this.lastname,
                this.password ,
                this.email,
                this.edad,
                this.city,     
                this.role
                ]
        )
    }

    static put(id, name, lastName, edad, ciudad) {
        return db.execute(
            'UPDATE user SET name = ?, lastname = ?, edad= ?, city= ? WHERE id = ?',
                [
                    name,
                    lastName,
                    edad,
                    ciudad,
                    id
                ]
        )

    }

    static delete(id) {
        return db.execute(
            'DELETE FROM user WHERE id = ?',
                [
                    id
                ]
        )
    }   
}
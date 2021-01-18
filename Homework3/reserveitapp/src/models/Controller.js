const User = require('C:/Users/Stefanija/Desktop/ReserveIT/Homework3/reserveitapp/DB/UserDB')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 8, function(err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }

        let user = new User({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            email: req.body.email,
            MobilePhone: req.body.MobilePhone,
            password: hashedPass

        })
        user.save()
            .then(user => {
                res.json({
                    message: 'your registration was successful'
                })
            })
            .catch(error => {
                res.json({
                    message: 'An error occured'
                })
            })
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({ $or: [{ email: username }, { MobilePhone: username }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function(err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ FirstName: user.FirstName }, { LastName: user.LastName }, 'BqW,2(D)*', { expiresIn: '1h' })
                        res.json({
                            message: 'Login Successful',
                            token

                        })

                    } else {
                        res.json({

                            message: 'Wrong password!'
                        })
                    }
                })
            } else {
                res.json({
                    message: 'No user found'
                })
            }
        })
}






module.exports = {
    register,
    login
}
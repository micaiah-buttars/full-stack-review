const bcrypt = require('bcryptjs')


module.exports = {
    register: async (req, res) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        const accountArr = await db.find_acc_by_email([email])
        if(accountArr[0]){
            return res.status(200).send({message: 'Email already in use.'})
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        let newAccArr = await db.create_acc([email, hash])
        req.session.user = newAccArr[0]
        res.status(200).send({
            message: 'Logged in',
            userData: req.session.user,
            loggedIn: true
        })
    }

}
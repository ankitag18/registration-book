const UserModel = require('./model');

module.exports = function (app) {

    app.get('/', (req, res) => {
        UserModel.findAll().then((users) => {
            users.every(user => user instanceof UserModel);
            res.status = 200;
            res.render('user', { users });
        }).catch((err) => {
            res.status = 500;
            res.json(err.message);
        });
    });

    app.get('/createUser', (req, res) => {
        res.render('add_user');
    });

    app.post('/createUser', (req, res) => {
        const name = req.body.name;
        const mobile_no = req.body.mobile_no;
        const email = req.body.email;
        const location = req.body.location;

        UserModel.sync().then((result) => {

            UserModel.create({ name, mobile_no, email, location }).then((result) => {
                res.status = 200;
                res.redirect('/');
                // res.json(result.dataValues);
            }).catch((err) => {
                res.status = 500;
                res.json(err.message);
            })

        }).catch((err) => {
            res.status = 500;
            res.json(err.message);
        })
    });

    app.get('/userDetails/:field', (req, res) => {
        const field = req.params.field;

        UserModel.findAll().then((users) => {
            users.every(user => user instanceof UserModel);
            const userData = users.map(function (item) {
                return item[field];
            });

            res.status = 200;
            res.json(userData);
        }).catch((err) => {
            res.status = 500;
            res.json(err.message);
        });
    });

}
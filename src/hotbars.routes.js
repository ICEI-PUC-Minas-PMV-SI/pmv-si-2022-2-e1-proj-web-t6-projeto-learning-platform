const userRoutes = (router, config) => {
    console.log("HELL YEAHHHHH!");

    router.post(`/login`, (req, res) => {
        // login
        res.json({ ...req.body, message: "Faltou logar!" });
    });

    router
        .route("/crud-route")
        .get((req, res) => {
            res.send("/crud-route get Works!");
        })
        .post((req, res) => {
            res.send("/crud-route post Works!");
        })
        .patch((req, res) => {
            res.send("/crud-route patch Works!");
        })
        .delete((req, res) => {
            res.send("/crud-route delete Works!");
        });
};

module.exports = userRoutes;

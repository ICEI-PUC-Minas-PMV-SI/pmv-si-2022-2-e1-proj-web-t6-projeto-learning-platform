const userRoutes = (app, router, config) => {
    // console.log("HELL YEAHHHHH! LOADING MY ROUTES");

    app.get("/test/custom", function (req, res) {
        res.send("hello world");
    });
};

module.exports = userRoutes;

const userRoutes = (app, createRouter, config) => {
    // console.log("HELL YEAHHHHH! LOADING MY ROUTES");

    const studyPlanRouter = createRouter();

    studyPlanRouter
        .get(`/estudos/:planId/topic/:topicId`, (req, res) => {
            
        })
};

module.exports = userRoutes;

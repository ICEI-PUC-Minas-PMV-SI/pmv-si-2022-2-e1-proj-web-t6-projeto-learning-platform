const { ControllerAbstract } = require("@jmilanes/hotbars");

class PlanController extends ControllerAbstract {
    async handle(req, res) {
        return Promise.resolve({});
    }
}

exports.controller = PlanController;

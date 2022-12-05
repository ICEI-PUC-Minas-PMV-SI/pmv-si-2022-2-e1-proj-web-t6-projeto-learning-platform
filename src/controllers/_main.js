const { ControllerAbstract } = require("@jmilanes/hotbars");
class MainController extends ControllerAbstract {
    async loadAreas() {
        const { error, data } = await this.get("/_api/areas");

        if (!error) {
            return data.items || [];
        }

        return [];
    }

    async loadTech(slug) {
        const { error, data } = await this.get("/_api/technologies", { slug });

        if (!error) {
            return (data.items || [])[0];
        }

        return null;
    }
    async handle(req) {
        const data = {};
        data.areas = await this.loadAreas();

        if (req.query.area) {
            data.area = data.areas.find((area) => area.slug === req.query.area);
        }

        if (req.query.tech) {
            data.tech = await this.loadTech(req.query.tech);
        }

        return data;
    }
}

exports.controller = MainController;

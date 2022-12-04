const { ControllerAbstract } = require("@jmilanes/hotbars");

class NewTrackTechController extends ControllerAbstract {
    async loadArea(slug) {
        const { error, data } = await this.get(`/_api/areas`, { slug });

        if (!error) {
            return (data.items || [])[0];
        }

        return null;
    }

    async handle(req) {
        const area = await this.loadArea(req.query.area);

        if (area) {
            const { error, data } = await this.get("/_api/tracks", { area: area.id });

            if (!error) {
                return { tracks: data.items };
            }
        }

        return { tracks: [] };
    }
}

exports.controller = NewTrackTechController;

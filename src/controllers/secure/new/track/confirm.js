const { ControllerAbstract, DataManager } = require("@jmilanes/hotbars");

class NewTrackConfirmController extends ControllerAbstract {
    async loadArea(id) {
        const { error, data } = await this.get(`/_api/areas/${id}`);

        if (!error) {
            return data;
        }

        return null;
    }

    async handle(req) {
        const db = DataManager.get("jsonDb");
        const track = await db.from("tracks").eq("slug", req.body.tech).single();

        const newTrack = await db.from("user-tracks").insert({
            title: track.title,
            startDate: new Date().toISOString(),
            length: req.body.time.split(",").map((t) => parseInt(t, 10)),
            areaId: track.areaId,
            trackId: track.id,
            userId: req.user.id,
        });

        const area = await this.loadArea(track.areaId);

        return {
            area,
            userTrack: { ...newTrack, ...req.body },
        };
    }
}

exports.controller = NewTrackConfirmController;

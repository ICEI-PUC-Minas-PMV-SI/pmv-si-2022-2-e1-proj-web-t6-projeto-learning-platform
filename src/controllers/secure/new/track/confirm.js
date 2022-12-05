const { ControllerAbstract, DataManager } = require("@jmilanes/hotbars");

class NewTrackConfirmController extends ControllerAbstract {
    async handle(req) {
        const db = DataManager.get("jsonDb");
        const track = await db.from("tracks").eq("slug", req.body.tech).single();

        console.log(track);

        const newTrack = await db.from("user-tracks").insert({
            title: track.title,
            startDate: new Date().toISOString(),
            length: req.body.time.split(",").map((t) => parseInt(t, 10)),
            trackId: track.id,
            userId: req.user.id,
        });

        console.log({ ...newTrack, ...req.body });

        return {
            newTrack: { ...newTrack, ...req.body },
        };
    }
}

exports.controller = NewTrackConfirmController;

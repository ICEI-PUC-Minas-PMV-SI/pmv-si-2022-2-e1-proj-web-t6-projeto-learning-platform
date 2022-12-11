const { ControllerAbstract, DataManager } = require("@jmilanes/hotbars");

class ProfileController extends ControllerAbstract {
    async loadAreas() {
        const { error, data } = await this.get("/_api/areas");

        if (!error) {
            return data.items || [];
        }

        return [];
    }

    async loadTracks(userId) {
        const { error, data } = await this.get("/_api/user-tracks", { _expand: "track", userId });

        if (!error) {
            return data.items || [];
        }

        return null;
    }

    async loadTopics(trackId) {
        const { error, data } = await this.get(`/_api/topics`, {});

        if (!error) {
            return data.items || [];
        }

        return null;
    }

    async loadNotes(userId) {
        const { error, data } = await this.get(`/_api/notes`, { userId });

        if (!error) {
            return data.items || [];
        }

        return [];
    }

    async handle(req) {
        const data = {};

        data.tracks = await this.loadTracks(req.user.id);
        data.areas = await this.loadAreas();
        data.notes = await this.loadNotes(req.user.id);

        const topics = await this.loadTopics(data.tracks.trackId);

        data.tracks = data.tracks.reduce((list, userTrack) => {
            if (userTrack.track) {
                const { track } = userTrack;

                delete userTrack.track;
                delete track.id;

                if (track.areaId) {
                    track.area = data.areas.find((area) => area.id === track.areaId);
                }

                track.topics = topics.filter((item) => {
                    return (
                        Array.isArray(item.trackId) && item.trackId.indexOf(userTrack.trackId) > -1
                    );
                }).length;

                return [
                    ...list,
                    {
                        ...userTrack,
                        ...track,
                    },
                ];
            }

            return [...list, userTrack];
        }, []);

        return data;
    }
}

exports.controller = ProfileController;

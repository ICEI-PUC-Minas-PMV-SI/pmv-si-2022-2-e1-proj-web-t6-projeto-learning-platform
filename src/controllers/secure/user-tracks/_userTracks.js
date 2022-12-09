const { ControllerAbstract } = require("@jmilanes/hotbars");

class UserTracksController extends ControllerAbstract {
    async loadUserTrack(id) {
        const { error, data } = await this.get(`/_api/user-tracks/${id}`, {});

        if (!error) {
            return data;
        }

        return null;
    }

    async loadTrack(id) {
        const { error, data } = await this.get(`/_api/tracks/${id}?_expand=area`, {});

        if (!error) {
            return data;
        }

        return null;
    }

    async loadTopic(topicId) {
        const { error, data } = await this.get(`/_api/topics/${topicId}`, {});

        if (!error) {
            return data;
        }

        return null;
    }

    async loadTopics(trackId) {
        const { error, data } = await this.get(`/_api/topics`, {});

        if (!error) {
            return data.items.filter((item) => {
                return Array.isArray(item.trackId) && item.trackId.indexOf(trackId) > -1;
            });
        }

        return null;
    }

    async loadLessons(topicId) {
        const { error, data } = await this.get(`/_api/lessons`, { topicId });

        if (!error) {
            return data.items || [];
        }

        return [];
    }

    async loadLesson(lessonId) {
        const { error, data } = await this.get(`/_api/lessons/${lessonId}`, {});

        if (!error) {
            return data;
        }

        return null;
    }

    async handle(req, res) {
        const { trackId, topicId, lessonId } = req.params;
        const data = {};

        data.userTrack = await this.loadUserTrack(trackId);

        if (data.userTrack) {
            data.track = await this.loadTrack(data.userTrack.trackId);
            data.area = data.track.area;
            console.log("AREA", data.area);
            data.tech = data.track.technology;
            data.topics = await this.loadTopics(data.track.id);
        }

        if (topicId) {
            data.topic = await this.loadTopic(topicId);
            data.lessons = await this.loadLessons(topicId);
        }

        if (lessonId) {
            data.lesson = await this.loadLesson(lessonId);
        }

        return data;
    }
}

module.exports = UserTracksController;

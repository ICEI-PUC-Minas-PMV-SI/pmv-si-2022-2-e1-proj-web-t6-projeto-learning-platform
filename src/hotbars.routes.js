const { DataManager } = require("@jmilanes/hotbars");

const userRoutes = (router, config) => {
    const db = DataManager.get("jsonDb");

    /**
     * Marca topicos e lissões com completas.
     */
    router.post("/tracks/complete/:trackId/:topicId/:lessonId", async (req, res) => {
        const { trackId, topicId, lessonId } = req.params;

        if (lessonId) {
            await db.from("lessons").update(lessonId, { complete: true });

            const lessons = await db.from("lessons").eq("topicId", topicId).all();

            if (lessons.length) {
                if (lessons.every((lesson) => lesson.complete)) {
                    await db.from("topics").update(topicId, { complete: true });
                }
            }
        }

        res.redirect(["", "user-tracks", trackId, "topic", topicId].join("/"));
    });
};

module.exports = userRoutes;

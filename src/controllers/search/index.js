const { ControllerAbstract } = require("@jmilanes/hotbars");

class SearchController extends ControllerAbstract {
    async loadTechnologies(areaId) {
        const query = { _expand: "area" }
        
        if (areaId) query.areaId = areaId;
        
        const { error, data } = await this.get("/_api/technologies", query);

        if (!error) {
            return data.items || [];
        }

        return [];
    }

    async loadArea(slug) {
        const { error, data } = await this.get("/_api/areas", { slug });

        if (!error) {
            return (data.items || [])[0];
        }

        return {};
    }

    async loadVideos(areaId, playlistId, type) {
        const query = { _limit: 20 };

        if (areaId) query.areaId = areaId;
        
        if (playlistId) query.playlistId = playlistId;
        
        if (type && type !== "playlists") query.type = type;

        const { error, data } = await this.get("/_api/videos", query);

        if (!error) {
            return data.items || [];
        }

        return [];
    }

    async loadPlaylists(areaId) {
        const query = {
            _expand: "area"
        }
        
        if (areaId) {
            query.areaId = areaId;
        }
        
        const { error, data } = await this.get("/_api/playlists", query);

        if (!error) {
            return data.items || [];
        }

        return [];
    }

    async handle(req) {
        const { area, playlist, type } = req.query;
        const data = { area: null, videos: [] };
        
        if (area) {
            data.area = await this.loadArea(req.query.area);
        }

        data.technologies = await this.loadTechnologies(data.area?.id);

        data.playlists = await this.loadPlaylists(data.area?.id);
        
        if (type !== "playlists") {
            data.videos = await this.loadVideos(area ? data.area?.id : null, playlist, type);    
        } else {
            for (let i = 0; i < data.playlists.length; i++) {
                data.playlists[i].videos = await this.loadVideos(
                    null, data.playlists[i].id, null
                )   
            }
        }
        
        return data;
    }
}

exports.controller = SearchController;

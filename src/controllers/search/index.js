const { ControllerAbstract } = require("@jmilanes/hotbars");

class SearchController extends ControllerAbstract {
    async loadTechnologies(areaId) {
        const { error, data } = await this.get(`/_api/technologies${areaId ? `?areaId=${areaId}` : ""}`);

        if (!error) {
            return data.items || [];
        }

        return [];
    }
    
    async loadVideos() {
        const { error, data } = await this.get("/_api/videos", {_limit: 20 });

        if (!error) {
            return data.items || [];
        }

        return [];
    }
    
    async loadArea(areaSlug) {
        const { error, data } = await this.get("/_api/areas", { slug: areaSlug });

        if (!error) {
            return (data.items || [])[0];
        }

        return {};
    }

    async loadLanguages() {
        const { error, data } = await this.get("/_api/programingLanguages");

        if (!error) {
            return data.items || [];
        }

        return [];
    }

    async loadSass() {
        const { error, data } = await this.get("/_api/sass");

        if (!error) {
            return data.items || [];
        }

        return [];
    }
    
    async handle(req) {
        const data = {}
 
        if (req.query.area) {
            data.area = await this.loadArea(req.query.area);
            data.technologies = await this.loadTechnologies(data.area.id);
        } else {
            data.technologies = await this.loadTechnologies();
        }

        data.sass = await this.loadSass();
        data.languages = await this.loadLanguages();
        data.videos = await this.loadVideos();
        data.menu = [...data.technologies, ...data.languages]
        
        return data;
    }
}

exports.controller = SearchController;

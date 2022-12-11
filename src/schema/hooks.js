


module.exports.afterSchema = (records, schemaConfig, props) => {
    if (schemaConfig.name === "videos") {
        return records.map((record, i) => {
            if (i % 3 === 0) {
                return record;
            }

            record.playlistId = "";
            
            return record;
        })
    }
    
    return records;
}

module.exports.afterAll = (data, schemas, props) => {
    const { videos, playlists } = data;

    videos.forEach((video) => {
        if (video.playlistId) {
            const playlist = playlists.find(p => p.id === video.playlistId);
            
            video.areaId = playlist.areaId;
        }
    })
    
    return data;
}

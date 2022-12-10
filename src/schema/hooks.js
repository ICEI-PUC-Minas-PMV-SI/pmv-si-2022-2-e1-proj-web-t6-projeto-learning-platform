


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

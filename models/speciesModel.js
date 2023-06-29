import mongoose from "mongoose";

const Schema = mongoose.Schema;

const speciesSchema = new Schema ({
    fields : {
        edited: {type : Date},
        classification : {type :String},
        name : {type :String},
        designation : {type :String},
        created : {type :Date},
        eye_colors : {type :String},
        people : {type :Array},
        skin_colors : {type :String},
        language : {type :String},
        hair_colors : {type :String},
        homeworld : {type :Number},
        average_lifespan : {type :Number},
        average_height : {type :Number},
    },
    model : {type :String},
    pk : {type :Number}

  });

speciesSchema.virtual("url").get(function () {
return `/species/${this._id}`;
});

export default mongoose.model("Species", speciesSchema);

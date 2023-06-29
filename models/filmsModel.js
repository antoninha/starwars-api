import mongoose from "mongoose";

const Schema = mongoose.Schema;

const filmsSchema = new Schema ({
    fields: {
        starship: {type : Array},
        edited : {type : Date},
        vehicles : {type : Array},
        planets : {type : Array},
        producer : {type :String},
        title : {type : String},
        created : {type : Date},
        episode_id : {type : Number},
        director : {type : String},
        release_date : {type : Date},
        opening_crawl : {type : String},
        characters : {type : Array},
        species : {type : Array},
        model : {type : String}
    },
    model : {type : String},
    pk : {type : Number}

  });

filmsSchema.virtual("url").get(function () {
return `/films/${this._id}`;
});

export default mongoose.model("Films", filmsSchema);


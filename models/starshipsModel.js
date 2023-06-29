import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StarshipsSchema = new Schema ({
    fields : {
        pilots: {type : Array},
        MGLT : {type :Number},
        starship_class : {type :String},
        hyperdrive_rating : {type :String},
    },
    model : {type :String},
    pk : {type :Number}

  });

StarshipsSchema.virtual("url").get(function () {
return `/starships/${this._id}`;
});

export default mongoose.model('Starships', StarshipsSchema);
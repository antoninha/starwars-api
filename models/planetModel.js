import mongoose from "mongoose";

const Schema = mongoose.Schema;

const planetSchema = new Schema ({
    fields : {
        name: {type :String},
        rotation_period : {type :Number},
        orbital_period : {type :Number},
        diameter : {type : String},
        climate : {type : String},
        gravity : {type : String},
        terrain : {type : String},
        surface_water : {type : String},
        population : {type : Number},
        residents : {type : Array},
        films : {type : Array},
        created : {type : Date},
        edited : {type : Date},
    },
    model : {type : String},
    pk : {type : Number}

  });

planetSchema.virtual("url").get(function () {
return `/planet/${this._id}`;
});

export default mongoose.model("Planet", planetSchema);

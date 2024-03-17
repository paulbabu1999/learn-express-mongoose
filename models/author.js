var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, maxLength: 100},
    family_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

// Virtual for author's full name
AuthorSchema.virtual('lifespan').get(function() {
  let yearOfBirth = new Date(this.date_of_birth).getFullYear();
  let yearOfDeath = new Date(this.date_of_death).getFullYear();
  return yearOfBirth + "—" + yearOfDeath;
});
// Virtual for author's lifespan
AuthorSchema.virtual('lifespan').get(function() {});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);

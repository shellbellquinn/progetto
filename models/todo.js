// Add a flag for the text attribute to prevent this field from being null

// Add a validation for the text attribute to make sure it's at least one character,
// but no more than 140 characters

// Add a flag for complete so that it's false by default if not given a value

module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    text: { type: DataTypes.STRING, 
      allowNull: false,
      unique: true,                  
      validate: {
        max: 23,
          len: {
              args: 3,
              msg: "Name must be at least 3 characters in length"
          }},
    },
    complete: { type: DataTypes.BOOLEAN

    }
  });
  return Todo;

};


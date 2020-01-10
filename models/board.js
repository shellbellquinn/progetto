module.exports = (sequelize, DataTypes)=>{
	const Board = sequelize.define('Board', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 50]
			}
		} 
	});

	Board.associate = models=>{
		Board.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		})
	}

	Board.associate = models=>{
		Board.hasMany(models.List, {
			onDelete: 'cascade'
		});
	};


	return Board;
}
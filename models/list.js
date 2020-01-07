module.exports = (sequelize, DataTypes)=>{
	let List = sequelize.define('List', {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 50]
			}
		}
	});

	List.associate = models=>{
		List.belongsTo(models.Board, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	List.associate = models=>{
		List.hasMany(models.Task, {
			onDelete: 'cascade'
		});
	};
	return List;
}
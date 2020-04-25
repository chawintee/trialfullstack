module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('task', {
        task: {
            type: DataTypes.STRING
        },
        post_code : {
            type: DataTypes.INTEGER
        },
        profile_picture : {
            type: DataTypes.STRING
        },
        edit_status : {
            type: DataTypes.BOOLEAN
        }

    })

    return Task;
}
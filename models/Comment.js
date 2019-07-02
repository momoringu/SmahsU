const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        content: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: 'user',
            referencesKey:'id',
            allowNull: false
        },
        post_id: {
            type: Sequelize.INTEGER,
            references: 'post',
            referencesKey:'id',
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)
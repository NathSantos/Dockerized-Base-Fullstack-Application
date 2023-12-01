'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      common_name: {
        type: Sequelize.STRING,
      },
      scientific_name: {
        type: Sequelize.STRING,
      },
      life_expectancy: {
        type: Sequelize.INTEGER,
      },
      habitat: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Animals');
  },
};

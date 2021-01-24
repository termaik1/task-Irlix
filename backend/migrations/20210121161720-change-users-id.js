'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.describeTable('users').then(async attributes => {
      if (!attributes.id) {
        await queryInterface.changeColumn('users', 'id', {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        });
      }
      return queryInterface;
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("users");
  }
};

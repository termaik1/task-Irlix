'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.describeTable('users').then(async attributes => {
      if ( !attributes.adminAccessKey ) {
        return await queryInterface.addColumn('users', 'amountMoney', {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          allowNull: false,
        });
      }

      return queryInterface;
    });
  },

  down: (queryInterface) => {
    return queryInterface.describeTable('users').then(async attributes => {
      if (attributes.adminAccessKey) {
        return await queryInterface.removeColumn('users', 'amountMoney');
      }

      return queryInterface;
    });
  }
};

# 1) Описание

### frontend
    * 1) React
    * 2) Redux(Saga)
    * 3) Webpack
    * 4) Antd
    * 5) yarn

### backend
    * 1) FeathersJS
    * 2) PostgreSQL
    * 3) Sequelize
    * 4) Docker
    * 5) npm

# 2) Требования

### frontend
    * 1) Версия NodeJS 14

### backend
    * 1) Версия NodeJS 11
    * 2) Наличие docker и docker-compose
    * 3) Наличие Sequelize

# 3) Запуск

### frontend
    Запустить команду:
    * yarn run start
    
    Перейти на адрес:
    http://localhost:4200

### backend
    Запустить команду для сборки:
    * docker-compose build --pull

    После сборки запустить:
    * docker-compose up -d
    * npm install

    Для того чтобы были тестовые данные необходимо запустить:
    * sequelize db:seed


# 4) Доп опции

    Создание миграции:
    ### sequelize migration:create --name="meaningful-name"

    Применение миграци:
    ### sequelize db:migrate

    Создание seeders:
    ### sequelize seed:generate --name meaningful-name

    Применение seeders:
    ### sequelize db:seed

# 5) Данные для входа

    email:
    * test1@mail.ru
    password:
    * 12345

    email:
    * test2@mail.ru
    password:
    * 12345

    email:
    * test3@mail.ru
    password:
    * 12345

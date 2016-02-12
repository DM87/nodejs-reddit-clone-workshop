var Sequelize = require("sequelize");

var db = new Sequelize('redditproject', 'dm87', '',{dialect:'mysql'});

var User = db.define('user',{
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

var Content = db.define('content',{
    title: Sequelize.STRING,
    url: Sequelize.STRING,
});

var Vote = db.define('vote',{
    upVote: Sequelize.BOOLEAN
});

Content.belongsTo(User);
User.hasMany(Content);

User.belongsToMany(Content, {throught: Vote, as: 'Upvotes'});
Content.belongsToMany(User, {through: Vote});

db.sync();
const usersRoute = require('express').Router();
const userRoute = require('./user.routes');

usersRoute.use('/user', userRoute);

module.exports = usersRoute;
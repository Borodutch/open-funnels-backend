export default () => ({
  port: parseInt(process.env.PORT, 10),
  mongo: {
    uri: process.env.MONGO_URI,
  },
  admin: {
    login: process.env.ADMIN_LOGIN,
    password: '' + process.env.ADMIN_PASSWORD,
  },
  jwt: {
    secret: '' + process.env.JWT_SECRET,
  },
});

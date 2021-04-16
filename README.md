<h1 align="center">Open funnels backend</h1>
<p align="center">
<img src="https://raw.githubusercontent.com/backmeupplz/open-funnels-backend/main/img/logo.png" />
</p>

## Installation

```bash
$ yarn install
```
You always able to use `npm run` instead of `yarn`.

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn build
$ yarn start:prod
```

## Generate documentation
If you changed something in the source code of the backend, you may want to update documentation.

```bash
$ yarn doc
```

## Environment variables

| Name                                     | Description                                 |
| ---------------------------------------- | ------------------------------------------- |
| `PORT`                                   | Port, where backend will be hosted          |
| `JWT_SECRET`                             | Secret key for JWT                          |
| `ADMIN_LOGIN` and `ADMIN_PASSWORD`       | Admin user login and password               |
| `MONGO_URI`                              | MongoDB URI                                 |

You can always look at `.env.sample`.

## License

This project is [MIT licensed](LICENSE).

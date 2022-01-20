# Next.js Portfolio Template

_Estimated reading time: 3 minutes_

Multi-themed portfolio that will greatly increase your chances of getting attention from recruiters.

## Features

- 🎁 Modern stack – Template created using the latest features of React and Next.js
- 🏷 TypeScript support – Project is written in TypeScript to improve the DX
- 🚀 Fast – Buttery smooth experience thanks to the implementation of best practices and dynamic rendering, resulting in PERFECT Google Lighthouse scores
- 💻 Responsive – Highly responsive and reusable UI components
- 🤖 Animated - You'll find page transitions, progress bars and suttle but smooth animations across the project

## Prerequisities

You’ll need to have Node 10.16.0 or later version on your local development machine (but it’s not required on the server). I recommend using the latest LTS version.

## Step 1: Setup

Install the dependancies for this project.

```sh
cd portfolio
yarn install
```

Start a Node development server.

```sh
yarn dev
```

The application will open in your browser at http://localhost:3000

## Step 2: Create an .env file

In this step, you will have to create an `.env` file at the root of the directory, so that you can provide your environment variables.

### Variables

The environment variables you define here are used for Spotify's API. GitHub and Medium are open access so you don't have to worry about providing those values.

- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_REFRESH_TOKEN`

In order to learn more about spotify integration and how to generate these values, please head over to [Spotify dashboard] and create a new app.

## Step 3: Changing GitHub and Medium URL

Although, you don't have to provide environment variables for these two, you still will need to change their url so that they can point to your account.

You can make these changes inside the `pages/api` folder.

## Credits

Credits to [Lee Rob] and his [personal portfolio], for inspiring me to create this project.

## Contact

If you have any issues setting up this portfolio project, please reach out to me on my [twitter].

[spotify dashboard]: https://developer.spotify.com/dashboard/
[lee rob]: https://twitter.com/leeerob
[personal portfolio]: https://leerob.io/
[twitter]: https://twitter.com/adrinlolx

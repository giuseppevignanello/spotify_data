# Spotify Top Data Viewer

This is a small web application that allows you to explore your Spotify top tracks and top artists. The app is designed to be lightweight and simple, **without using any frameworks**, to keep the logic transparent and easy to understand.  

> ⚠️ Note: The HTML is currently rendered directly in JS templates. I’m aware this is not ideal, and I plan to improve this by introducing a **mini JS framework** I’m developing. CSS is already separated into individual files for easier maintenance.

## Features

- View your **top tracks** and **top artists**.
- Clickable elements that open Spotify directly.
- Shows album or artist images, names, and relevant info.
- Filters for **time ranges** and **number of items**.
- Fully modular JS components (e.g., `TokenForm`, `TokenInfo`, `FilterPanel`, `TopList`) for easier maintainability.
- Accordion help guide on how to obtain a Spotify token.

## Upcoming Features

- Access more data than just top tracks and artists.
- Integrate **Spotify login** so users don’t need to manually enter a token.

## Security

Your Spotify token is **not saved anywhere**. Neither the app nor the browser stores your token. The app only uses it temporarily to fetch your data from Spotify’s API.

## How to Use

1. Open the app in your browser.
2. Enter a valid Spotify OAuth token with the `user-top-read` scope.
3. Choose your filters (type, time range, limit).
4. Click **Search** to fetch and display your top tracks or artists.

> Tip: You can get a token via the [Spotify API Console](https://developer.spotify.com/console/get-users-top-artists-and-tracks).

## Tech Stack

- Vanilla **JavaScript** (no frameworks)
- **HTML** rendered from JS templates (temporary, will improve with mini framework)
- **CSS** separated into dedicated files
- Modular JS components for easy expansion and maintainability

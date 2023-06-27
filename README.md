# Weather App with Node API Proxy Server

This repository contains a weather app built with Node.js that utilizes a proxy server to interact with the OpenWeather API. The app allows users to retrieve weather information for a specific location by making requests to the proxy server.

## Prerequisites

Before running the weather app, ensure that you have the following prerequisites installed on your machine:

- Node.js (v14 or above)
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine or download and extract the ZIP file.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to install the required dependencies:

   ```
   npm install
   ```

## Configuration

To use the OpenWeather API, you need to obtain an API key. Follow the steps below to configure the app with your API key:

1. Visit the [OpenWeather API website](https://openweathermap.org/) and create an account (if you don't have one).
2. Once logged in, navigate to the **API Keys** section and generate a new API key.
3. Copy the API key and create a new file in the project root directory named `.env`.
4. Inside the `.env` file, add the following line:

   ```
   API_KEY=YOUR_API_KEY_HERE
   ```

   Replace `YOUR_API_KEY_HERE` with your actual API key.

## Usage

1. Start the proxy server by running the following command in your terminal:

   ```
   npm run server
   ```

   The server will start running on `http://localhost:3000`.


4. In the weather app, enter the location you want to retrieve weather information and click the **Search** button.

   The app will make a request to the proxy server, which will then forward the request to the OpenWeather API and return the weather data to the web page.

5. The weather information will be displayed on the web page interface.

## Credits

The Weather App with Node API Proxy Server is built with the help of the following technologies and libraries:

- Node.js: https://nodejs.org/
- Express: https://expressjs.com/
- OpenWeather API: https://openweathermap.org/

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and use the code for personal or commercial purposes.

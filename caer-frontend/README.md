# CAER App Frontend

The CAER (Creative Anticipatory Ethical Reasoning) Process was developed by the STS Futures Lab in the ISAT Department at James Madison University. The CAER App is a web/mobile app designed to facilitate the CAER Process.

## How To Set Up a Dev Environment

If you would like to contribute to CAER App development, here's how you can get the API up and running locally. To get the front end running locally, **you'll first have to [install and set up the back end API](https://github.com/sts-futures/caer-api)**.

1. Install necessary software (if not already installed when you set up the back end):
    1. [NodeJS](https://nodejs.org/) Please install the v10.x LTS version.
    2. [Git](https://git-scm.com/)
    3. [`mkcert`](https://github.com/FiloSottile/mkcert)
    4. [VSCode](https://code.visualstudio.com/)
2. Clone this repo to your local `dev` folder and install NPM dependencies:

    ```sh
    cd ~/dev
    git clone https://github.com/sts-futures/caer-frontend.git
    cd caer-frontend
    npm install
    ```

3. Edit your `hosts` file ([here's a tutorial](https://www.howtogeek.com/howto/27350/beginner-geek-how-to-edit-your-hosts-file/)) so you can use a "real" domain name on your dev server. Add the entry `127.0.0.1 caerfutures.test`
4. Install a local SSL certificate in the root `caer-frontend` directory (command with example output)

    ```sh
    $ mkcert caerfutures.test
    Using the local CA at "/Users/yourusername/Library/Application Support/mkcert" ✨

    Created a new certificate valid for the following names 📜
    - "caerfutures.test"

    The certificate is at "./caerfutures.test.pem" and the key at "./caerfutures.test-key.pem" ✅
    ```

5. Run `npm install` from the root of the project in your terminal to install all of the dependencies.
6. Start up the API from a **different** window/tab in your terminal with the command `npm run dev`
7. Start up the front end server by running `npm run serve` from the terminal.

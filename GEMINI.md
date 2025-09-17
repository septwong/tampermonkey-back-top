# Project Overview

This project is a Tampermonkey user script that provides a "Back to Top" button on web pages. The button appears when the user scrolls down and allows for a smooth scroll back to the top of the page.

The script is written in plain JavaScript and is self-contained within `back-top.user.js`. It uses Tampermonkey's APIs (`GM_getValue`, `GM_setValue`, `GM_registerMenuCommand`) to manage a list of websites where the script is active. By default, it is enabled for `github.com`.

## Key Files

-   `back-top.user.js`: The main and only source file containing the user script logic.
-   `README.md`: A brief description of the project.
-   `LICENSE`: The project's license file.

# Building and Running

This is a user script and does not have a build process. To use it, you need to have the [Tampermonkey](https://www.tampermonkey.net/) browser extension installed.

To install the script:

1.  Open the `back-top.user.js` file in your browser.
2.  Tampermonkey will automatically detect the user script and prompt you to install it.
3.  Click "Install" to add it to your Tampermonkey scripts.

The script will be active on the websites listed in the `enabledSites` array within the script, which is `github.com` by default. You can add or remove sites by interacting with the Tampermonkey menu on a given page.

# Development Conventions

-   The code is written in strict mode (`'use strict';`).
-   The entire script is wrapped in an Immediately Invoked Function Expression (IIFE) to avoid polluting the global scope.
-   Styling for the "Back to Top" button is applied directly via JavaScript by manipulating the `style` properties of the DOM element.
-   The script uses Tampermonkey's `GM_` functions for persistent storage and to add commands to the Tampermonkey menu.

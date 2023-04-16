# Expand Comments and Replies Bookmarklet

## Description

This bookmarklet is designed to automatically expand comments and replies on a webpage and scroll to the bottom of the page. It can be particularly helpful for quickly viewing nested comments or replies on social media platforms or discussion forums. Additionally, the bookmarklet can be paused, resumed, or stopped using keyboard shortcuts.

## How to Use

1. Create a new bookmark in your browser.
2. Name the bookmark (e.g., "Expand Comments and Replies").
3. In the URL field of the bookmark, paste the provided JavaScript code.
4. Save the bookmark.
5. When you want to use the bookmarklet, navigate to a webpage with comments or replies you'd like to expand.
6. Click on the "Expand Comments and Replies" bookmark in your browser.
7. Press 'p' to pause, 'r' to resume, and 's' to stop the bookmarklet.

## How it Works

The bookmarklet performs the following steps:

1. It creates a function (`expandCommentsAndReplies`) that finds and clicks on elements with specific `aria-label` attributes (i.e., "View more comments", "View more replies", and "See hidden replies").
2. It creates another function (`scrollToBottom`) that scrolls the browser window to the bottom of the page.
3. It defines the main function (`autoExpandAndScroll`), which calls the two previously defined functions. If the process is not stopped or paused, it will wait for 1 second (1000 milliseconds) and call itself recursively to perform the action again.
4. It creates a function (`handleKeyPress`) that listens for keypress events and handles pause, resume, and stop functionality using the 'p', 'r', and 's' keys.
5. It adds an event listener to the window to listen for keypress events and call the `handleKeyPress` function.
6. It calls the `autoExpandAndScroll` function to begin the process.

## Preventing Auto Reload

The bookmarklet also attempts to prevent the webpage from automatically reloading. It does this by adding an `onbeforeunload` event handler to the window, which displays a prompt asking the user to confirm their intent to leave the page. Please note that this feature may not always work, as websites may have their own mechanisms to handle page reloads.


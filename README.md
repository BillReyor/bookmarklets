
# Expand Comments and Replies Bookmarklet

## Description

This bookmarklet is designed to automatically expand comments and replies on a webpage and scroll to the bottom of the page. It can be particularly helpful for quickly viewing nested comments or replies on social media platforms or discussion forums.

## How to Use

1. Create a new bookmark in your browser.
2. Name the bookmark (e.g., "Expand Comments and Replies").
3. In the URL field of the bookmark, paste the provided JavaScript code.
4. Save the bookmark.
5. When you want to use the bookmarklet, navigate to a webpage with comments or replies you'd like to expand.
6. Click on the "Expand Comments and Replies" bookmark in your browser.

## How it Works

The bookmarklet performs the following steps:

1. It initializes a `counter` variable to limit the number of times the script will run.
2. It creates a function (`expandCommentsAndReplies`) that finds and clicks on elements with specific `aria-label` attributes (i.e., "View more comments", "View more replies", and "See hidden replies").
3. It creates another function (`scrollToBottom`) that scrolls the browser window to the bottom of the page.
4. It defines the main function (`autoExpandAndScroll`), which calls the two previously defined functions and increments the counter. If the counter is less than 5, it will wait for 1 second (1000 milliseconds) and call itself recursively to perform the action again.
5. Finally, it calls the `autoExpandAndScroll` function to begin the process.

## Customizing the Limit

To disable the 5-time limit or adjust it to a different value, follow these instructions:

1. Locate the JavaScript code for the bookmarklet.
2. Find the line of code that initializes the counter variable: `var counter = 0;`
3. Locate the line of code with the conditional statement that checks the counter: `if (counter < 5) {`
4. To disable the limit, change the condition to `true` like this: `if (true) {`
   This will cause the bookmarklet to continue expanding comments and replies indefinitely until all of them are expanded, or you manually stop the script (e.g., by refreshing the page or navigating away from the page).
5. If you prefer to adjust the limit to a different value, simply replace the `5` with your desired number. For example, if you want the script to attempt expanding comments and replies 10 times, change the line to: `if (counter < 10) {`
6. Save the modified code in the URL field of your "Expand Comments and Replies" bookmark.

Please note that setting the limit too high or disabling it entirely may cause the browser to become unresponsive or slow down, depending on the number of comments and replies on the page and the performance of your device. It's recommended to use a reasonable limit to avoid potential issues.

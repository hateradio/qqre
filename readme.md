# Quick Quote, Reply & Edit

## Preview

![Quick Quote, Reply & Edit](https://raw.githubusercontent.com/hateradio/qqre/master/screenshot.png "Version 10 Preview")

## Links

Install it from Greasy Fork . . . [https://greasyfork.org/en/scripts/1022-neogaf-quick-quote-reply-and-edit](https://greasyfork.org/en/scripts/1022-neogaf-quick-quote-reply-and-edit "Quick Quote, Reply &amp; Edit - Install")

Check out the source . . . [https://github.com/hateradio/qqre](https://github.com/hateradio/qqre "Quick Quote, Reply &amp; Edit - Source Code")

<strike>Chrome users, [get the extension](https://chrome.google.com/webstore/detail/neogaf-quick-quote-reply/cepaobafibbkpibaddehcnldhcnjjgal)!</strike>

## Features

* Creates a **quick reply box** with BBCode buttons
* Adds **strike, highlight, and spoiler** buttons
* New **keyboard shortcuts** for all of those new and old buttons (see below)
* Allows you to **quote multiple posts directly** to the quick reply box
* Adds an **advanced quick editor** on the fly
* **Temporarily stores your reply** while you browse multiple pages
* **Saves you time** by not having to go to the default reply and edit page

## Shortcuts

Use these shortcuts to quickly input BBCode into your posts.

Mac users can use the CMD (⌘) key instead of CTRL.

* CTRL + b = `[b][/b]` (Bold)
* CTRL + i = `[i][/i]` (Italic)
* CTRL + u = `[u][/u]` (Underline)
* CTRL + s = `[strike][/strike]` (Strike)
* CTRL + h = `[highlight][/highlight]` (Highlight)
* CTRL + p = `[spoiler][/spoiler]` (Spoiler)
* CTRL + l = `[url][/url]` (Link)
* CTRL + m = `[img][/img]` (Image)
* CTRL + e = {Save} Save your text.
* CTRL + d = {Delete} Clear the textarea.

## Windows 7 Users

Windows 7 users who have issues displaying Emoji should install the [Symbola](http://users.teilar.gr/~g1951d/) font on their system.

## Updates

### 10.1
* **New**: Adds new emoji!
* **Fix**: Inserting emoji will no longer add a space between emoji
* Adds ESLint support

### 10.0.2
* **New**: Adds Grunt for task management -- generates readme.md and update.json
* **Fix**: Safari - Shortcuts now work
* - Note: `CMD+M` and `CMD+H` cannot be overriden. Please use `CTRL+H` and `CTRL+M`
* **Fix**: Safari - Textareas in PMs now display
* Removed extraneous elements and added `placeholder` text to input fields

### 10.0.1
* **Fix**: Search input now matches the style of the site
* **Fix**: Quick Editor now toggling correctly

### 10
* **New**: Emoji toolbar to toggle which emoji to display
* **New**: Adds the `[NOPARSE]` tag -- won't parse any BBCode within it
* **Fix**: Posts without user names won't stop the script execution

### 9.0.2
* **FIX**: HTTPS for NeoGAF

### 9.0.1
* **FIX**: Saved text would appear in the title field instead of the textarea.

### 9.0
*  **New**: Keyboard toggle for images in quotes is now ALT+SHIFT+T instead of ALT+T for greater compatibility.
*  **New**: Improved shortcuts for Mac (eg, CMD+B for Bold)
*  **New**: Temporary storage saves text as it is written.
*  **New**: Subscription setting overhauled.
*  -  Will now only provide an override option, as all posts made will default to the settings provided by the [User Control Panel](http://www.neogaf.com/forum/profile.php?do=editoptions#sel_autosubscribe)
*  **New**: Middle clicking on Emoji will link to [CodePoints.net](https://codepoints.net) for information about that character
*  **New**: AutoPager & Live Update extension support
*  **New**: Informs anonymous users to sign in before submitting posts
*  **New**: Resize toggle added to Emoji box
*  **New**: Tabbing will send the focus from the textarea to the Submit button
*  **New**: Routing mechanism to load the different code on the different pages
*  **New**: New Form class to create Quick Reply and Edit forms
*  **New**: Character escaping mechanism to convert JavaScript characters to HTML entities for AJAX transmissions; removes VB method
*  **Fix**: Removed vertical alignment of inputs
*  **Fix**: Posts that have been saved now clear after the post has been processed
*  Renames "Delete" button with "Clear"
*  Restructure of the code base

### 8.0

*  **New**: Emoji picker!
*  **New**: (Windows) Emoji support to Chrome-based browsers!
*  -   _Note 1_: Segoe UI Symbol, Segoe UI Emoji and Symbola added to the font list
*  -   _Note 2_: This may change default fonts a bit
*  -   _Note 3_: Windows 7 users who have issues displaying Emoji should install [Symbola](http://users.teilar.gr/~g1951d/)
*  **New**: USC-2 decoder and entity encoder to work with forum AJAX to transmit Emoji data
*  **Fix**: Removing recursive quotes no longer causes an error

### 7.4.1

*   Chrome fix for greaseWindow

### 7.4

*   Fixes quotes when user has ignored others
*   Fixes for getting user key

### 7.3

*   Fixes update notification
*   Closed threads do not show the reply box
*   Changes to form to match new dark theme
*   Improves quick quote text replacements

### 7.1 - 7.2

*   Changes for Chrome extension
*   Changes to form to match new dark theme
*   Improves quick quote text replacements

### 7.0

*   Fix for new site
*   Fix for quick reply AJAX response (no more `responseXML`)

### 6.3

*   Chrome 27+, no more `window` access
*   Added message listener
*   Chanced to dropboxusercontent.com, since it's now used by dropbox

### 6.1.2 - 6.2

*   Chrome - button issues, again

### 6.1

*   Chrome - button issues

### 6.0

*   Removes quick reply bar, now uses the native button to create the quick editor
*   The editor starts when pressing the Edit+ link
*   Incorporates some of the site's native AJAX functionality
*   [IMG] to [URL] replacement now creates "Link : Image" when an image is inside a link
*   Fixes integration with Smilies script, data image links will be removed
*   Updates the Extra reply button code
*   Enhances compatibility with Opera
*   Adds keyboad shortcut list
*   Adds keyboard shortcut (`ALT+T`) for toggling "Auto-convert IMG to URL tags" checkbox

(DLs: 4,156)

## Compatibility

![Firefox](https://i.imgur.com/VATcH.png "Firefox") ` Firefox 24`
![Opera](https://i.imgur.com/kqUXX.png "Opera") ` Opera 15`
![Chrome](https://i.imgur.com/rFFb0.png "Chrome") ` Chrome 30`
![Safari](https://i.imgur.com/Ll1Ir.png "Safari") ` Safari 7` (Requires the TamperMonkey extension)


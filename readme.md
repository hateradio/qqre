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

## New: Version 10
* **New**: Emoji toolbar to toggle which emoji to display
* **New**: Adds the `[NOPARSE]` tag -- won't parse any BBCode within it
* **Fix**: Posts without user names won't stop the script execution

## Version 9
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

## Compatibility

![Firefox](https://i.imgur.com/VATcH.png "Firefox") ` Firefox 24`
![Opera](https://i.imgur.com/kqUXX.png "Opera") ` Opera 15`
![Chrome](https://i.imgur.com/rFFb0.png "Chrome") ` Chrome 30`
![Safari](https://i.imgur.com/Ll1Ir.png "Safari") ` Safari 7` (Requires the TamperMonkey extension)
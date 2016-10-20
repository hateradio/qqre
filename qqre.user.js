// ==UserScript==
// @id             GAF-QQRE
// @name           NeoGAF: Quick Quote, Reply, and Edit
// @namespace      hateradio)))
// @author         hateradio
// @version        9.0.2
// @description    This script adds the ability to quickly quote, reply, and edit posts on NeoGAF. Just click and go.
// @homepage       https://greasyfork.org/scripts/1022-neogaf-quick-quote-reply-and-edit
// @icon           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGRjg5NTBEMDYwODdFMDExQkE4RUNGOEQ3QzZENjU2MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NzUyNDZBRTg3RDkxMUUwQkE0Q0QyRjcyMEQwQUNDOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NzUyNDZBRDg3RDkxMUUwQkE0Q0QyRjcyMEQwQUNDOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RTgyRDgxNkQ5ODdFMDExOTI4RUREM0QyQUUxREY5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRjg5NTBEMDYwODdFMDExQkE4RUNGOEQ3QzZENjU2MyIvPiA8L3JkZjpEZXNjcmlwdGlv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
// @screenshot     https://dl.dropboxusercontent.com/u/14626536/userscripts/updt/qqre/qqre_09.png

// @include        http*://*neogaf.com/forum/showthread.php?*
// @include        http*://*neogaf.com/forum/newreply.php*
// @include        http*://*neogaf.com/forum/editpost.php*
// @include        http*://*neogaf.com/forum/newthread.php*
// @include        http*://*neogaf.com/forum/subscription.php*
// @include        http*://*neogaf.com/forum/showpost.php*
// @include        http*://*neogaf.com/forum/private.php*

// @match          *://*.neogaf.com/forum/showthread.php?*
// @match          *://*.neogaf.com/forum/newreply.php*
// @match          *://*.neogaf.com/forum/editpost.php*
// @match          *://*.neogaf.com/forum/newthread.php*
// @match          *://*.neogaf.com/forum/subscription.php*
// @match          *://*.neogaf.com/forum/showpost.php*
// @match          *://*.neogaf.com/forum/private.php*

// @updated        18 NOV 2014
// @since          30 OCT 2010
// @grant          GM_xmlhttpRequest
// @grant          unsafeWindow
// (c) 2010+, hateradio
// ==/UserScript==

/*

## 10
* **New**: Emoji toolbar to toggle which emoji to display

Changes
## 9.0.2
* **FIX**: HTTPS for NeoGAF

## 9.0.1
* **FIX**: Saved text would appear in the title field instead of the textarea.

## 9.0
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

// todo implement preview

## 8.0

*  **New**: Emoji picker!
*  **New**: (Windows) Emoji support to Chrome-based browsers!
*  -   _Note 1_: Segoe UI Symbol, Segoe UI Emoji and Symbola added to the font list
*  -   _Note 2_: This may change default fonts a bit
*  -   _Note 3_: Windows 7 users who have issues displaying Emoji should install [Symbola](http://users.teilar.gr/~g1951d/)
*  **New**: USC-2 decoder and entity encoder to work with forum AJAX to transmit Emoji data
*  **Fix**: Removing recursive quotes no longer causes an error

<strong>7.4.1</strong>
<ul>
<li>Chrome fix for greaseWindow</li>
</ul>
<strong>7.4</strong>
<ul>
<li>Fixes quotes when user has ignored others</li>
<li>Fixes for getting user key</li>
</ul>
<strong>7.3</strong>
<ul>
<li>Fixes update notification</li>
<li>Closed threads do not show the reply box</li>
<li>Changes to form to match new dark theme</li>
<li>Improves quick quote text replacements</li>
</ul>
<strong>7.1 - 7.2</strong>
<ul>
<li>Changes for Chrome extension</li>
<li>Changes to form to match new dark theme</li>
<li>Improves quick quote text replacements</li>
</ul>
<strong>7.0</strong>
<ul>
<li>Fix for new site</li>
<li>Fix for quick reply AJAX response (no more responseXML)</li>
</ul>
6.3
<ul>
<li>Chrome 27+, no more window access</li>
<li>Added message listener</li>
<li>Chanced to dropboxusercontent.com, since it's now used by dropbox</li>
</ul>
6.1.2 - 6.2
<ul><li>Chrome - button issues, again</li></ul>
6.1
<ul><li>Chrome - button issues</li></ul>

<h4>6.0</h4> 4,156
<ul>
	<li><b>Removes quick reply bar, now uses the native button to create the quick editor;</b></li>
	<li><b>The editor starts when pressing the Edit+ link</b></li>
	<li>Incorporates some of the site's native AJAX functionality</li>
	<li>[IMG] to [URL] replacement now creates "Link : Image" when an image is inside a link</li>
	<li>Fixes integration with Smilies script, data image links will be removed</li>
	<li>Updates the Extra reply button code</li>
	<li>Enhances compatibility with Opera</li>
	<li>Adds keyboad shortcut list</li>
	<li>Adds keyboard shortcut (ALT+T) for toggling "Auto-convert IMG to URL tags" checkbox</li>
</ul>
*/

(function () {
	'use strict';

	var $, greaseWindow, strg, update, Extra, Editor, Form, app, bond, emoji;

	if (!String.prototype.trim) { String.prototype.trim = function () { return this.replace(/^\s+|\s+$/g, ''); }; }
	if (!Array.from) { Array.from = function (list) { return Array.prototype.slice.call(list); }; }

	bond = function (o, m) { return function () { return m.apply(o, arguments); }; };

	// UCS-2 Decoder https://github.com/bestiejs/punycode.js
	function ucs2decode(string) {
		var output = [],
			counter = 0,
			length = string.length,
			value,
			extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if ((value & 0xF800) === 0xD800 && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) === 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					output.push(value, extra);
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Window | No longer works in Chrome 27+
	greaseWindow = {};

	function embedScript(func) {
		var script = document.createElement('script');
		script.type = 'application/javascript';
		script.textContent = '(' + func + ')();';
		document.body.appendChild(script);
		document.body.removeChild(script);
	}

	// S T O R A G E HANDLE
	strg = {
		on: (function () { try { var s = window.localStorage; return (s.getItem && s.setItem && s.removeItem); } catch (e) { return false; } }()),
		read: function (key) { return this.on ? JSON.parse(window.localStorage.getItem(key)) : false; },
		grab: function (key) { return this.read(key) || {}; },
		save: function (key, dat) { return this.on ? !window.localStorage.setItem(key, JSON.stringify(dat)) : false; },
		wipe: function (key) { return this.on ? !window.localStorage.removeItem(key) : false; },
		zero: function (obj) { var k; for (k in obj) { if (obj.hasOwnProperty(k)) { return false; } } return true; }
	};

	// U P D A T E HANDLE
	update = {
		name: 'NeoGAF: Quick Quote, Reply, and Edit',
		version: 9020,
		key: 'ujs_QQRE_UPDT',
		callback: 'qqreupdater',
		page: 'https://greasyfork.org/scripts/1022-neogaf-quick-quote-reply-and-edit',
		uric: 'https://dl.dropboxusercontent.com/u/14626536/userscripts/updt/qqre/qqrej.js',
		checkchrome: true,
		interval: 5,
		day: (new Date()).getTime(),
		time: function () {return (new Date(this.day + (1000 * 60 * 60 * 24 * this.interval))).getTime(); },
		top: document.head || document.getElementsByTagName('head')[0],
		css: function (t) {
			if (!this.style) {
				this.style = document.createElement('style');
				this.style.type = 'text/css';
				this.top.appendChild(this.style);
			}
			this.style.appendChild(document.createTextNode(t + '\n'));
		},
		js: function (t) {
			var j = document.createElement('script');
			j.type = 'text/javascript';
			j[/^https?\:\/\//i.test(t) ? 'src' : 'textContent'] = t;
			this.top.appendChild(j);
		},
		notification: function (j) {
			if (j) {
				if (this.version < j.version) {
					window.localStorage.setItem(this.key,
						JSON.stringify({date: this.time(), version: j.version, page: j.page }));
				} else {
					return true;
				}
			}
			var a = document.createElement('a'), b = JSON.parse(window.localStorage.getItem(this.key));
			a.href = b.page || '#';
			a.target = '_blank';
			a.id = 'userscriptupdater';
			a.title = 'Update Now!';
			a.textContent = 'An update for ' + this.name + ' is available.';
			document.body.appendChild(a);
			return true;
		},
		check: function (force) {
			if (this.extension) { return; }
			if (!strg.on) { return; } // || typeof (GM_updatingEnabled) === 'boolean'
			var stored = strg.read(this.key), j, page;
			this.csstxt();
			if (force || !stored || stored.date < this.day) {
				page = stored && stored.page ? stored.page : this.page;
				strg.save(this.key, {date: this.time(), version: this.version, page: page});
				j = this.notification.toString()
					.replace('function', 'function ' + this.callback)
					.replace('this.version', this.version)
					.replace(/(?:this\.key)/g, "'" + this.key + "'")
					.replace('this.time()', this.time())
					.replace('this.name', "'" + this.name + "'");
				this.js(j);
				this.js(this.uric);
			} else if (this.version < stored.version) { this.notification(); }
		},
		csstxt: function () {
			if (!this.pop) { this.pop = true; this.css('#userscriptupdater,#userscriptupdater:visited{box-shadow:0 0 6px #787878;border:1px solid #777;border-radius:4px;cursor:pointer;color:#555;font-family:Arial, Verdana, sans-serif;font-size:11px;font-weight:700;text-align:justify;min-height:45px;position:fixed;z-index:999999;right:10px;top:10px;width:170px;background:#ebebeb url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAACLCAYAAAD4QWAuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NUIzQjc3MTI4N0RFMDExOUM4QzlBNkE2NUU3NDJFNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGN0Q1OEQyNjdEQzUxMUUwQThCNEE3MTU1NDU1NzY2OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGN0Q1OEQyNTdEQzUxMUUwQThCNEE3MTU1NDU1NzY2OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NUIzQjc3MTI4N0RFMDExOUM4QzlBNkE2NUU3NDJFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NUIzQjc3MTI4N0RFMDExOUM4QzlBNkE2NUU3NDJFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po6YcvQAAAQFSURBVHja7JzBSxRRHMdnp+gkiLdOgtshKGSljQVF8CK0biEErYfwFmT+BQpdA0MIBEFtTx2qSxESaAt5ioUQFDp5sjl06rbnumzfp7+VbZx5M+/Nb9wZ+f3g56wzO28//ua93/u9J/stdDodx2/P3o85llaFT8JvwlvwTfhf00a2Hv8IPO86PHYHvg//An8OfwRfg/9RfzvTZ7DBvoZXQq6p6D7MCuwT+N2I92zAB/sNO0yPO8quwxf7DasABmK+d0XTVVKHnYIvG96z1i9Ymw8ep/R2obAqNdkm41e2sFct71v1/f4BiXyOJpRpHKZ918s9527B5+FvLwJWDaoR3zmvZ/bZw2HPNyMeBOTeb/BfaXaDEuVMvx2G3QDQMkW21wZsUpkp7GbIeU9zz3TI+WXTVGYCW6XRbApb1lxbTwt2VVMltS1hVWRnuWFVqhoNudbW9NchHIpc+ToO7GDE49JFtRij/ZG4gy0O7CIVIjZWNuhiw0lhK1SA6GzI8ppxKouCjTNaOWC7qWzKFrYaNw/SQOKwNVtYk4KjyAQ7RpnHCHaeCg7ugZQon7sBj3RYM62mHdmTVAaGxbiRNVmqRM3/bUvgDQCX/CcLvZsceEOF1v82dgPTrkdVVp2iXU8Q4e9ob0IHu59gUecxdwdlMwBunusGAJ1NuPr0KLoFdYQ3GGBXAiMLWC9gBRDX2gTa9g3Wp7Rbk8TqaPfjWWRp9I0kaLARVCbiXMO/xLGwdfCd7Oa4eDGQdD0fYYcJ7z/bzXHpxbWEDRaddO1FF3aSobE6pazAawztX0H7465mXWVqB2hwqWdwFeFfGaM+Wlh4V/rkMO2fpmy3VWTf5AD0NzLLkYsfn53T7fUs21k2UPmw5jBs9qZgx/AH4Ns+VxvQwJg0rGXTMPUfnhYgj0MLmayb6+TIBFZgBVZgBVZgBVZgBVZgBVZgBVZgBVZgBVZgBVZgBVZgBVZgBVZgBVZgBVZgBVZgBVZgBVZgBVZgBTZzVrg3U+Nsz1iTo7m7c+GRFU2ONGBFkyMNWNHkSANWNDl0xqbJAZ+j1/nR5HBOv6zm/8JaPjQ5KKqiyRFVpORfk8PRf3NZq8lRrd3PhiaHc6pvcLk0ORDdfGlyAFg0OdKAPUlliG76mhyGUNaDLXOaHIjuJdXkoKVKXzU5wlJZZjU5AFyKKhErFkuVbjcoUo3Apcmhnu6Ebkcmc5oczd2dZlA3YNHkUAFwUtLkcJlWnm1a1ng94AvkbKnM1SxVTKwRMphYNDkAPNiFFU0OZuPV5NDMYiyaHOgKvJoc8CVftFk1ORRsi/FxvYR3yH9qZjYba+VGkwOTw5GCzZcmByzTmhyI6ra/kNkiz4wmByD/0+T4J8AAyDkZArebBxMAAAAASUVORK5CYII=) no-repeat 13px 15px;padding:12px 20px 10px 65px}#userscriptupdater:hover,#userscriptupdater:visited:hover{color:#55698c!important;background-position:13px -85px;border-color:#8f8d96}'); }
		},
		extension: window.chrome && window.chrome.extensions
	};
	update.check();

	// DOM/HTML Helpers
	$ = {
		a: function (e) { var i = 1, j = arguments.length, f = document.createDocumentFragment(); for (i; i < j; i++) { f.appendChild(arguments[i]); } e.appendChild(f); return e; },
		e: function (t, o, e, p) { var a, b, c = document.createElement(t); if (typeof (o) === 'object') { for (a in o) { if (o.hasOwnProperty(a)) { b = a.charAt(0); switch (b) { case '_': c.style[a.substring(1)] = o[a]; break; case '$': c.setAttribute(a.substring(1), o[a]); break; default: c[a] = o[a]; break; } } } } if (e) { if (p) { c.appendChild(e); } else { e.appendChild(c); } } return c; },
		t: document.createElement('textarea'),
		h: function (t) { this.t.innerHTML = t; return this.t.value.trim(); },
		htmlEncode: function (text) {
			var chars = ucs2decode(text), c, i, j = chars.length, str = [];

			for (i = 0; i < j; i++) {
				c = chars[i];
				str.push(c >= 127 ? ('&#' + c + ';') : String.fromCharCode(c));
			}

			return str.join('');
		},
		uriHtmlEncode: function (text) { return encodeURIComponent(this.htmlEncode(text)); }
	};

	// Extra Reply Buttons
	Extra = (function () {
		function Extra(id, custom) {
			id = id || '001';
			this.editor = 'vB_Editor_' + id;
			this.custum = !!custom;
			this.txt = document.getElementById(this.editor + '_textarea');
			if (this.txt) {
				this.src = this.custum ? document.getElementById(this.editor + '_cmd_underline') : document.getElementById(this.editor + '_cmd_underline').parentNode;
				this.BB = {};
				this.add();
				this.setup();
			}
		}

		Extra.buttons = ['Spoiler', 'Highlight', 'Strike', 'NoParse'];
		Extra.images  = [
			'/forum/images/neogaf2/misc/spoiler.gif',
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0QTZDNkZFMTMxOEFFMDExOEQ0RTk2MjY1NjVFQUVDQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozM0I5QzRFMjhBMzUxMUUwOEVEMUQ5RkU1NzlCRTAwRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozM0I5QzRFMThBMzUxMUUwOEVEMUQ5RkU1NzlCRTAwRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0QTZDNkZFMTMxOEFFMDExOEQ0RTk2MjY1NjVFQUVDQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QTZDNkZFMTMxOEFFMDExOEQ0RTk2MjY1NjVFQUVDQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkUW7xgAAAB/SURBVHjaYvz//z8DtQETAw3ACDeUBZfEGUX1AiDljyZ8F4iVkfkm92+mEG0oEEwA4jggNoTyFYD4IRB/A2JOIP4OxI7keP8jEvshlP6JRg9wmGIB76E0PzVjXxCKP46MxA9Kp+pA/AGKzwHxHKjcByg9B5tGxtFSagQbChBgAHoVG8AVO051AAAAAElFTkSuQmCC',
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0QTZDNkZFMTMxOEFFMDExOEQ0RTk2MjY1NjVFQUVDQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRjk5MzM3NjhBMzQxMUUwOTcxNkNDQzlBQjRERDVEMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRjk5MzM3NThBMzQxMUUwOTcxNkNDQzlBQjRERDVEMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0QTZDNkZFMTMxOEFFMDExOEQ0RTk2MjY1NjVFQUVDQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QTZDNkZFMTMxOEFFMDExOEQ0RTk2MjY1NjVFQUVDQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpIU3swAAAEzSURBVHjaYvz//z8DtQETAw3AqKG4QVhoKIOEuHgBIyPjfhDW09PrB/LXg8TxAlDs48Ia6ur1ICXiYmIOSkpKCkD2ekFBwf+hISF49eF16ZevXx1AtLqGhoKxkdEDOzu7RCD3AyHvM6KnUycnJzj74cOH8+/du5cAYsvIyBzQ09VtfPny5Qc+fv4LMDX79u3DMJQFh2VbgNhbXl6eAYShwOH7jx8OQANh/K1A7INNMy5DwYpFhIUNvn79+uDS5csJT548yQcKgcKVwcXZOfHvv38LyIr94ydO9P/69ctAVVV1gqOjoyIwksAGAS2Sx6cPw6XIYSQrK8tw9ty5fmAkBQINfMDGynoRJM7KxnYQW1gS8j4cAF36YM/eveeBTFDkKACTVyIQHyAp9kfz/ggyFCDAAMW7jH/4BUY6AAAAAElFTkSuQmCC',
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM5NjZBNUEyNTI4MTFFNkI5OUE5QzcyOTIzQkVGRTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM5NjZBNUIyNTI4MTFFNkI5OUE5QzcyOTIzQkVGRTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQzk2NkE1ODI1MjgxMUU2Qjk5QTlDNzI5MjNCRUZFMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQzk2NkE1OTI1MjgxMUU2Qjk5QTlDNzI5MjNCRUZFMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuG5jzQAAAJXSURBVHja5FS9T1pRFP89eMiTFq3ERKoMJDYOLxpCcOlSh9q4GD82HWpZaB0dXWypk39CKw6NU7cyuJjapQuLFkkTNH6gSQv4OkgJ6EPg8Tzn1TYQAiRNnXqTk3vfOb/ze+frXkHXdfzrZcItrFshFWu+Xjyp/pJJZkjGSbw3uijJBsl7kvgf5NuPjUkrmgbT2Bgqm5sBWCzLQm+vU+jpAbq6fgEyGa+uKF49lQqgVHpJ2BBh69IVqhtV9D/iLSDY7avmgQH8TCZxHoshe3Bg2DtJ5/B4cK+vDxrp9FzuOalDbe8+N66pVirJFWDZ7Hbjx+4uvoXDkYuTk2e+pSWBhc5hRyYDk9MJxjCWfZo2qlQszsDhcOZSKZxvb0csVutTz8LCOgoFIBIJekZGpjA6ip3FRTCGsYZPM9JysTgudnTgIpFAmyS9kf3+Y6gqtScaJPOr34Sd3d1hxjCWfZpHenXlFS0WaJTig4mJdbhcwP5+DSGt12SbZgxj2adV+uDIrDabsWNrq47QNzsbrMYYPi0ijRYUBXccDmT39j7UEU5OBnF5ybY5xjCWfVrVdCOXTkOSJK7bVA3hyooRoaoo/VTvecYwln3QbE7jHrtsFsVPLrfbaRsexpe1NVDHw6KuTxs/FYQ52uYpkodqNovvp6dnWrn8WI7l4g1Jv8qSMfxSe/vqfRrwu3yTqBkwm28GWaMalZCnJqXpYhRU1Rj+oXihSfrlMoYGB0N5uimJw8Oz5NER8pQiXU9D+Mw6tjGGsezTNP2dfuGvHhTfsd6Y9P97pK8FGADMrzoLJkd3DQAAAABJRU5ErkJggg=='
		];
		Extra.ctrl = { b: 'b', i: 'i', u: 'u', s: 'Strike', h: 'Highlight', p: 'Spoiler', l: 'url', m: 'img', e: 'save', d: 'clear' };
		Extra.mac = /(?:mac)/i.test(navigator.platform);
		Extra.moz = window.InstallTrigger !== undefined;
		Extra.keyEvent = Extra.moz ? 'keypress' : 'keydown';
		Extra.click = function (el) {
			var evt = document.createEvent('MouseEvents');
			evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			// window.setTimeout(function () {
			el.dispatchEvent(evt);
			// }, 1);
		};

		Extra.prototype = {
			constructor: Extra,
			insert: function (evt) { // based on: http://parentnode.org/javascript/working-with-the-cursor-position/ // gecko parts only
				var t = evt.target.getAttribute('alt').toUpperCase(), start, end, pos, temp;
				if (this.txt.selectionStart >= 0) {
					start = this.txt.selectionStart || 0;
					end = this.txt.selectionEnd || 0;
					temp = this.txt.value.substr(0, start) + '[' + t + ']' + this.txt.value.substr(start, end - start);
					pos = temp.length;
					this.txt.value = temp + '[/' + t + ']' + this.txt.value.substr(end, this.txt.value.length);
					this.txt.focus();
					start = start + 2 + t.length;
					this.txt.setSelectionRange(start, pos);
				}
			},
			add: function () {
				var i = Extra.buttons.length, div, td;
				while (i--) {
					div = $.e('div', {className: 'imagebutton', title: 'new'});
					this.BB[Extra.buttons[i]] = $.e('img', {height: 20, width: 21, src: Extra.images[i], alt: Extra.buttons[i], title: Extra.buttons[i]}, div);
					this.BB[Extra.buttons[i]].addEventListener('click', this.insert.bind(this), false);
					if (this.custum) {
						this.src.parentNode.insertBefore(div, this.src.nextSibling);
					} else {
						td = $.e('td', {className: 'imgbtnemu'}, div, true);
						this.src.parentNode.insertBefore(td, this.src.nextSibling);
					}
				}
			},
			keys: function (e) {
				if (!e.shiftKey && (e.ctrlKey || e.metaKey)) {
					// console.log('keys--which', e.which, e);
					var k = Extra.ctrl[String.fromCharCode(e.which).toLowerCase()];
					// console.log('k', k);
					if (k && (this.BB[k] || (e.metaKey && this.BB.meta[k]))) {
						// console.log('keys found');
						e.preventDefault();
						Extra.click(this.BB[k] || this.BB.meta[k]);
					}
				}
			},
			setup: function () {
				this.BB.meta = {};
				this.BB.b = document.getElementById(this.editor + '_cmd_bold');
				this.BB.i = document.getElementById(this.editor + '_cmd_italic');
				this.BB.u = document.getElementById(this.editor + '_cmd_underline');
				this.BB.img = document.getElementById(this.editor + '_cmd_insertimage');
				this.BB.url = document.getElementById(this.editor + '_cmd_createlink');

				this.BB.meta.b = this.BB.b;
				this.BB.meta.i = this.BB.i;
				this.BB.meta.u = this.BB.u;

				if (Extra.moz) {
					this.BB.b = this.BB.i = this.BB.u = null;
				}

				this.txt.addEventListener(Extra.keyEvent, this.keys.bind(this), false);
			}
		};
		return Extra;
	}());
	update.css('td.imgbtnemu div:hover { border:1px solid #316ac5; margin: -1px; background: #c1d2ee; } td.imgbtnemu div:active { background: #98b5e2; } #vB_Editor_001_cmd_wrap0_spoiler { visibility:hidden !important } .quickreplyform_hotspot{text-align:center;margin-top:6px} .text_emo_container { text-align: center; margin-top: 8px; } .text_emo_container > div {vertical-align: top} .text_emo_container .text_emo_container_text {display:inline-block;margin: 0 0 0 4%;width:70%} .text_emo_container .text_emo_container_emo {width:18%;margin: 0 0 0 1%;display:inline-block;overflow:hidden} .text_emo_container_text textarea {width:99%} .gm_emoji {height:157px;line-height: 1.2;overflow: hidden;resize:both} .gm_emoji a {font-size:12px;line-height:1.2;cursor:pointer} .gm_emoji_list {height: 125px; overflow: auto; } .gm_emoji_toolbar { margin-bottom: 4px }');

	// Emoji Stuff <3 OSX 10.9+ Command+Control+Space
	// http://konieczny.be/article/utf.php
	// http://apps.timwhitlock.info/emoji/tables/unicode
	emoji = {
		div: null,
		dbGenerator: function (ranges) {
			var list = [], i;

			ranges.forEach(function (range) {
				for (i = range[0]; i <= range[1]; i++) {
					list.push(i.toString(16));
				}
			});

			return list;
		},
		presentation: {
			nameReg: /([A-Z])/g,
			readableName: function (name) {
				var title = name.replace(emoji.presentation.nameReg,  ' $1');
				title = title[0].toUpperCase() + title.slice(1);

				return title;
			},
			toolbarIcon: function (point, name) {
				var b = document.createElement('div');
				b.innerHTML = '&#x' + point + ';';
				b.setAttribute('data-toolbar', name);
				b.title = emoji.presentation.readableName(name);
				b.className = 'gm_emoji_toolbar_button';
				return b;
			},
			icon: function (point) {
				var a = document.createElement('a');
				a.innerHTML = '&#x' + point + ';';
				a.setAttribute('data-char', a.innerHTML);
				a.title = 'U+' + point; // a.innerHTML;
				a.href = 'https://codepoints.net/U+' + point;
				return a;
			},
			panel: function (div) {
				var e, i, l, f = document.createDocumentFragment(), innerDiv, innerFragment, toolbar, hide = false,
					unique = function (a, x) { return ~a.indexOf(x) ? a : a.concat(x); };

				toolbar = document.createElement('div');
				toolbar.className = 'gm_emoji_toolbar';

				for (e in emoji.db) {
					if (emoji.db.hasOwnProperty(e)) {
						innerFragment = document.createDocumentFragment();

						innerDiv = document.createElement('div');

						if (hide) {
							innerDiv.className = 'gm_emoji_list gm_emoji_hidden gm_emoji_' + e;
						} else {
							hide = true;
							innerDiv.className = 'gm_emoji_list gm_emoji_' + e;
						}

						l = emoji.db[e].reduce(unique, []);
						for (i = 0; i < l.length; i++) {
							if (i === 0) {
								toolbar.appendChild(emoji.presentation.toolbarIcon(l[i], e));
								toolbar.appendChild(document.createTextNode(' '));
							}
							innerFragment.appendChild(emoji.presentation.icon(l[i]));
							innerFragment.appendChild(document.createTextNode(' '));
						}
					}

					innerDiv.appendChild(innerFragment);
					f.appendChild(innerDiv);
				}
				div.appendChild(toolbar);
				div.appendChild(f);
			}
		},
		db: {
			smileysPeople: ["1F600", "1F601", "1F602", "1F603", "1F604", "1F605", "1F606", "1F609", "1F60A", "1F60B", "1F60E", "1F60D", "1F618", "1F617", "1F619", "1F61A", "263A", "1F642", "1F917", "1F914", "1F610", "1F611", "1F636", "1F644", "1F60F", "1F623", "1F625", "1F62E", "1F910", "1F62F", "1F62A", "1F62B", "1F634", "1F60C", "1F913", "1F61B", "1F61C", "1F61D", "1F612", "1F613", "1F614", "1F615", "1F643", "1F911", "1F632", "2639", "1F641", "1F616", "1F61E", "1F61F", "1F624", "1F622", "1F62D", "1F626", "1F627", "1F628", "1F629", "1F62C", "1F630", "1F631", "1F633", "1F635", "1F621", "1F620", "1F607", "1F637", "1F912", "1F915", "1F608", "1F47F", "1F479", "1F47A", "1F480", "1F47B", "1F47D", "1F916", "1F4A9", "1F63A", "1F638", "1F639", "1F63B", "1F63C", "1F63D", "1F640", "1F63F", "1F63E", "1F466", "1F467", "1F468", "1F469", "1F474", "1F475", "1F476", "1F47C", "1F46E", "1F575", "1F482", "1F477", "1F473", "1F471", "1F385", "1F478", "1F470", "1F472", "1F64D", "1F64E", "1F645", "1F646", "1F481", "1F64B", "1F647", "1F486", "1F487", "1F6B6", "1F3C3", "1F483", "1F46F", "1F574", "1F5E3", "1F464", "1F465", "1F46B", "1F46C", "1F46D", "1F48F", "1F468;&#x200D;&#x2764;&#xFE0F;&#x200D;&#x1F48B;&#x200D;&#x1F468", "1F469;&#x200D;&#x2764;&#xFE0F;&#x200D;&#x1F48B;&#x200D;&#x1F469", "1F491", "1F468;&#x200D;&#x2764;&#xFE0F;&#x200D;&#x1F468", "1F469;&#x200D;&#x2764;&#xFE0F;&#x200D;&#x1F469", "1F46A", "1F468;&#x200D;&#x1F469;&#x200D;&#x1F467", "1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466", "1F468;&#x200D;&#x1F469;&#x200D;&#x1F466;&#x200D;&#x1F466", "1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F467", "1F468;&#x200D;&#x1F468;&#x200D;&#x1F466", "1F468;&#x200D;&#x1F468;&#x200D;&#x1F467", "1F468;&#x200D;&#x1F468;&#x200D;&#x1F467;&#x200D;&#x1F466", "1F468;&#x200D;&#x1F468;&#x200D;&#x1F466;&#x200D;&#x1F466", "1F468;&#x200D;&#x1F468;&#x200D;&#x1F467;&#x200D;&#x1F467", "1F469;&#x200D;&#x1F469;&#x200D;&#x1F466", "1F469;&#x200D;&#x1F469;&#x200D;&#x1F467", "1F469;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466", "1F469;&#x200D;&#x1F469;&#x200D;&#x1F466;&#x200D;&#x1F466", "1F469;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F467", "1F4AA", "1F448", "1F449", "261D", "1F446", "1F595", "1F447", "270C", "1F596", "1F918", "1F590", "270B", "1F44C", "1F44D", "1F44E", "270A", "1F44A", "1F44B", "1F44F", "270D", "1F450", "1F64C", "1F64F", "1F485", "1F442", "1F443", "1F463", "1F440", "1F441", "1F445", "1F444", "1F48B", "1F453", "1F576", "1F454", "1F455", "1F456", "1F457", "1F458", "1F459", "1F45A", "1F45B", "1F45C", "1F45D", "1F392", "1F45E", "1F45F", "1F460", "1F461", "1F462", "1F451", "1F452", "1F3A9", "1F393", "26D1", "1F484", "1F48D", "1F302", "1F4BC"],
			animalsNature: ["1F648", "1F649", "1F64A", "1F4A5", "1F4A6", "1F4A8", "1F435", "1F412", "1F436", "1F415", "1F429", "1F43A", "1F431", "1F408", "1F981", "1F42F", "1F405", "1F406", "1F434", "1F40E", "1F984", "1F42E", "1F402", "1F403", "1F404", "1F437", "1F416", "1F417", "1F43D", "1F40F", "1F411", "1F410", "1F42A", "1F42B", "1F418", "1F42D", "1F401", "1F400", "1F439", "1F430", "1F407", "1F43F", "1F43B", "1F428", "1F43C", "1F43E", "1F983", "1F414", "1F413", "1F423", "1F424", "1F425", "1F426", "1F427", "1F54A", "1F438", "1F40A", "1F422", "1F40D", "1F432", "1F409", "1F433", "1F40B", "1F42C", "1F41F", "1F420", "1F421", "1F419", "1F41A", "1F980", "1F40C", "1F41B", "1F41C", "1F41D", "1F41E", "1F577", "1F578", "1F982", "1F490", "1F338", "1F4AE", "1F3F5", "1F339", "1F33A", "1F33B", "1F33C", "1F337", "1F331", "1F332", "1F333", "1F334", "1F335", "1F33E", "1F33F", "2618", "1F340", "1F341", "1F342", "1F343", "1F344", "1F330", "1F30D", "1F30E", "1F30F", "1F310", "1F311", "1F312", "1F313", "1F314", "1F315", "1F316", "1F317", "1F318", "1F319", "1F31A", "1F31B", "1F31C", "2600", "1F31D", "1F31E", "2B50", "1F31F", "1F320", "2601", "26C5", "26C8", "1F324", "1F325", "1F326", "1F327", "1F328", "1F329", "1F32A", "1F32B", "1F32C", "2602", "2614", "26A1", "2744", "2603", "2604", "1F525", "1F4A7", "1F30A", "1F384", "2728", "1F38B", "1F38D"],
			foodDrink: ["1F347", "1F348", "1F349", "1F34A", "1F34B", "1F34C", "1F34D", "1F34E", "1F34F", "1F350", "1F351", "1F352", "1F353", "1F345", "1F346", "1F33D", "1F336", "1F344", "1F330", "1F35E", "1F9C0", "1F356", "1F357", "1F354", "1F35F", "1F355", "1F32D", "1F32E", "1F32F", "1F373", "1F372", "1F37F", "1F371", "1F358", "1F359", "1F35A", "1F35B", "1F35C", "1F35D", "1F360", "1F362", "1F363", "1F364", "1F365", "1F361", "1F366", "1F367", "1F368", "1F369", "1F36A", "1F382", "1F370", "1F36B", "1F36C", "1F36D", "1F36E", "1F36F", "1F37C", "2615", "1F375", "1F376", "1F37E", "1F377", "1F378", "1F379", "1F37A", "1F37B", "1F37D", "1F374"],
			travelPlaces: ["1F3D4", "26F0", "1F30B", "1F5FB", "1F3D5", "1F3D6", "1F3DC", "1F3DD", "1F3DE", "1F3DF", "1F3DB", "1F3D7", "1F3D8", "1F3D9", "1F3DA", "1F3E0", "1F3E1", "1F3E2", "1F3E3", "1F3E4", "1F3E5", "1F3E6", "1F3E8", "1F3E9", "1F3EA", "1F3EB", "1F3EC", "1F3ED", "1F3EF", "1F3F0", "1F492", "1F5FC", "1F5FD", "26EA", "1F54C", "1F54D", "26E9", "1F54B", "26F2", "1F301", "1F303", "1F306", "1F307", "1F309", "1F30C", "1F3A0", "1F3A1", "1F3A2", "1F682", "1F683", "1F684", "1F685", "1F686", "1F687", "1F688", "1F689", "1F68A", "1F69D", "1F69E", "1F68B", "1F68C", "1F68D", "1F68E", "1F690", "1F691", "1F692", "1F693", "1F694", "1F695", "1F696", "1F697", "1F698", "1F69A", "1F69B", "1F69C", "1F6B2", "1F3CE", "1F3CD", "1F68F", "1F6E4", "26FD", "1F6A8", "1F6A5", "1F6A6", "1F6A7", "2693", "26F5", "1F6A4", "1F6F3", "26F4", "1F6E5", "1F6A2", "2708", "1F6E9", "1F6EB", "1F6EC", "1F4BA", "1F681", "1F69F", "1F6A0", "1F6A1", "1F680", "1F6F0", "1F391", "1F6A3", "1F4B4", "1F4B5", "1F4B6", "1F4B7", "1F5FF", "1F6C2", "1F6C3", "1F6C4", "1F6C5"],
			objects: ["2620", "1F48C", "1F4A3", "1F573", "1F6CD", "1F4FF", "1F48E", "1F52A", "1F3FA", "1F5FA", "1F488", "1F5BC", "1F6CE", "1F6AA", "1F6CC", "1F6CF", "1F6CB", "1F6BD", "1F6BF", "1F6C1", "231B", "23F3", "231A", "23F0", "23F1", "23F2", "1F570", "1F321", "26F1", "1F388", "1F389", "1F38A", "1F38E", "1F38F", "1F390", "1F380", "1F381", "1F579", "1F4EF", "1F399", "1F39A", "1F39B", "1F4FB", "1F4F1", "1F4F2", "260E", "1F4DE", "1F4DF", "1F4E0", "1F50B", "1F50C", "1F4BB", "1F5A5", "1F5A8", "2328", "1F5B1", "1F5B2", "1F4BD", "1F4BE", "1F4BF", "1F4C0", "1F3A5", "1F39E", "1F4FD", "1F4FA", "1F4F7", "1F4F8", "1F4F9", "1F4FC", "1F50D", "1F50E", "1F52C", "1F52D", "1F4E1", "1F56F", "1F4A1", "1F526", "1F3EE", "1F4D4", "1F4D5", "1F4D6", "1F4D7", "1F4D8", "1F4D9", "1F4DA", "1F4D3", "1F4C3", "1F4DC", "1F4C4", "1F4F0", "1F5DE", "1F4D1", "1F516", "1F3F7", "1F4B0", "1F4B4", "1F4B5", "1F4B6", "1F4B7", "1F4B8", "1F4B3", "2709", "1F4E7", "1F4E8", "1F4E9", "1F4E4", "1F4E5", "1F4E6", "1F4EB", "1F4EA", "1F4EC", "1F4ED", "1F4EE", "1F5F3", "270F", "2712", "1F58B", "1F58A", "1F58C", "1F58D", "1F4DD", "1F4C1", "1F4C2", "1F5C2", "1F4C5", "1F4C6", "1F5D2", "1F5D3", "1F4C7", "1F4C8", "1F4C9", "1F4CA", "1F4CB", "1F4CC", "1F4CD", "1F4CE", "1F587", "1F4CF", "1F4D0", "2702", "1F5C3", "1F5C4", "1F5D1", "1F512", "1F513", "1F50F", "1F510", "1F511", "1F5DD", "1F528", "26CF", "2692", "1F6E0", "1F5E1", "2694", "1F52B", "1F6E1", "1F527", "1F529", "2699", "1F5DC", "2697", "2696", "1F517", "26D3", "1F489", "1F48A", "1F6AC", "26B0", "26B1", "1F5FF", "1F6E2", "1F52E", "1F6A9", "1F38C", "1F3F4", "1F3F3", "1F3F3"],
			activity: ["1F47E", "1F574", "1F3AA", "1F3AD", "1F3A8", "1F3B0", "1F6C0", "1F397", "1F39F", "1F3AB", "1F396", "1F3C6", "1F3C5", "26BD", "26BE", "1F3C0", "1F3D0", "1F3C8", "1F3C9", "1F3BE", "1F3B1", "1F3B3", "1F3CF", "1F3D1", "1F3D2", "1F3D3", "1F3F8", "1F3AF", "26F3", "26F8", "1F3A3", "1F3BD", "1F3BF", "1F3C7", "26F7", "1F3C2", "1F3CC", "1F3C4", "1F6A3", "1F3CA", "26F9", "1F3CB", "1F6B4", "1F6B5", "1F3AE", "1F3B2", "1F3B7", "1F3B8", "1F3BA", "1F3BB", "1F3AC", "1F3F9"],
			symbols: ["1F441", "1F498", "2764", "1F493", "1F494", "1F495", "1F496", "1F497", "1F499", "1F49A", "1F49B", "1F49C", "1F49D", "1F49E", "1F49F", "2763", "1F4A4", "1F4A2", "1F4AC", "1F5EF", "1F4AD", "1F4AE", "2668", "1F488", "1F55B", "1F567", "1F550", "1F55C", "1F551", "1F55D", "1F552", "1F55E", "1F553", "1F55F", "1F554", "1F560", "1F555", "1F561", "1F556", "1F562", "1F557", "1F563", "1F558", "1F564", "1F559", "1F565", "1F55A", "1F566", "1F300", "2660", "2665", "2666", "2663", "1F004", "1F3B4", "1F507", "1F508", "1F509", "1F50A", "1F4E2", "1F4E3", "1F4EF", "1F514", "1F515", "1F3E7", "1F6AE", "1F6B0", "267F", "1F6B9", "1F6BA", "1F6BB", "1F6BC", "1F6BE", "26A0", "1F6B8", "26D4", "1F6AB", "1F6B3", "1F6AD", "1F6AF", "1F6B1", "1F6B7", "1F51E", "2622", "2623", "2B06", "2197", "27A1", "2198", "2B07", "2199", "2B05", "2196", "2195", "2194", "21A9", "21AA", "2934", "2935", "1F503", "1F504", "1F519", "1F51A", "1F51B", "1F51C", "1F51D", "1F6D0", "269B", "1F549", "2721", "2638", "262F", "271D", "2626", "262A", "262E", "1F54E", "1F52F", "267B", "1F4DB", "1F530", "1F531", "2B55", "2705", "2611", "2714", "2716", "274C", "274E", "2795", "2796", "2797", "27B0", "27BF", "303D", "2733", "2734", "2747", "203C", "2049", "2753", "2754", "2755", "2757", "A9", "AE", "2122", "2648", "2649", "264A", "264B", "264C", "264D", "264E", "264F", "2650", "2651", "2652", "2653", "26CE", "1F500", "1F501", "1F502", "25B6", "23E9", "25C0", "23EA", "1F53C", "23EB", "1F53D", "23EC", "23F9", "1F3A6", "1F505", "1F506", "1F4F6", "1F4F3", "1F4F4", "23", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "1F51F", "1F4AF", "1F520", "1F521", "1F522", "1F523", "1F524", "1F170", "1F18E", "1F171", "1F191", "1F192", "1F193", "2139", "1F194", "24C2", "1F195", "1F196", "1F17E", "1F197", "1F17F", "1F198", "1F199", "1F19A", "1F201", "1F202", "1F237", "1F236", "1F22F", "1F250", "1F239", "1F21A", "1F232", "1F251", "1F238", "1F234", "1F233", "3297", "3299", "1F23A", "1F235", "25AA", "25AB", "25FB", "25FC", "25FD", "25FE", "2B1B", "2B1C", "1F536", "1F537", "1F538", "1F539", "1F53A", "1F53B", "1F4A0", "1F532", "1F533", "26AA", "26AB", "1F534", "1F535"],
			misc1: ['1f52f', '1f3e7', '1f4b9', '1f4b2', '1f4b1', 'a9', 'ae', '2122', '274c', '203c', '2049', '2757', '2753', '2755', '2754', '2b55', '1f51d', '1f51a', '1f519', '1f51b', '1f51c', '1f503', '1f55b', '1f567', '1f550', '1f55c', '1f551', '1f55d', '1f552', '1f55e', '1f553', '1f55f', '1f554', '1f560', '1f555', '1f556', '1f557', '1f558', '1f559', '1f55a', '1f561', '1f562', '1f563', '1f564', '1f565', '1f566', '2716', '2795', '2796', '2797', '2660', '2665', '2663', '2666', '1f4ae', '1f4af', '2714', '2611', '1f518', '1f517', '27b0', '3030', '303d', '1f531', '25fc', '25fb', '25fe', '25fd', '25aa', '25ab', '1f53a', '1f532', '1f533', '26ab', '26aa', '1f534', '1f535', '1f53b', '2b1c', '2b1b', '1f536', '1f537', '1f538', '1f539'],
			dingbatsAndMore: (function () {
				var base = ['2588', '2318'], more = [[0x2600, 0x2647], [0x2654, 0x266F], [0xb0, 0xb0]], i;

				more.forEach(function (range) {
					for (i = range[0]; i <= range[1]; i++) {
						base.push(i.toString(16));
					}
				});

				return base;
			}())
		},
		events: {
			toolbar: function (e, parent) {
				e.preventDefault();

				var css = '.gm_emoji_' + e.target.getAttribute('data-toolbar'), div = parent.querySelector(css);

				Array.from(parent.querySelectorAll('.gm_emoji_list:not(.gm_emoji_hidden):not(' + css + ')'))
					.forEach(function (e) { e.classList.add('gm_emoji_hidden'); });


				Array.from(parent.querySelectorAll('.gm_emoji_toolbar_button'))
					.forEach(function (e) { e.classList.remove('gm_emoji_selected'); });

				e.target.classList.toggle('gm_emoji_selected');
				div.classList.toggle('gm_emoji_hidden');
			},
			insert: function (e, textarea) {
				var target = e.target.hasAttribute('data-char') ? e.target : e.target.parentElement, start, end, pre, post, emo;
				if (textarea.selectionStart < 0) { return; }
				if (target.hasAttribute('data-char')) {
					if (textarea.selectionEnd > textarea.value.length) {
						textarea.selectionEnd = textarea.value.length;
					}
					start = textarea.selectionStart || 0;
					end = textarea.selectionEnd || 0;
					pre = textarea.value.substring(0, start);
					emo = (start > 0 ? ' ' : '') + target.getAttribute('data-char');
					post = emo + textarea.value.substring(end);
					textarea.value = pre + post;
					textarea.focus();
					textarea.setSelectionRange(start + emo.length, start + emo.length);
				}
			},
			wire: function (div, textarea) {
				div.addEventListener('click', function (e) {
					if (e.target.hasAttribute('data-toolbar')) {
						emoji.events.toolbar(e, div);
						return;
					}

					if (e.which === 1) {
						e.preventDefault();
						emoji.events.insert(e, textarea);
					}
				}, false);
			}
		},
		make: function (parent, textarea) {
			var div = $.e('div', { className: 'gm_emoji' });
			parent.appendChild(div);
			this.presentation.panel(div);
			this.events.wire(div, textarea);
		},
		css: (function () {

			update.css('.gm_emoji_selected { opacity: .7; } .gm_emoji_toolbar_button { cursor: pointer; }');
			update.css('.gm_emoji_hidden { display: none; }');
			update.css('.gm_emoji_toolbar > div { display: inline-block; width: 15px; }');

			/* Windows Chromium Browser Emoji Fix
			 * Emoji in Chrome-based browsers!
			 *
			 * Modifies font-family to include fonts that display Emoji
			 *
			 * Windows 7 Users: Install Symbola.ttf if you do not see all Emoji
			 * Find it here: http://users.teilar.gr/~g1951d/
			 */
			if (window.chrome) { // && /(?:win)/i.test(navigator.platform)
				update.css('.post, .postbit-post, .normal, textarea, input, .gm_emoji, a { font-family: "Helvetica Neue", sans-serif, "Apple Color Emoji", "Android Emoji", "Segoe UI Emoji", "Segoe UI Symbol", Symbola; }');
			}
		}())
	};

	// Quick Editor
	Editor = (function () {
		function Editor(el) {
			this.id = el.name.split('::')[2];
			this.show = 0;
			this.num = document.querySelector('a[href^="showpost.php?p=' + this.id + '&postcount="]').textContent; //.href.match(/(?:postcount=)(\d+)/)[1];
			this.dom(el);
			Editor.set[this.id] = this;
		}

		Editor.set = {};

		Editor.toggle = {
			displays : [
				['block', 'none', 'none'],
				['none', 'block', 'inline']
			],
			spin : ['none', 'inherit']
		};

		Editor.url = {
			gets  : 'ajax.php?do=quickedit&p=',
			posts : 'editpost.php?do=updatepost&postid=undefined'
		};

		Editor.fromLink = function (link) {
			link.textContent += '+';
			link.title = 'Quick Editor++';
			link.onclick = null;
			link.dataset.qqre = true;
			return new Editor(link);
		};

		Editor.fromOldLink = function (link) {
			return new Editor(link);
		};

		Editor.events = {
			quickEdit: function (e) {
				var qe;
				e.preventDefault();

				if (e.target && e.target.hasAttribute('data-qqre')) {
					qe = Editor.set[e.target.dataset.qqre] || Editor.fromOldLink(e.target);

					if (qe.x) {
						qe.toggle();
					} else {
						qe.gets();
					}
				}
			}
		};

		Editor.prototype = {
			constuctor: Editor,
			dom: function (el) {
				this.el = el;
				this.el.dataset.qqre = this.id;
				// this.el.addEventListener('click', Editor.events.quickEdit.bind(this), false);
				this.spin = document.getElementById('progress_' + this.id);
				this.post = document.getElementById('post_message_' + this.id);
				this.div = $.e('div', {className : 'inpost'}, this.post.parentNode);
			},
			gets: function () {
				this.x = new XMLHttpRequest();
				this.x.onprogress = bond(this, this.spinner)(true);
				this.x.open('POST', Editor.url.gets + this.id, true);
				this.x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //charset=UTF-8
				this.x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
				this.x.onload = this.load.bind(this);
				this.x.onerror = this.error.bind(this);
				this.x.send('securitytoken=' + Form.token() + '&do=quickedit&p=' + this.id + '&editorid=vB_Editor_QE_1');
			},
			buildPost: function () {
				return [
					'securitytoken=',
					Form.token(),
					'&do=updatepost&ajax=1&postid=',
					this.id,
					'&wysiwyg=0&message=',
					$.uriHtmlEncode(this.div.querySelector('textarea').value),
					'&reason=',
					$.uriHtmlEncode(this.div.querySelector('input[name="reason"]').value),
					'&postcount=',
					this.num
				].join('');
			},
			posts : function (e) {
				e.preventDefault();
				var s = this.buildPost(); //.call(this);
				this.p = new XMLHttpRequest();
				this.p.open('POST', Editor.url.posts + this.id, true);
				this.p.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
				this.p.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
				this.p.setRequestHeader('Content-Length', s.length);
				this.p.onload = this.update.bind(this);
				this.p.onerror = this.error.bind(this);
				this.p.send(s);
			},
			toggle : function () {
				var toggle = Editor.toggle.displays[this.show];
				this.el.style.display = toggle[2];
				this.div.style.display = toggle[0];
				this.post.style.display = toggle[1];
				app.state.activeBox = this.show ? app.state.form.elements.message : this.text;
				this.show = Number(!this.show);
			},
			spinner : function (show) {
				this.spin.style.display = Editor.toggle.spin[Number(!!show)];
			},
			load: function () {
				var t = this.xmlhtml(this.x, 'editor', 'textarea'), f;
				if (t && t[0]) {
					f = new Form(this.id, this.div, t[0].value, false, true, t[1]);

					this.extra = new Extra(this.id, true);
					this.text = this.div.querySelector('textarea');

					this.div.querySelector('.cancel_button').addEventListener('click', this.toggle.bind(this), false);
					document.getElementById('vB_Editor_' + this.id + '_save').addEventListener('click', this.posts.bind(this), false);

					update.js(';(function () { $vb_hook(' + this.id + '); }());');
				}
				this.spinner();
				this.toggle();
			},
			update: function () {
				var post = this.xmlhtml(this.p, 'postbit', '.post');
				try {
					this.post.innerHTML = post[0].innerHTML;
					this.toggle();
				} catch (e) {} //console.log(e);
			},
			error : function () {
				alert('QQRE: Request failed.');
				this.spin.style.display = 'none';
				this.x = null;
			},
			xmlhtml : function (attr, b, selector) { // b may be unnecessary
				try {
					// console.log(attr, this[attr].responseXML);
					var div = $.e('div', {innerHTML: attr.responseText}), r = '';
					// div.innerHTML = attr.responseText;
					div = div.querySelector(b);
					try {
						r = div.querySelector('editor[reason]').getAttribute('reason');
					} catch (er) {}
					return [div.querySelector(selector), r];
				} catch (e) {}
			}
		};
		return Editor;
	}());

	// Form Maker
	Form = (function () {

		function Form(id, parent, message, title, edit, reason) {
			if (!id || !parent) { return; }

			this.id = id;
			this.el = parent;
			this.message = $.h(message || '');
			this.title = $.h(title || '');
			this.edit = !!edit;
			this.reason = $.h(reason || '');

			this.elements = {};

			this.make();
		}

		Form.PRIMARY = 'quickreplyform_primary';

		Form.POST_KEY = 'uQQR.post';

		Form.STORAGE_KEY = 'uQQR';

		Form.userStorage = strg.read(Form.STORAGE_KEY);

		Form.threadId = null;

		Form.postId = null;

		Form.shared = {
			elements: {
				main: document.querySelector('#main .wrap'),
				closed: !!document.querySelector('a.large-button.disabled'),
				logged: document.querySelector('#usercptools'),
				postbits: function () { return document.querySelectorAll('.postbit:not(.ignored):not([data-qqre])'); },
				editButtons: function () { return document.querySelectorAll('a[href*="editpost"]:not([data-qqre])'); }
			},
			scriptVersion: (function () {
				try {
					return '?v=' + document.querySelector('script[src*="v="]').src.split('v=')[1];
				} catch (e) { return ''; }
			}()),
			reg: {
				'<blockquote>' : '[indent]',
				'<blockquote class\\="quote code">[^]+?<pre>([^]+?)<\\/pre>[^]+?<\\/blockquote>' : '[code]$1[/code]',
				'<\\/blockquote>' : '[/indent]',
				'<li>' : '[*]',
				'<\\/li>' : '',
				'<b>' : '[b]',
				'<\\/b>' : '[/b]',
				'<i>' : '[i]',
				'<\\/i>' : '[/i]',
				'<strike>' : '[strike]',
				'<\\/strike>' : '[/strike]',
				'<u>' : '[u]',
				'<\\/u>' : '[/u]',
				'<ul>' : '[list]',
				'<\\/ul>' : '[/list]\n',
				'<ol [^]+?>' : '[list=1]',
				'<\\/ol>' : '[/list]\n',
				'<img[^]+?src\\="data\\:image[^]+?>' : '',
				'<img[^]+?src\\="([^]+?)"[^]+?>' : '[img]$1[/img]',
				'<a href\\="mailto\\:([^]+?)">([^]+?)<\\/a>' : '[email="$1"]$2[/email]',
				'<a[^]+?href\\="([^]+?)"[^]+?>' : '[url="$1"]',
				'</a>' : '[/url]',
				'<span style\\="color\\: #e21212">([^]+?)<\\/span>' : '$1',
				'<span class\\="?spoiler".*?>([^]+?)<\\/span>' : '[spoiler]$1[/spoiler]',
				'<span class\\="highlight">([^]+?)<\\/span>' : '[highlight]$1[/highlight]',
				'<br.?\\/?>' : '',
				'<span [^]+?<\\/span>' : '',
				'<div [^]+?<\\/div>' : '',
				'<.*?>' : '',
				'\\[I\'m an idiot\\.\\]' : 'lol'
			},
			buttons: ['removeformat', 'space', 'undo', 'redo', 'space', 'bold', 'italic', 'underline', 'space', 'insertorderedlist', 'insertunorderedlist', 'outdent', 'indent', 'space', 'createlink', 'unlink', 'email', 'insertimage', 'space', 'quote', 'code', 'space', 'resize'],
			quote: {
				$replaceImgWithUrlP1: function (text) {
					return text.replace(/\[img\]/i, 'Link[/url] : [url="');
				},
				replaceImgWithUrl: function (text) {
					return text.replace(/\[url\=\".+?\"\]\[img\]/ig, Form.shared.quote.$replaceImgWithUrlP1)
							.replace(/\[\/img\]\[\/url/ig, '"]Image[/url')
							.replace(/(?:\[(\/?)img\])/ig, '[$1url]');
				},
				add: function (post) {
					if (Form.userStorage.u) {
						post = Form.shared.quote.replaceImgWithUrl(post);
					}

					app.state.activeBox.value += app.state.activeBox.value ? ('\n\n' + post) : post;

					if (app.state.activeBox.id === app.state.form.elements.message.id) {
						Form.events.saveStorage();
					}
				},
				unquote: function (post) {
					var div = $.e('div', {innerHTML: post}), e = div.querySelectorAll('.quote:not(.code)'), i = e.length;
					while (i--) {
						try {
							div.removeChild(e[i]);
						} catch (er) {}
					}
					return div.innerHTML;
				}
			},
			loadIds: function () {
				try {
					Form.threadId = +document.querySelector('.left a[href*="showthread.php?t="]').href.match(/t\=(\d+)/)[1];
					Form.postId = +document.querySelector('a[href^="newreply.php?do=newreply&noquote=1&p="]').href.match(/p\=(\d+)/)[1];
				} catch (e) {}
				return (Form.threadId && Form.postId);
			},
			tokenFromPage: function () {
				try {
					return document.getElementsByTagName('head')[0].textContent.match(/SECURITYTOKEN = "(.+?)"/)[1];
				} catch (e) { /*alert('Quick Quote, Reply and Edit encountered an error.'); */ return ''; }
			},
			loadScript: function () {
				var s = $.e('script', {type: 'text/javascript', src: '/forum/clientscript/vbulletin_textedit.js' + Form.shared.scriptVersion});
				s.addEventListener('load', function () {
					embedScript(function () {
						window.$vb_hook = function (id) {
							window.vB_Editor['vB_Editor_' + id] = new window.vB_Text_Editor('vB_Editor_' + id, 0, 3, 1);
						};

						var vbphrase = window.vbphrase || [];
						vbphrase.enter_list_item = 'Enter a list item.';
						vbphrase.message_too_short = 'Your message is too short.';
						vbphrase.enter_link_url = 'URL:';
						vbphrase.enter_image_url = 'Image URL:';
						vbphrase.enter_email_link = 'E-mail:';
						window.vbphrase = vbphrase;

						window.$vb_hook('001');
					});
				}, false);
				document.body.appendChild(s);
			}
		};

		Form.events = {
			clickDelegate: function (e) {
				if (e.target && e.target.title === 'Quick Quote') {
					Form.events.quickQuote(e);
				}
				if (e.target && e.target.title === 'Quick Editor++') {
					Editor.events.quickEdit(e);
				}
			},
			quickQuote: function (e) {
				// if (e.target && e.target.title === 'Quick Quote') {
				e = e.target;
				var user = e.getAttribute('data-user'), pid = e.getAttribute('data-post-id'), id = e.getAttribute('data-id'),
					i, re, post = Form.shared.quote.unquote(document.getElementById(pid).innerHTML);
				for (i in Form.shared.reg) {
					if (Form.shared.reg.hasOwnProperty(i)) {
						re = new RegExp(i, 'ig');
						post = post.replace(re, Form.shared.reg[i]);
					}
				}
				post = '[quote=' + user + ';' + id + ']' + $.h(post) + '[/quote]\n';
				e.className = 'multiquotelink quickquotes quickquoted';
				Form.shared.quote.add(post);
				// }
			},
			submit: function (e) {
				if (Form.shared.elements.logged) {
					strg.save(Form.POST_KEY, {threadId: Form.threadId});
				} else {
					e.preventDefault();
					document.location.hash = '#';
					alert('Please login!');
					document.location.hash = '#top';
					Form.events.saveStorage();
				}
			},
			toggleImageQuotes: function (e) {
				var k = String.fromCharCode(e.which).toLowerCase();
				if (e.altKey && e.shiftKey && (k === 't' || k === '\u02C7')) {
					e.preventDefault();
					Extra.click(app.state.form.elements.convert);
					alert('Notice: Converting IMG to URL ' + (app.state.form.elements.convert.checked ? 'enabled.' : 'disabled.'));
				}
			},
			saveStorage: function () {
				app.model.saveStorage();
			},
			clear: function () {
				if (this.value === 'Clear') {
					app.state.form.elements.title.value = app.state.form.elements.message.value = '';
					app.state.form.elements.message.focus();
				}
				app.model.clearStorage();
			},
			textStore: function (e) {
				sessionStorage.setItem('qqre-temp', JSON.stringify({
					id: Form.threadId,
					title: app.state.form.elements.title.value,
					text: e.target.value,
					z: +(new Date())
				}));
			}
		};

		Form.token = function () {
			var s = greaseWindow.SECURITYTOKEN;
			return typeof s === 'string' ? s : '';
		};

		Form.canAdd = function () {
			return Form.shared.elements.main && Form.shared.loadIds();
		};

		Form.removePreviousPost = function () {
			if (Form.hasJustPosted()) {
				// console.log('I think you have just posted, so I will clear previous post . . .');
				app.model.clearStorage();
			}
		};

		Form.hasJustPosted = function () {
			var id,
				tid = +strg.grab(Form.POST_KEY).threadId,
				hash = document.location.hash.substr(1),
				last = (function (posts) { return posts.length > 0 ? posts[posts.length - 1] : null; }(document.querySelectorAll('.mypost')));

			console.log('just posted?');
			if (tid === Form.threadId && last) {
				id = last.id;
				console.log(id, hash, tid);

				if (/(?:posted=1)/.test(document.location.href) && id === hash) {
					console.log('just posted : 1');
					return true;
				}
				if (/(?:post(\d+))/.test(document.location.hash) && id === hash) {
					console.log('just posted : 2');
					return true;
				}
			}
			return false;
		};

		Form.prototype = {
			constructor: Form,
			lastTabIndex: function () {
				var tabs = document.querySelectorAll('[tabindex]'), i, tabIndex = 0;

				for (i = 0; i < tabs.length; i++) {
					if (tabs[i].tabIndex > tabIndex) {
						tabIndex = tabs[i].tabIndex;
					}
				}

				return tabIndex;
			},
			make: function () {
				var	f = $.e('form', {className: 'quickreplyformp', action: this.id === '001' ? 'newreply.php?post=1' : 'editpost.php', name: 'vbform', method: 'post', onsubmit: 'return vB_Editor["vB_Editor_' + this.id + '"].prepare_submit(0, 1)'}, this.el),
					d = $.e('div', {className: this.id === '001' ? 'alt1 newreplybox' : 'alt2 newreplybox'}, f),
					p = $.e('p', null, d),
					editor = $.e('div', {id: 'vB_Editor_' + this.id, className: 'vBulletin_editor'}, d),
					container = $.e('div', {innerHTML: '<div class="text_emo_container"><div class="text_emo_container_text"></div><div class="text_emo_container_emo"></div></div>'}, d),
					r = $.e('div', {className: 'quickreplyform_hotspot'}, d),
					index = this.lastTabIndex() + 1;

				this.elements.buttons = $.e('div', {className: 'quickreplyform_buttons'}, r);
				this.elements.message = $.e('textarea', {dir: 'ltr', tabIndex: index, cols: 60, rows: 10, _width: '98%', _height: '150px', id: 'vB_Editor_' + this.id + '_textarea', name: 'message', value: this.message});
				this.elements.control = $.e('div', {id: 'vB_Editor_' + this.id + '_controls', className: 'control'}, editor);

				container.querySelector('.text_emo_container_text').appendChild(this.elements.message);
				emoji.make(container.querySelector('.text_emo_container_emo'), this.elements.message);

				if (this.edit) {
					this.elements.reason = $.e('input', {className: 'biginput', type: 'text', title: 'Optional', maxlength: 125, size: 50, name: 'reason', value: this.reason}, p);
					$.e('small', {title: 'Reason for editing.', _cursor: 'help', textContent: ' Reason'}, p);
				} else {
					this.elements.title = $.e('input', {size: 50, name: 'title', className: 'biginput', type: 'text', value: this.title}, p);
					$.e('small', {title: 'Optionally, set a title for your post.', _cursor: 'help', textContent: ' Title'}, p);
				}

				$.e('input', {type: 'hidden', name: 'securitytoken', id: '', value: Form.token()}, r);
				$.e('input', {type: 'hidden', name: 'wysiwyg', id: '', value: 0}, r);
				$.e('input', {type: 'hidden', name: 's', value: ''}, r);
				$.e('input', {type: 'hidden', name: 'do', value: this.id === '001' ? 'postreply' : 'updatepost'}, r);
				$.e('input', {type: 'hidden', name: 't', value: Form.threadId}, r);
				$.e('input', {type: 'hidden', name: 'p', value: this.id === '001' ? Form.postId : this.id}, r);
				$.e('input', {type: 'hidden', name: 'posthash', value: ''}, r);
				$.e('input', {type: 'hidden', name: 'poststarttime', value: ''}, r);
				$.e('input', {type: 'hidden', name: 'parseurl', value: 1}, r);

				this.elements.submit = $.e('input', {type: 'submit', name: 'sbutton', value: 'Submit', id: 'vB_Editor_' + this.id + '_save', className: 'large-button submit', tabIndex: index, accesskey: 's', title: 'Submit your reply.'}, this.elements.buttons);

				if (this.edit) {
					this.elements.cancel = $.e('input', {type: 'button', name: 'cancel', value: 'Cancel', className: 'large-button submit cancel_button', tabIndex: index, accesskey: 'c', title: 'Cancel your reply.'}, this.elements.buttons);
				}

				this.elements.preview = $.e('input', {type: 'submit', name: 'preview', value: 'Preview', className: 'large-button submit', tabIndex: index, accesskey: 'p', title: 'Preview your reply.'}, this.elements.buttons);

				$.e('div', {innerHTML: '<p style="text-align:center" onclick="this.nextSibling.style.display = this.nextSibling.style.display === \'block\' ? \'none\' : \'block\'"><span class="qqre_shortcuts" title="Click to see.">View <b class="qqreb">' + (Extra.mac ? '&#8984;' : 'CTRL') + '</b> Shortcuts</span></p><ul id="qqreshortcuts" style="display:none"><li><b class="qqreb">B</b> Bold</li><li><b class="qqreb">I</b> Italic</li><li><b class="qqreb">U</b> Underline</li><li><b class="qqreb">S</b> Strike</li><li><b class="qqreb">H</b> Highlight</li><li><b class="qqreb">P</b> Spoiler</li><li><b class="qqreb">L</b> URL</li><li><b class="qqreb">M</b> Image</li><li><b class="qqreb">E</b> Save*</li><li><b class="qqreb">D</b> Clear*</li><li>*Only for quick reply box.</li></ul>'}, r);

				this.addButtons();

				this.elements.body = f;
				this.elements.hotspot = r;
			},
			makePrimary: function () {
				this.elements.body.id = Form.PRIMARY;

				this.elements.save = $.e('input', {type: 'button', name: 'sbutton1', value: 'Save', id: 'quicksavebutton', className: 'large-button submit', tabIndex: this.elements.submit.tabIndex, title: 'Save your reply.', $action: 'save'});
				this.elements.buttons.insertBefore(this.elements.save, this.elements.submit.nextSibling);

				this.elements.clear = $.e('input', {type: 'button', name: 'sbutton2', value: 'Clear', id: 'quickclearbutton', className: 'large-button submit', tabIndex: this.elements.preview.tabIndex, title: 'Clear text.'}, this.elements.buttons);
				this.elements.temp = this.elements.message;

				this.elements.subscribe = $.e('div', {innerHTML: '<label><input type="checkbox"> Modify subscription<label><br>'}, this.elements.hotspot);
				this.elements.subscription = $.e('select', {id: 'qqre_subs', name: 'emailupdate', innerHTML: '<option value="9999">Do not subscribe</option> <option value="0">No email notification</option> <option value="1">Instant email notification</option> <option value="2">Daily email notification</option> <option value="3">Weekly email notification</option>'});
				this.elements.convert =	$.e('label', {'for': 'qqre_img', innerHTML: '<input type="checkbox" id="qqre_img"> Convert [IMG] to [URL] tags on quoted posts (ALT+SHIFT+T)', title: 'Convert [IMG] to [URL]', id: 'qqre_labelimg2url'}, this.elements.hotspot);
				this.elements.convert = app.state.form.elements.convert.querySelector('input');

				this.wire();
			},
			addButtons: function () {
				var i, j = Form.shared.buttons.length;

				for (i = 0; i < j; i++) {
					this.createButton(Form.shared.buttons[i]);
				}
			},
			createButton: function (type) {
				var buttonId;
				switch (type) {
				case 'space':
					$.e('img', {width: 6, height: 20, alt: '', src: 'images/neogaf/editor/separator.gif'}, $.e('div', false, this.elements.control));
					break;
				case 'quote':
				case 'code':
					buttonId = 'vB_Editor_' + this.id + '_cmd_wrap0_';
					break;
				case 'resize':
					$.a($.e('div', {className: 'imagebutton resize_merger'}, this.elements.control),
						$.e('div', {className: 'imagebutton', id: 'vB_Editor_' + this.id + '_cmd_resize_0_100'}, $.e('img', {src: 'images/neogaf/editor/resize_0.gif', height: 9, width: 21, alt: 'Decrease Size'}), true),
						$.e('div', {className: 'imagebutton', id: 'vB_Editor_' + this.id + '_cmd_resize_1_100'}, $.e('img', {src: 'images/neogaf/editor/resize_1.gif', width: 21, height: 9, alt: 'Increase Size'}), true));
					break;
				default:
					buttonId = 'vB_Editor_' + this.id + '_cmd_';
					break;
				}
				if (buttonId) {
					$.e('img', {src: 'images/neogaf/editor/' + type + '.gif', width: 21, height: 20, alt: type}, $.e('div', {className: 'imagebutton', id: buttonId + type}, this.elements.control));
				}
			},
			wire: function () {
				var sub = this.elements.subscribe;

				function throttle(f, delay) {
					var timer = null;
					return function () {
						var context = this, args = arguments;
						clearTimeout(timer);
						timer = window.setTimeout(function () {
							f.apply(context, args);
						}, delay || 1000);
					};
				}

				this.elements.message.addEventListener('input', throttle(Form.events.textStore, 250), false);
				this.elements.submit.addEventListener('click', Form.events.submit, false);
				this.elements.save.addEventListener('click', Form.events.saveStorage, false);
				this.elements.clear.addEventListener('click', Form.events.clear, false);
				this.elements.convert.addEventListener('click', Form.events.saveStorage, false);
				sub.querySelector('input[type="checkbox"]').addEventListener('click', function () {
					if (this.checked) {
						sub.appendChild(app.state.form.elements.subscription);
					} else {
						sub.removeChild(app.state.form.elements.subscription);
					}
				}, false);

				// document.addEventListener('click', Form.events.quickQuote, false);
				document.addEventListener('click', Form.events.clickDelegate, false);
				window.addEventListener(Extra.keyEvent, Form.events.toggleImageQuotes, false);
			}
		};

		return Form;

	}());

	app = {
		state: {
			activeBox: null,
			form: null
		},
		path: (function () {
			document.location.pathname.match(/(\w+)\.php/);
			return RegExp.lastParen;
		}()),
		main: function () {
			if (Form.token()) {
				app.go();
			} else {
				console.log('Token unavailable . . .');

				if (window.postMessage) {
					console.log('Adding message');

					window.addEventListener('message', function (event) { // add messenger listener to this page
						if (event.data.type && (event.data.type === 'QQRE_PAGE')) {
							greaseWindow[event.data.prop] = event.data.val;
							if (event.data.prop === 'SECURITYTOKEN') {
								app.go();
							}
						}
					}, false);

					// post message from page scope
					embedScript(function () {
						window.postMessage({ type: 'QQRE_PAGE', prop: 'SECURITYTOKEN', val: window.SECURITYTOKEN }, '*');
					});
				} else {
					Form.token = Form.shared.tokenFromPage;
					if (Form.token()) {
						app.go();
					}
				}
			}
			// console.log(app);
		},
		go: function () {
			(this.actions[this.path] || this.actions.$default)();
		},
		actions: {
			$default: function () {
				try {
					Form.threadId = +document.querySelector('[name="t"]').value;
				} catch (e) {}

				app.views.single(document.getElementById('vB_Editor_001_textarea'));
			},
			'private': function () {
				app.views.single(document.querySelector('#vB_Editor_QR_textarea, #vB_Editor_001_textarea'));
			},
			showthread: function () {
				app.views.quickReply();
			}
		},
		assets: {
			button: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGRjg5NTBEMDYwODdFMDExQkE4RUNGOEQ3QzZENjU2MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowN0ZGNkM2MERCMEUxMUUyOTQwNkExQjg0NkYxQ0M0OCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowN0ZGNkM1RkRCMEUxMUUyOTQwNkExQjg0NkYxQ0M0OCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMDgyRDgxNkQ5ODdFMDExOTI4RUREM0QyQUUxREY5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRjg5NTBEMDYwODdFMDExQkE4RUNGOEQ3QzZENjU2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoXp4HUAAAQmSURBVHjatJdPiBxFFMa/6q7umZ6emZ1d1EkwHmT3EKIkIkgMiLAERFZvwYPexD8n8RLQEC85JnowHr16UUEPhrgadfEiogYGMyaRkF33ICKLgpqd3Z0/3V35qrtmttMzu85mZh78mJ7urnqvvqr3qlo03nMwpBXJM2SePEIeJFPm2X9klfxMviWfk0ZfD8ICLAlIduVV8MWVCKLxzv86niNvkueJP2SwG+RDco4spyKgcxdwCoA7hQtXGA8i3h9Mnpwl18jLxN/l3Sy+aaPbnjN98b4CgighDImCjB/02yz5xEg9inG4eIM8RZ6L1RAmEINE0NfoUbJIqhif6YF8RxZILQ5CJWSnYI58Sap7kHtYqnHfAX1o52FyX8YXiXlG9nsxOdN9f0qfj5OtRAHVk+MMOZL6PykOc+RnennRON1bdL8SB5M2my4crwOvfOjCNWvZiqcgxCnimOvJE9FXhFOKa0Csn0RJKfy5hyKzo1kiUTlVdvpNOlCuhyhf3vjsurVfhgEWmI6+yjQSmdZKZaqq2L6nTDvb2u5DiO37vT40TPvIZi0K4LcDsSC32jiua4IKk1ctqWANCGBQIHEtYTv9q0cv2dZh57YArLRTg34PdpKVm0pgq4Xj4vA+7we6O5oemRhCbmWCUSkFdBBHKhHOzzfj627R63DUHXpdvGHj/VUPfsFHaaaMf5rRj/Jv4c8KIe5u0gc0OzS9ibCj5VDxY0qNjbbAxRsWTl/NoVTKo8ytIRAeWqI9K3OuUx5nlj08EyEKkinQynQ63JuN81zOBf3B83JwHQeddlCW43RetBXmym0IU2q1ApdWbLx11Y2d5/Mu18mdLnWgt8YVwGNTLfgWFzEDYCy49JuN12sOa4/DAPjLNMlM9y0ZKbXCi3vGEcCT0y1uKNxiuTq/WrXw6mUHjuvGkktpmyxSPWgrWoH6uBQ4NtNiiVP4+ncbL12m3By5lt227VQaqyR7kgDqOoClcTg/WAiw3w2x9IfEiz9Rbs51d853SbIlrdaiOcONVIrnp5tYWnPxSk3SqWVkl33FKzUFm2RRK7BOPhpVgQbT7bVfClA89eZz3ZHvWl/0oXVdPHCg2j35Xh9pO+bWFoTJAVPP+U7OHS5G3/c6laniQ81m+2a3ZOuj87ujKKDrnna8m/OUnSc342J64P770kcy7gs8sUzQqECdChybrpQ2qYBO2d4K2SInyPcTPBf+xbpzQi/AyCxGK/OCnoqnydoEnK+ZvpfvKMXpymSokSdIfcCzu6Vu+qylU7G7FwwyHaU+I7ytN7QRRt0xfRzNjrx3Ri0WvZ0a62+mb0yN0C8d3EOa6vX0AXmBfGz6SkZs2fG+kM/neFbg1/G+6tD7kP48fzbzeV4xz/7NfJ5fHPh5rj8WXYmCl0elUuGRLMRtAQYAYbshc70RBucAAAAASUVORK5CYII='
		},
		views: {
			single: function (textarea) {
				var parent, id, container;

				if (!textarea) { return; }

				parent = textarea.parentElement;
				container = $.e('div', {innerHTML: '<div class="text_emo_container"><div class="text_emo_container_text"></div><div class="text_emo_container_emo"></div></div>'});

				container.querySelector('.text_emo_container_text').appendChild(textarea);
				textarea.style = '';
				parent.appendChild(container);
				emoji.make(container.querySelector('.text_emo_container_emo'), textarea);

				id = textarea.id.match(/vB_Editor_(\w+)_/)[1];

				document.getElementById('vB_Editor_001_save').addEventListener('click', Form.events.submit, false);

				return new Extra(id);
			},
			quickReply: function () {
				if (Form.token() && !Form.shared.elements.closed) {
					update.css('.quickreplyformp div.vBulletin_editor { background: transparent; border: 0; padding: 0 } #quickreplybox { position:fixed; top:0; left:0; width: 100%; background: transparent; text-align: center; } #quickreplybox span { background: #4aa4b7; color: #fff; padding: 3px; border-radius: 3px } #quickreplybox span:hover { background: #47a947; cursor: pointer} .hide { display: none; } .newreplybox { font-family: Arial, Verdana, sans-serif; max-width: 800px; margin: auto; padding: 9px 8px 6px} .inpost .newreplybox { width: 90% !important; border: 1px solid #ccc} .quickreplyformp textarea {font-size:110%; display:block; margin: auto} .newreplybox .vBulletin_editor { border: 0 none !important; } .newreplybox p { margin: .5em 0 .1em; text-align: center} .quickquotes, .quickquoted { cursor: pointer; background: url(' + app.assets.button + ') no-repeat; -moz-background-size: 16px 16px; background-size: 16px 16px; width:16px; height:16px; margin-right:2px; transition-duration: .2s; } .quickquotes:hover{opacity:.8} .quickquotes:active,.quickquoted,.quickquoted:hover{opacity:.5} #quickreplyformpoff { position: fixed; z-index: 1000; top: 28px; left: 150px; } #vB_Editor_001 { border: none; background: transparent; margin: 0; padding: 0 } \n.newreplybox .imagebutton { border: 0 !important; padding: 1px !important; margin: 0 2px;} .resize_merger.imagebutton { background: transparent !important; padding: 0 !important; vertical-align: middle; } .newreplybox .imagebutton:hover img { background-color: #C1D2EE; border-radius: 2px } .newreplybox .control { text-align:center; padding: 0px; margin: 4px auto 2px auto; } .newreplybox .control > div { display:inline-block } .newreplybox .large-button.submit:focus { outline: none;border-radius:3px; background-color:#01518E; border:0; color:#eee;} .newreplybox .large-button.submit:active{ outline: none; border-radius: 3px; background-color:#666; border:0; color:#fff; } \n.post { min-height: 108px } .editarea .newreplybox { width: 650px; margin: 12px 6px } .editarea textarea { width: 99% !important; } .editarea textarea, .biginput { border:1px solid #bbb } .newreplybox input[type="radio"],.newreplybox input[type="checkbox"]{width:13px;height:13px;padding:0;margin:0 0 0 4px;position:relative;top:-1px;}.inpost .newreplybox{width: 94%} .qqre_shortcuts {font-weight:bold;cursor:pointer} .qqre_shortcuts:hover {text-decoration:underline}  #qqreshortcuts { margin: 5px auto; padding: 0; text-align: center; width:500px} #qqreshortcuts li {text-align:left; display: inline-block; padding: 0 3px; width:7em} #qqreshortcuts li:last-child{text-align:center;display:block;width:auto} #vB_Editor_001_cmd_wrap0_spoiler { visibility:hidden !important } .qqreb {line-height:1.2;color:#333;font-family:"Andale Mono",Consolas,monospace;background: none repeat scroll 0 0 rgba(248, 245, 245, 0.62); border: 1px solid #b1b1b1; border-radius: 3px; display: inline-block; padding: 0 5px; }');

					app.views.editLinks();
					if (Form.canAdd()) {
						Form.removePreviousPost();
						app.views.initialForm();
					}
				}
			},
			initialForm: function () {
				if (!document.querySelector(Form.PRIMARY)) {
					// console.log('creating new primary form');

					app.state.form = new Form('001', Form.shared.elements.main);
					app.state.form.makePrimary();

					Form.shared.loadScript();

					app.state.form.extra = new Extra(app.state.form.id, true);
					app.state.form.extra.BB.clear = app.state.form.elements.clear;
					app.state.form.extra.BB.save = app.state.form.elements.save;

					app.model.init();

					app.state.form.elements.convert.checked = Form.userStorage.u;

					app.state.activeBox = app.state.form.elements.message;
					app.views.addQuickButtons();

					// document.dispatchEvent(new CustomEvent('LiveThreadUpdate'));
					document.addEventListener('LiveThreadUpdate', app.events.liveUpdate, false);
				}
			},
			editLinks: function () {
				embedScript(function () {
					// prevents Chrome from opening the default editor
					var i, a = document.querySelectorAll('a.post-button');
					for (i = 0; i < a.length; i++) {
						a[i].onclick = null;
					}
				});

				var buttons = Form.shared.elements.editButtons(), i = buttons.length;
				while (i--) {
					Editor.fromLink(buttons[i]);
				}
			},
			addQuickButtons: function () {
				return app.state.form && !Array.prototype.slice.call(Form.shared.elements.postbits()).forEach(function (postbit) {
					var post, button, user, quick;

					postbit.dataset.qqre = true;
					button = postbit.querySelector('.multiquotelink, .post-button');

					if (button) {
						post = postbit.querySelector('.post');
						user = postbit.querySelector('.postbit-details-username a');

						quick = $.e('i', { title: 'Quick Quote', '$data-user': user.textContent, '$data-post-id': post.id, '$data-id': post.id.match(/\d+/)[0], className: 'multiquotelink quickquotes' });
						button.parentElement.insertBefore(quick, button.parentElement.firstElementChild);
					}
				});
			}
		},
		model: {
			init: function () {
				if (strg.zero(Form.userStorage)) {
					app.model.saveStorage();
				}

				this.textLoad();
			},
			saveStorage: function () {
				Form.userStorage = {
					i: Form.threadId,
					t: app.state.form.elements.title.value,
					c: app.state.form.elements.message.value,
					u: app.state.form.elements.convert.checked,
					z: +(new Date())
				};

				strg.save(Form.STORAGE_KEY, Form.userStorage);
				// console.log('saveStorage', Form.userStorage);
			},
			clearStorage: function () {
				Form.userStorage = {i: 0, t: '', c: '', u: app.state.form ? app.state.form.elements.convert.checked : Form.userStorage.u};
				strg.save(Form.STORAGE_KEY, Form.userStorage);
				strg.wipe(Form.POST_KEY);
				sessionStorage.removeItem('qqre-temp');
			},
			textLoad: function () {
				var session = JSON.parse(sessionStorage.getItem('qqre-temp') || '{}'),
					load = {title: '', text: ''};

				if (Form.userStorage.i === Form.threadId) {
					load.title = Form.userStorage.t;
					load.text = Form.userStorage.c;
				}

				if (session.id === Form.threadId && (!Form.userStorage.z || Form.userStorage.z < session.z)) {
					load.text = session.text;
					load.title = session.title;
				}

				app.state.form.elements.title.value = load.title;
				app.state.form.elements.message.value = load.text;
			}
		},
		events: {
			liveUpdate: function () {
				console.log('qqre: live thread update');
				app.views.editLinks();
				app.views.addQuickButtons();
			}
		}
	};

	app.main();

	// greaseWindow.app = app;
	// greaseWindow.strg = strg;

}());

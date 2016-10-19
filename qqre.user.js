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

		Extra.buttons = ['Spoiler', 'Highlight', 'Strike'];
		Extra.images  = [
			'/forum/images/neogaf2/misc/spoiler.gif',
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0QTZDNkZFMTMxOEFFMDExOEQ0RTk2MjY1NjVFQUVDQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozM0I5QzRFMjhBMzUxMUUwOEVEMUQ5RkU1NzlCRTAwRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozM0I5QzRFMThBMzUxMUUwOEVEMUQ5RkU1NzlCRTAwRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0QTZDNkZFMTMxOEFFMDExOEQ0RTk2MjY1NjVFQUVDQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QTZDNkZFMTMxOEFFMDExOEQ0RTk2MjY1NjVFQUVDQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkUW7xgAAAB/SURBVHjaYvz//z8DtQETAw3ACDeUBZfEGUX1AiDljyZ8F4iVkfkm92+mEG0oEEwA4jggNoTyFYD4IRB/A2JOIP4OxI7keP8jEvshlP6JRg9wmGIB76E0PzVjXxCKP46MxA9Kp+pA/AGKzwHxHKjcByg9B5tGxtFSagQbChBgAHoVG8AVO051AAAAAElFTkSuQmCC',
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0QTZDNkZFMTMxOEFFMDExOEQ0RTk2MjY1NjVFQUVDQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRjk5MzM3NjhBMzQxMUUwOTcxNkNDQzlBQjRERDVEMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRjk5MzM3NThBMzQxMUUwOTcxNkNDQzlBQjRERDVEMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0QTZDNkZFMTMxOEFFMDExOEQ0RTk2MjY1NjVFQUVDQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QTZDNkZFMTMxOEFFMDExOEQ0RTk2MjY1NjVFQUVDQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpIU3swAAAEzSURBVHjaYvz//z8DtQETAw3AqKG4QVhoKIOEuHgBIyPjfhDW09PrB/LXg8TxAlDs48Ia6ur1ICXiYmIOSkpKCkD2ekFBwf+hISF49eF16ZevXx1AtLqGhoKxkdEDOzu7RCD3AyHvM6KnUycnJzj74cOH8+/du5cAYsvIyBzQ09VtfPny5Qc+fv4LMDX79u3DMJQFh2VbgNhbXl6eAYShwOH7jx8OQANh/K1A7INNMy5DwYpFhIUNvn79+uDS5csJT548yQcKgcKVwcXZOfHvv38LyIr94ydO9P/69ctAVVV1gqOjoyIwksAGAS2Sx6cPw6XIYSQrK8tw9ty5fmAkBQINfMDGynoRJM7KxnYQW1gS8j4cAF36YM/eveeBTFDkKACTVyIQHyAp9kfz/ggyFCDAAMW7jH/4BUY6AAAAAElFTkSuQmCC'
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
	update.css('td.imgbtnemu div:hover { border:1px solid #316ac5; margin: -1px; background: #c1d2ee; } td.imgbtnemu div:active { background: #98b5e2; } #vB_Editor_001_cmd_wrap0_spoiler { visibility:hidden !important } .quickreplyform_hotspot{text-align:center;margin-top:6px} .text_emo_container { text-align: center; margin-top: 8px; } .text_emo_container > div {vertical-align: top} .text_emo_container .text_emo_container_text {display:inline-block;margin: 0 0 0 4%;width:70%} .text_emo_container .text_emo_container_emo {width:18%;margin: 0 0 0 1%;display:inline-block;overflow:hidden} .text_emo_container_text textarea {width:99%} .gm_emoji {height:157px;overflow: auto;resize:both} .gm_emoji a {font-size:18px;line-height:1.2;cursor:pointer}');

	// Emoji Stuff <3 OSX 10.9+ Command+Control+Space
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
		db: {
			faces: ['1f604', '1f603', '1f600', '1f60a', /*'263a',*/ '1f609', '1f60d', '1f618', '1f61a', '1f617', '1f619', '1f61c', '1f61d', '1f61b', '1f633', '1f601', '1f614', '1f60c', '1f612', '1f61e', '1f623', '1f622', '1f602', '1f62d', '1f62a', '1f625', '1f630', '1f605', '1f613', '1f629', '1f62b', '1f628', '1f631', '1f620', '1f621', '1f624', '1f616', '1f606', '1f60b', '1f637', '1f60e', '1f634', '1f635', '1f632', '1f61f', '1f626', '1f627', '1f608', '1f47f', '1f62e', '1f62c', '1f610', '1f615', '1f62f', '1f636', '1f607', '1f60f', '1f611', '1f472', '1f473', '1f46e', '1f477', '1f482', '1f476', '1f466', '1f467', '1f468', '1f469', '1f474', '1f475', '1f471', '1f47c', '1f478'],
			cats: ['1f63a', '1f638', '1f63b', '1f63d', '1f63c', '1f640', '1f63f', '1f639', '1f63e'],
			otherFaces: ['1f479', '1f47a', '1f648', '1f649', '1f64a', '1f480', '1f47d', '1f4a9'],
			misc: ['1f525', '2728', '1f31f', '1f4ab', '1f4a5', '1f4a2', '1f4a6', '1f4a7', '1f4a4', '1f4a8', '1f442', '1f440', '1f443', '1f445', '1f444', '1f44d', '1f44e', '1f44c', '1f44a', '270a', '270c', '1f44b', '270b', '1f450', '1f446', '1f447', '1f449', '1f448', '1f64c', '1f64f', '261d', '1f44f', '1f4aa', '1f6b6', '1f3c3', '1f483', '1f46b', '1f46a', '1f46c', '1f46d', '1f48f', '1f491', '1f46f', '1f646', '1f645', '1f481', '1f64b', '1f486', '1f487', '1f485', '1f470', '1f64e', '1f64d', '1f647'],
			fashion: ['1f3a9', '1f451', '1f452', '1f45f', '1f45e', '1f461', '1f460', '1f462', '1f455', '1f454', '1f45a', '1f457', '1f3bd', '1f456', '1f458', '1f459', '1f4bc', '1f45c', '1f45d', '1f45b', '1f453', '1f380', '1f302', '1f484'],
			hearts: ['1f49b', '1f499', '1f49c', '1f49a', '2764', '1f494', '1f497', '1f493', '1f495', '1f496', '1f49e', '1f498', '1f48c', '1f48b', '1f48d', '1f48e', '1f464', '1f465', '1f4ac', '1f463', '1f4ad'],
			animals: ['1f436', '1f43a', '1f431', '1f42d', '1f439', '1f430', '1f438', '1f42f', '1f428', '1f43b', '1f437', '1f43d', '1f42e', '1f417', '1f435', '1f412', '1f434', '1f411', '1f418', '1f43c', '1f427', '1f426', '1f424', '1f425', '1f423', '1f414', '1f40d', '1f422', '1f41b', '1f41d', '1f41c', '1f41e', '1f40c', '1f419', '1f41a', '1f420', '1f41f', '1f42c', '1f433', '1f40b', '1f404', '1f40f', '1f400', '1f403', '1f405', '1f407', '1f409', '1f40e', '1f410', '1f413', '1f415', '1f416', '1f401', '1f402', '1f432', '1f421', '1f40a', '1f42b', '1f42a', '1f406', '1f408', '1f429', '1f43e'],
			plants: ['1f490', '1f338', '1f337', '1f340', '1f339', '1f33b', '1f33a', '1f341', '1f343', '1f342', '1f33f', '1f33e', '1f344', '1f335', '1f334', '1f332', '1f333', '1f330', '1f331', '1f33c'],
			weather: ['1f310', '1f31e', '1f31d', '1f31a', '1f311', '1f312', '1f313', '1f314', '1f315', '1f316', '1f317', '1f318', '1f31c', '1f31b', '1f319', '1f30d', '1f30e', '1f30f', '1f30b', '1f30c', '1f320', '2b50', '2600', '26c5', '2601', '26a1', '2614', '2744', '26c4', '1f300', '1f301', '1f308', '1f30a'],
			items: ['1f38d', '1f49d', '1f38e', '1f392', '1f393', '1f38f', '1f386', '1f387', '1f390', '1f391', '1f383', '1f47b', '1f385', '1f384', '1f381', '1f38b', '1f389', '1f38a', '1f388', '1f38c', '1f52e', '1f3a5', '1f4f7', '1f4f9', '1f4fc', '1f4bf', '1f4c0', '1f4bd', '1f4be', '1f4bb', '1f4f1', '260e', '1f4de', '1f4df', '1f4e0', '1f4e1', '1f4fa', '1f4fb', '1f50a', '1f509', '1f508', '1f507', '1f514', '1f515', '1f4e2', '1f4e3', '23f3', '231b', '23f0', '231a', '1f513', '1f512', '1f50f', '1f510', '1f511', '1f50e', '1f4a1', '1f526', '1f506', '1f505', '1f50c', '1f50b', '1f50d', '1f6c1', '1f6c0', '1f6bf', '1f6bd', '1f527', '1f529', '1f528', '1f6aa', '1f6ac', '1f4a3', '1f52b', '1f52a', '1f48a', '1f489', '1f4b0', '1f4b4', '1f4b5', '1f4b7', '1f4b6', '1f4b3', '1f4b8', '1f4f2'],
			stationary: ['1f4e7', '1f4e5', '1f4e4', '2709', '1f4e9', '1f4e8', '1f4ef', '1f4eb', '1f4ea', '1f4ec', '1f4ed', '1f4ee', '1f4e6', '1f4dd', '1f4c4', '1f4c3', '1f4d1', '1f4ca', '1f4c8', '1f4c9', '1f4dc', '1f4cb', '1f4c5', '1f4c6', '1f4c7', '1f4c1', '1f4c2', '2702', '1f4cc', '1f4ce', '2712', '270f', '1f4cf', '1f4d0', '1f4d5', '1f4d7', '1f4d8', '1f4d9', '1f4d3', '1f4d4', '1f4d2', '1f4da', '1f4d6', '1f516', '1f4db', '1f52c', '1f52d', '1f4f0'],
			musicArt: ['1f3a8', '1f3ac', '1f3a4', '1f3a7', '1f3bc', '1f3b5', '1f3b6', '1f3b9', '1f3bb', '1f3ba', '1f3b7', '1f3b8'],
			sportsGames: ['1f47e', '1f3ae', '1f0cf', '1f3b4', '1f004', '1f3b2', '1f3af', '1f3c8', '1f3c0', '26bd', '26be', '1f3be', '1f3b1', '1f3c9', '1f3b3', '26f3', '1f6b5', '1f6b4', '1f3c1', '1f3c7', '1f3c6', '1f3bf', '1f3c2', '1f3ca', '1f3c4', '1f3a3'],
			foods: ['2615', '1f375', '1f376', '1f37c', '1f37a', '1f37b', '1f378', '1f379', '1f377', '1f374', '1f355', '1f354', '1f35f', '1f357', '1f356', '1f35d', '1f35b', '1f364', '1f371', '1f363', '1f365', '1f359', '1f358', '1f35a', '1f35c', '1f372', '1f362', '1f361', '1f373', '1f35e', '1f369', '1f36e', '1f366', '1f368', '1f367', '1f382', '1f370', '1f36a', '1f36b', '1f36c', '1f36d', '1f36f'],
			fruits: ['1f34e', '1f34f', '1f34a', '1f34b', '1f352', '1f347', '1f349', '1f353', '1f351', '1f348', '1f34c', '1f350', '1f34d', '1f360', '1f346', '1f345', '1f33d'],
			buildings: ['1f3e0', '1f3e1', '1f3eb', '1f3e2', '1f3e3', '1f3e5', '1f3e6', '1f3ea', '1f3e9', '1f3e8', '1f492', '26ea', '1f3ec', '1f3e4', '1f307', '1f306', '1f3ef', '1f3f0', '26fa', '1f3ed', '1f5fc', '1f5fe', '1f5fb', '1f304', '1f305', '1f303', '1f5fd', '1f309', '1f3a0', '1f3a1', '26f2', '1f3a2', '1f6a2'],
			transport: ['26f5', '1f6a4', '1f6a3', '2693', '1f680', '2708', '1f4ba', '1f681', '1f682', '1f68a', '1f689', '1f69e', '1f686', '1f684', '1f685', '1f688', '1f687', '1f69d', '1f68b', '1f683', '1f68e', '1f68c', '1f68d', '1f699', '1f698', '1f697', '1f695', '1f696', '1f69b', '1f69a', '1f6a8', '1f693', '1f694', '1f692', '1f691', '1f690', '1f6b2', '1f6a1', '1f69f', '1f6a0', '1f69c', '1f488', '1f68f', '1f3ab', '1f6a6', '1f6a5', '26a0', '1f6a7', '1f530', '26fd', '1f3ee', '1f3b0', '2668', '1f5ff', '1f3aa', '1f3ad', '1f4cd', '1f6a9'],
			arrows: ['1f51f', '1f522', /*'20e3',*/ '1f523', '2b06', '2b07', '2b05', '27a1', '1f520', '1f521', '1f524', '2197', '2196', '2198', '2199', '2194', '2195', '1f504', '25c0', '25b6', '1f53c', '1f53d', '21a9', '21aa', '2139', '23ea', '23e9', '23eb', '23ec', '2935', '2934'],
			textLabels: ['1f197', '1f500', '1f501', '1f502', '1f195', '1f199', '1f192', '1f193', '1f196', '1f4f6', '1f3a6', '1f201', '1f22f', '1f233', '1f235', '1f234', '1f232', '1f250', '1f239', '1f23a', '1f236', '1f21a', '1f6bb', '1f6b9', '1f6ba', '1f6bc', '1f6be', '1f6b0', '1f6ae', '1f17f', '267f', '1f6ad', '1f237', '1f238', '1f202', '24c2', '1f6c2', '1f6c4', '1f6c5', '1f6c3', '1f251', '3299', '3297', '1f191', '1f198', '1f194', '1f6ab', '1f51e', '1f4f5', '1f6af', '1f6b1', '1f6b3', '1f6b7', '1f6b8', '26d4', '2733', '2747', '274e', '2705', '2734', '1f49f', '1f19a', '1f4f3', '1f4f4', '1f170', '1f171', '1f18e', '1f17e', '1f4a0', '27bf', '267b'],
			zodiac: ['2648', '2649', '264a', '264b', '264c', '264d', '264e', '264f', '2650', '2651', '2652', '2653', '26ce'],
			symbols: ['1f52f', '1f3e7', '1f4b9', '1f4b2', '1f4b1', 'a9', 'ae', '2122', '274c', '203c', '2049', '2757', '2753', '2755', '2754', '2b55', '1f51d', '1f51a', '1f519', '1f51b', '1f51c', '1f503', '1f55b', '1f567', '1f550', '1f55c', '1f551', '1f55d', '1f552', '1f55e', '1f553', '1f55f', '1f554', '1f560', '1f555', '1f556', '1f557', '1f558', '1f559', '1f55a', '1f561', '1f562', '1f563', '1f564', '1f565', '1f566', '2716', '2795', '2796', '2797', '2660', '2665', '2663', '2666', '1f4ae', '1f4af', '2714', '2611', '1f518', '1f517', '27b0', '3030', '303d', '1f531', '25fc', '25fb', '25fe', '25fd', '25aa', '25ab', '1f53a', '1f532', '1f533', '26ab', '26aa', '1f534', '1f535', '1f53b', '2b1c', '2b1b', '1f536', '1f537', '1f538', '1f539'],
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
		create: function (point) {
			var a = document.createElement('a');
			a.innerHTML = '&#x' + point + ';';
			a.setAttribute('data-char', a.innerHTML);
			a.title = 'U+' + point; // a.innerHTML;
			a.href = 'https://codepoints.net/U+' + point;
			return a;
		},
		injectTo: function (div) {
			var e, i, l, f = document.createDocumentFragment();
			for (e in this.db) {
				if (this.db.hasOwnProperty(e)) {
					l = this.db[e];
					for (i = 0; i < l.length; i++) {
						f.appendChild(this.create(l[i]));
						f.appendChild(document.createTextNode(' '));
					}
				}
			}
			div.appendChild(f);
		},
		events: {
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
			this.injectTo(div);
			this.events.wire(div, textarea);
		},
		css: (function () {
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

		function Form(id, el, message, title, edit, reason) {
			if (!id || !el) { return; }

			this.id = id;
			this.el = el;
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
				main: document.getElementById('main'),
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

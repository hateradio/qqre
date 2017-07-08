// ==UserScript==
// @id             GAF-QQRE
// @name           NeoGAF: Quick Quote, Reply, and Edit
// @namespace      hateradio)))
// @author         hateradio
// @version        10.0.1
// @description    This script adds the ability to quickly quote, reply, and edit posts on NeoGAF. Just click and go.
// @homepage       https://greasyfork.org/scripts/1022-neogaf-quick-quote-reply-and-edit
// @icon           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGRjg5NTBEMDYwODdFMDExQkE4RUNGOEQ3QzZENjU2MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NzUyNDZBRTg3RDkxMUUwQkE0Q0QyRjcyMEQwQUNDOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NzUyNDZBRDg3RDkxMUUwQkE0Q0QyRjcyMEQwQUNDOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RTgyRDgxNkQ5ODdFMDExOTI4RUREM0QyQUUxREY5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRjg5NTBEMDYwODdFMDExQkE4RUNGOEQ3QzZENjU2MyIvPiA8L3JkZjpEZXNjcmlwdGlv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
// @screenshot     https://raw.githubusercontent.com/hateradio/qqre/master/screenshot.png

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

// @grant          GM_log

// @updated        06 JUL 2017
// @since          30 OCT 2010
// (c) 2010+, hateradio
// ==/UserScript==

/*

## 10.0.1
* **Fix**: Search input now matches the style of the site
* **Fix**: Quick Editor now toggling correctly

## 10
* **New**: Emoji toolbar to toggle which emoji to display
* **New**: Adds the `[NOPARSE]` tag -- won't parse any BBCode within it
* **Fix**: Posts without user names won't stop the script execution

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

	var $, greaseWindow, strg, update, Extra, Editor, Form, app, bond, emoji, dom;

	if (!String.prototype.trim) { String.prototype.trim = function () { return this.replace(/^\s+|\s+$/g, ''); }; }
	if (!Array.from) { Array.from = function (list) { return Array.prototype.slice.call(list); }; }

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

	bond = function (o, m) { return function () { return m.apply(o, arguments); }; };

	dom = {
		top: document.head || document.body,
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
		}
	};

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
		version: 10010,
		key: 'ujs_QQRE_UPDT',
		callback: 'qqreupdater',
		page: 'https://greasyfork.org/scripts/1022-neogaf-quick-quote-reply-and-edit',
		urij: 'https://hateradio.github.io/qqre/update.json',
		interval: 5,
		day: (new Date()).getTime(),
		time: function () { return new Date(this.day + (1000 * 60 * 60 * 24 * this.interval)).getTime(); },
		notification: function (j) {
			if (this.version < j.version) {
				strg.save(this.key, { date: this.time(), version: j.version, page: j.page });
				this.link();
			}
		},
		link: function () {
			this.csstxt();

			var a = document.createElement('a'), b = strg.read(this.key);
			a.href = b.page || '#';
			a.id = 'userscriptupdater2';
			a.title = 'Update now.';
			a.target = '_blank';
			a.textContent = 'An update for ' + this.name + ' is available.';
			a.addEventListener('click', function () { this.style.display = 'none'; }, false);
			document.body.appendChild(a);
		},
		xhr: function () {
			var x = new XMLHttpRequest();
			x.addEventListener('load', function () { update.notification(JSON.parse(this.responseText)); }, false);
			x.open('get', update.urij, true);
			x.send();
		},
		check: function (opt) {
			if (!strg.on) { return; }
			var stored = strg.read(this.key), page;

			if (opt || !stored || stored.date < this.day) {
				page = (stored && stored.page) || '#';
				strg.save(this.key, {date: this.time(), version: this.version, page: page});
				this.xhr();
			} else if (this.version < stored.version) {
				this.link();
			}
		},
		csstxt: function () {
			if (!this.pop) { this.pop = true; dom.css('#userscriptupdater2,#userscriptupdater2:visited{box-shadow:1px 1px 6px #7776;border-bottom:3px solid #d65e55;cursor:pointer;color:#555;font-family:sans-serif;font-size:12px;font-weight:700;text-align:justify;position:fixed;z-index:999999;right:10px;top:10px;background:#ebebeb url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTguODQ4NTMgMTk5LjM4MzA3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNC4yNzYgLTE2LjM2NykiPjxjaXJjbGUgY3g9IjEwNC4zMjEiIGN5PSIxMTYuMzI3IiByPSI5OC4yNzQiIGZpbGw9IiNkNjVlNTUiLz48cGF0aCBmaWxsPSIjZTljZTAyIiBzdHJva2U9IiNlOWM4MDIiIHN0cm9rZS13aWR0aD0iMTYuNyIgZD0iTTE2Ni40NSAxNTcuMzEySDQxLjg5bDMxLjE0LTUzLjkzNSAzMS4xNC01My45MzUgMzEuMTM3IDUzLjkzNXoiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48dGV4dCB4PSI4NS42NDMiIHk9IjE1MS44NjYiIGZpbGw9IiNkNjVlNTUiIHN0cm9rZS13aWR0aD0iMS40NzciIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1Oy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0Jvb2sgQW50aXF1YSciIGZvbnQtd2VpZ2h0PSI0MDAiIGZvbnQtc2l6ZT0iNTkuMDg4IiBmb250LWZhbWlseT0iQm9vayBBbnRpcXVhIiBsZXR0ZXItc3BhY2luZz0iMCIgd29yZC1zcGFjaW5nPSIwIj48dHNwYW4geD0iODUuNjQzIiB5PSIxNTEuODY2IiBzdHlsZT0iLWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonQm9vayBBbnRpcXVhJyIgZm9udC13ZWlnaHQ9IjcwMCIgZm9udC1zaXplPSIxMjYuMDU0Ij4hPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==) no-repeat 10px center;background-size:40px;padding:0 20px 0 60px;height:55px;line-height:55px}#userscriptupdater2:hover,#userscriptupdater2:visited:hover{color:#b33a3a !important;border-color:#ce4b30}'); }
		}
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
	dom.css('td.imgbtnemu div:hover { border:1px solid #316ac5; margin: -1px; background: #c1d2ee; } td.imgbtnemu div:active { background: #98b5e2; } #vB_Editor_001_cmd_wrap0_spoiler { visibility:hidden !important } .quickreplyform_hotspot{text-align:center;margin-top:6px} .text_emo_container { text-align: center; margin-top: 8px; } .text_emo_container > div {vertical-align: top} .text_emo_container .text_emo_container_text {display:inline-block;margin: 0 0 0 4%;width:64%} .text_emo_container .text_emo_container_emo {width:24%;margin: 0 0 0 1%;display:inline-block;overflow:hidden} .text_emo_container_text textarea {width:99%} .gm_emoji {line-height: 1.2;overflow: hidden;resize:both} .gm_emoji a {font-size:12px;line-height:1.2;cursor:pointer} .gm_emoji_list {display:inline} .gm_emoji_box {height: 9.6em; overflow: auto; } .gm_emoji_toolbar { margin-bottom: 4px } .gm_emoji_search{margin:5px 0;box-sizing:border-box;width:100%}');

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
			toolbarIcon: function (points, name) {
				var b = document.createElement('div'), point;

				if (typeof points === 'string' || points instanceof String) {
					point = points;
				} else {
					point = points[0];
				}

				b.innerHTML = '&#x' + point + ';';
				b.setAttribute('data-toolbar', name);
				b.title = emoji.presentation.readableName(name);
				b.className = 'gm_emoji_toolbar_button';
				return b;
			},
			icon: function (points) {
				var a = document.createElement('a'), title, point;

				if (typeof points === 'string' || points instanceof String) {
					point = points;
					title = 'U+' + points;
				} else {
					point = points[0];
					title = points[1];
				}

				a.innerHTML = '&#x' + point + ';';
				a.setAttribute('data-char', a.innerHTML);
				a.title = title;
				a.href = 'https://codepoints.net/U+' + point;
				return a;
			},
			panel: function (div) {
				var e, i, l, f = document.createDocumentFragment(), innerDiv, innerFragment, toolbar, search, emos, hide = false;

				toolbar = document.createElement('div');
				toolbar.className = 'gm_emoji_toolbar';

				search = document.createElement('input');
				search.setAttribute('type', 'text');
				search.className = 'biginput gm_emoji_search';

				emos = document.createElement('div');
				emos.className = 'gm_emoji_box';

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

						l = emoji.db[e];
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
				div.appendChild(search);
				emos.appendChild(f);
				div.appendChild(emos);
				toolbar.querySelector('.gm_emoji_toolbar_button').classList.add('gm_emoji_selected');

				search.addEventListener(Extra.keyEvent, function (e) {
					if (e.keyCode === 13) {
						e.preventDefault();
						e.stopPropagation();
					}
				}, true);
				search.addEventListener(Extra.keyEvent, throttle(emoji.events.search, 500), false);
			}
		},
		db: {
			smileysPeople: [["1F600", "Grinning Face"], ["1F601", "Grinning Face With Smiling Eyes"], ["1F602", "Face With Tears of Joy"], ["1F603", "Smiling Face With Open Mouth"], ["1F604", "Smiling Face With Open Mouth and Smiling Eyes"], ["1F605", "Smiling Face With Open Mouth and Cold Sweat"], ["1F606", "Smiling Face With Open Mouth and Tightly-Closed Eyes"], ["1F609", "Winking Face"], ["1F60A", "Smiling Face With Smiling Eyes"], ["1F60B", "Face Savouring Delicious Food"], ["1F60E", "Smiling Face With Sunglasses"], ["1F60D", "Smiling Face With Heart-Shaped Eyes"], ["1F618", "Face Throwing a Kiss"], ["1F617", "Kissing Face"], ["1F619", "Kissing Face With Smiling Eyes"], ["1F61A", "Kissing Face With Closed Eyes"], ["263A", "White Smiling Face"], ["1F642", "Slightly Smiling Face"], ["1F917", "Hugging Face"], ["1F914", "Thinking Face"], ["1F610", "Neutral Face"], ["1F611", "Expressionless Face"], ["1F636", "Face Without Mouth"], ["1F644", "Face With Rolling Eyes"], ["1F60F", "Smirking Face"], ["1F623", "Persevering Face"], ["1F625", "Disappointed but Relieved Face"], ["1F62E", "Face With Open Mouth"], ["1F910", "Zipper-Mouth Face"], ["1F62F", "Hushed Face"], ["1F62A", "Sleepy Face"], ["1F62B", "Tired Face"], ["1F634", "Sleeping Face"], ["1F60C", "Relieved Face"], ["1F913", "Nerd Face"], ["1F61B", "Face With Stuck-Out Tongue"], ["1F61C", "Face With Stuck-Out Tongue and Winking Eye"], ["1F61D", "Face With Stuck-Out Tongue and Tightly-Closed Eyes"], ["1F612", "Unamused Face"], ["1F613", "Face With Cold Sweat"], ["1F614", "Pensive Face"], ["1F615", "Confused Face"], ["1F643", "Upside-Down Face"], ["1F911", "Money-Mouth Face"], ["1F632", "Astonished Face"], ["2639", "White Frowning Face"], ["1F641", "Slightly Frowning Face"], ["1F616", "Confounded Face"], ["1F61E", "Disappointed Face"], ["1F61F", "Worried Face"], ["1F624", "Face With Look of Triumph"], ["1F622", "Crying Face"], ["1F62D", "Loudly Crying Face"], ["1F626", "Frowning Face With Open Mouth"], ["1F627", "Anguished Face"], ["1F628", "Fearful Face"], ["1F629", "Weary Face"], ["1F62C", "Grimacing Face"], ["1F630", "Face With Open Mouth and Cold Sweat"], ["1F631", "Face Screaming in Fear"], ["1F633", "Flushed Face"], ["1F635", "Dizzy Face"], ["1F621", "Pouting Face"], ["1F620", "Angry Face"], ["1F607", "Smiling Face With Halo"], ["1F637", "Face With Medical Mask"], ["1F912", "Face With Thermometer"], ["1F915", "Face With Head-Bandage"], ["1F608", "Smiling Face With Horns"], ["1F47F", "Imp"], ["1F479", "Japanese Ogre"], ["1F47A", "Japanese Goblin"], ["1F480", "Skull"], ["1F47B", "Ghost"], ["1F47D", "Extraterrestrial Alien"], ["1F916", "Robot Face"], ["1F4A9", "Pile of Poo"], ["1F63A", "Smiling Cat Face With Open Mouth"], ["1F638", "Grinning Cat Face With Smiling Eyes"], ["1F639", "Cat Face With Tears of Joy"], ["1F63B", "Smiling Cat Face With Heart-Shaped Eyes"], ["1F63C", "Cat Face With Wry Smile"], ["1F63D", "Kissing Cat Face With Closed Eyes"], ["1F640", "Weary Cat Face"], ["1F63F", "Crying Cat Face"], ["1F63E", "Pouting Cat Face"], ["1F466", "Boy"], ["1F467", "Girl"], ["1F468", "Man"], ["1F469", "Woman"], ["1F474", "Older Man"], ["1F475", "Older Woman"], ["1F476", "Baby"], ["1F47C", "Baby Angel"], ["1F46E", "Police Officer"], ["1F575", "Sleuth or Spy"], ["1F482", "Guardsman"], ["1F477", "Construction Worker"], ["1F473", "Man With Turban"], ["1F471", "Person With Blond Hair"], ["1F385", "Father Christmas"], ["1F478", "Princess"], ["1F470", "Bride With Veil"], ["1F472", "Man With Gua Pi Mao"], ["1F64D", "Person Frowning"], ["1F64E", "Person With Pouting Face"], ["1F645", "Face With No Good Gesture"], ["1F646", "Face With OK Gesture"], ["1F481", "Information Desk Person"], ["1F64B", "Happy Person Raising One Hand"], ["1F647", "Person Bowing Deeply"], ["1F486", "Face Massage"], ["1F487", "Haircut"], ["1F6B6", "Pedestrian"], ["1F3C3", "Runner"], ["1F483", "Dancer"], ["1F46F", "Woman With Bunny Ears"], ["1F574", "Man in Business Suit Levitating"], ["1F5E3", "Speaking Head in Silhouette"], ["1F464", "Bust in Silhouette"], ["1F465", "Busts in Silhouette"], ["1F46B", "Man and Woman Holding Hands"], ["1F46C", "Two Men Holding Hands"], ["1F46D", "Two Women Holding Hands"], ["1F48F", "Kiss"], ["1F468;&#x200D;&#x2764;&#xFE0F;&#x200D;&#x1F48B;&#x200D;&#x1F468", "Kiss (Man, Man)"], ["1F469;&#x200D;&#x2764;&#xFE0F;&#x200D;&#x1F48B;&#x200D;&#x1F469", "Kiss (Woman, Woman)"], ["1F491", "Couple With Heart"], ["1F468;&#x200D;&#x2764;&#xFE0F;&#x200D;&#x1F468", "Couple With Heart (Man, Man)"], ["1F469;&#x200D;&#x2764;&#xFE0F;&#x200D;&#x1F469", "Couple With Heart (Woman, Woman)"], ["1F46A", "Family"], ["1F468;&#x200D;&#x1F469;&#x200D;&#x1F467", "Family: Man, Woman, Girl"], ["1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466", "Family: Man, Woman, Girl, Boy"], ["1F468;&#x200D;&#x1F469;&#x200D;&#x1F466;&#x200D;&#x1F466", "Family: Man, Woman, Boy, Boy"], ["1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F467", "Family: Man, Woman, Girl, Girl"], ["1F468;&#x200D;&#x1F468;&#x200D;&#x1F466", "Family: Man, Man, Boy"], ["1F468;&#x200D;&#x1F468;&#x200D;&#x1F467", "Family: Man, Man, Girl"], ["1F468;&#x200D;&#x1F468;&#x200D;&#x1F467;&#x200D;&#x1F466", "Family: Man, Man, Girl, Boy"], ["1F468;&#x200D;&#x1F468;&#x200D;&#x1F466;&#x200D;&#x1F466", "Family: Man, Man, Boy, Boy"], ["1F468;&#x200D;&#x1F468;&#x200D;&#x1F467;&#x200D;&#x1F467", "Family: Man, Man, Girl, Girl"], ["1F469;&#x200D;&#x1F469;&#x200D;&#x1F466", "Family: Woman, Woman, Boy"], ["1F469;&#x200D;&#x1F469;&#x200D;&#x1F467", "Family: Woman, Woman, Girl"], ["1F469;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466", "Family: Woman, Woman, Girl, Boy"], ["1F469;&#x200D;&#x1F469;&#x200D;&#x1F466;&#x200D;&#x1F466", "Family: Woman, Woman, Boy, Boy"], ["1F469;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F467", "Family: Woman, Woman, Girl, Girl"], ["1F4AA", "Flexed Biceps"], ["1F448", "White Left Pointing Backhand Index"], ["1F449", "White Right Pointing Backhand Index"], ["261D", "White Up Pointing Index"], ["1F446", "White Up Pointing Backhand Index"], ["1F595", "Reversed Hand With Middle Finger Extended"], ["1F447", "White Down Pointing Backhand Index"], ["270C", "Victory Hand"], ["1F596", "Raised Hand With Part Between Middle and Ring Fingers"], ["1F918", "Sign of the Horns"], ["1F590", "Raised Hand With Fingers Splayed"], ["270B", "Raised Hand"], ["1F44C", "OK Hand Sign"], ["1F44D", "Thumbs Up Sign"], ["1F44E", "Thumbs Down Sign"], ["270A", "Raised Fist"], ["1F44A", "Fisted Hand Sign"], ["1F44B", "Waving Hand Sign"], ["1F44F", "Clapping Hands Sign"], ["270D", "Writing Hand"], ["1F450", "Open Hands Sign"], ["1F64C", "Person Raising Both Hands in Celebration"], ["1F64F", "Person With Folded Hands"], ["1F485", "Nail Polish"], ["1F442", "Ear"], ["1F443", "Nose"], ["1F463", "Footprints"], ["1F440", "Eyes"], ["1F441", "Eye"], ["1F445", "Tongue"], ["1F444", "Mouth"], ["1F48B", "Kiss Mark"], ["1F453", "Eyeglasses"], ["1F576", "Dark Sunglasses"], ["1F454", "Necktie"], ["1F455", "T-Shirt"], ["1F456", "Jeans"], ["1F457", "Dress"], ["1F458", "Kimono"], ["1F459", "Bikini"], ["1F45A", "Womans Clothes"], ["1F45B", "Purse"], ["1F45C", "Handbag"], ["1F45D", "Pouch"], ["1F392", "School Satchel"], ["1F45E", "Mans Shoe"], ["1F45F", "Athletic Shoe"], ["1F460", "High-Heeled Shoe"], ["1F461", "Womans Sandal"], ["1F462", "Womans Boots"], ["1F451", "Crown"], ["1F452", "Womans Hat"], ["1F3A9", "Top Hat"], ["1F393", "Graduation Cap"], ["26D1", "Helmet With White Cross"], ["1F484", "Lipstick"], ["1F48D", "Ring"], ["1F302", "Closed Umbrella"], ["1F4BC", "Briefcase"]],
			animalsNature: [["1F648", "See-No-Evil Monkey"], ["1F649", "Hear-No-Evil Monkey"], ["1F64A", "Speak-No-Evil Monkey"], ["1F4A5", "Collision Symbol"], ["1F4A6", "Splashing Sweat Symbol"], ["1F4A8", "Dash Symbol"], ["1F435", "Monkey Face"], ["1F412", "Monkey"], ["1F436", "Dog Face"], ["1F415", "Dog"], ["1F429", "Poodle"], ["1F43A", "Wolf Face"], ["1F431", "Cat Face"], ["1F408", "Cat"], ["1F981", "Lion Face"], ["1F42F", "Tiger Face"], ["1F405", "Tiger"], ["1F406", "Leopard"], ["1F434", "Horse Face"], ["1F40E", "Horse"], ["1F984", "Unicorn Face"], ["1F42E", "Cow Face"], ["1F402", "Ox"], ["1F403", "Water Buffalo"], ["1F404", "Cow"], ["1F437", "Pig Face"], ["1F416", "Pig"], ["1F417", "Boar"], ["1F43D", "Pig Nose"], ["1F40F", "Ram"], ["1F411", "Sheep"], ["1F410", "Goat"], ["1F42A", "Dromedary Camel"], ["1F42B", "Bactrian Camel"], ["1F418", "Elephant"], ["1F42D", "Mouse Face"], ["1F401", "Mouse"], ["1F400", "Rat"], ["1F439", "Hamster Face"], ["1F430", "Rabbit Face"], ["1F407", "Rabbit"], ["1F43F", "Chipmunk"], ["1F43B", "Bear Face"], ["1F428", "Koala"], ["1F43C", "Panda Face"], ["1F43E", "Paw Prints"], ["1F983", "Turkey"], ["1F414", "Chicken"], ["1F413", "Rooster"], ["1F423", "Hatching Chick"], ["1F424", "Baby Chick"], ["1F425", "Front-Facing Baby Chick"], ["1F426", "Bird"], ["1F427", "Penguin"], ["1F54A", "Dove of Peace"], ["1F438", "Frog Face"], ["1F40A", "Crocodile"], ["1F422", "Turtle"], ["1F40D", "Snake"], ["1F432", "Dragon Face"], ["1F409", "Dragon"], ["1F433", "Spouting Whale"], ["1F40B", "Whale"], ["1F42C", "Dolphin"], ["1F41F", "Fish"], ["1F420", "Tropical Fish"], ["1F421", "Blowfish"], ["1F419", "Octopus"], ["1F41A", "Spiral Shell"], ["1F980", "Crab"], ["1F40C", "Snail"], ["1F41B", "Bug"], ["1F41C", "Ant"], ["1F41D", "Honeybee"], ["1F41E", "Lady Beetle"], ["1F577", "Spider"], ["1F578", "Spider Web"], ["1F982", "Scorpion"], ["1F490", "Bouquet"], ["1F338", "Cherry Blossom"], ["1F4AE", "White Flower"], ["1F3F5", "Rosette"], ["1F339", "Rose"], ["1F33A", "Hibiscus"], ["1F33B", "Sunflower"], ["1F33C", "Blossom"], ["1F337", "Tulip"], ["1F331", "Seedling"], ["1F332", "Evergreen Tree"], ["1F333", "Deciduous Tree"], ["1F334", "Palm Tree"], ["1F335", "Cactus"], ["1F33E", "Ear of Rice"], ["1F33F", "Herb"], ["2618", "Shamrock"], ["1F340", "Four Leaf Clover"], ["1F341", "Maple Leaf"], ["1F342", "Fallen Leaf"], ["1F343", "Leaf Fluttering in Wind"], ["1F344", "Mushroom"], ["1F330", "Chestnut"], ["1F30D", "Earth Globe Europe-Africa"], ["1F30E", "Earth Globe Americas"], ["1F30F", "Earth Globe Asia-Australia"], ["1F310", "Globe With Meridians"], ["1F311", "New Moon Symbol"], ["1F312", "Waxing Crescent Moon Symbol"], ["1F313", "First Quarter Moon Symbol"], ["1F314", "Waxing Gibbous Moon Symbol"], ["1F315", "Full Moon Symbol"], ["1F316", "Waning Gibbous Moon Symbol"], ["1F317", "Last Quarter Moon Symbol"], ["1F318", "Waning Crescent Moon Symbol"], ["1F319", "Crescent Moon"], ["1F31A", "New Moon With Face"], ["1F31B", "First Quarter Moon With Face"], ["1F31C", "Last Quarter Moon With Face"], ["2600", "Black Sun With Rays"], ["1F31D", "Full Moon With Face"], ["1F31E", "Sun With Face"], ["2B50", "White Medium Star"], ["1F31F", "Glowing Star"], ["1F320", "Shooting Star"], ["2601", "Cloud"], ["26C5", "Sun Behind Cloud"], ["26C8", "Thunder Cloud and Rain"], ["1F324", "White Sun With Small Cloud"], ["1F325", "White Sun Behind Cloud"], ["1F326", "White Sun Behind Cloud With Rain"], ["1F327", "Cloud With Rain"], ["1F328", "Cloud With Snow"], ["1F329", "Cloud With Lightning"], ["1F32A", "Cloud With Tornado"], ["1F32B", "Fog"], ["1F32C", "Wind Blowing Face"], ["2602", "Umbrella"], ["2614", "Umbrella With Rain Drops"], ["26A1", "High Voltage Sign"], ["2744", "Snowflake"], ["2603", "Snowman"], ["2604", "Comet"], ["1F525", "Fire"], ["1F4A7", "Droplet"], ["1F30A", "Water Wave"], ["1F384", "Christmas Tree"], ["2728", "Sparkles"], ["1F38B", "Tanabata Tree"], ["1F38D", "Pine Decoration"]],
			foodDrink: [["1F347", "Grapes"], ["1F348", "Melon"], ["1F349", "Watermelon"], ["1F34A", "Tangerine"], ["1F34B", "Lemon"], ["1F34C", "Banana"], ["1F34D", "Pineapple"], ["1F34E", "Red Apple"], ["1F34F", "Green Apple"], ["1F350", "Pear"], ["1F351", "Peach"], ["1F352", "Cherries"], ["1F353", "Strawberry"], ["1F345", "Tomato"], ["1F346", "Aubergine"], ["1F33D", "Ear of Maize"], ["1F336", "Hot Pepper"], ["1F344", "Mushroom"], ["1F330", "Chestnut"], ["1F35E", "Bread"], ["1F9C0", "Cheese Wedge"], ["1F356", "Meat on Bone"], ["1F357", "Poultry Leg"], ["1F354", "Hamburger"], ["1F35F", "French Fries"], ["1F355", "Slice of Pizza"], ["1F32D", "Hot Dog"], ["1F32E", "Taco"], ["1F32F", "Burrito"], ["1F373", "Cooking"], ["1F372", "Pot of Food"], ["1F37F", "Popcorn"], ["1F371", "Bento Box"], ["1F358", "Rice Cracker"], ["1F359", "Rice Ball"], ["1F35A", "Cooked Rice"], ["1F35B", "Curry and Rice"], ["1F35C", "Steaming Bowl"], ["1F35D", "Spaghetti"], ["1F360", "Roasted Sweet Potato"], ["1F362", "Oden"], ["1F363", "Sushi"], ["1F364", "Fried Shrimp"], ["1F365", "Fish Cake With Swirl Design"], ["1F361", "Dango"], ["1F366", "Soft Ice Cream"], ["1F367", "Shaved Ice"], ["1F368", "Ice Cream"], ["1F369", "Doughnut"], ["1F36A", "Cookie"], ["1F382", "Birthday Cake"], ["1F370", "Shortcake"], ["1F36B", "Chocolate Bar"], ["1F36C", "Candy"], ["1F36D", "Lollipop"], ["1F36E", "Custard"], ["1F36F", "Honey Pot"], ["1F37C", "Baby Bottle"], ["2615", "Hot Beverage"], ["1F375", "Teacup Without Handle"], ["1F376", "Sake Bottle and Cup"], ["1F37E", "Bottle With Popping Cork"], ["1F377", "Wine Glass"], ["1F378", "Cocktail Glass"], ["1F379", "Tropical Drink"], ["1F37A", "Beer Mug"], ["1F37B", "Clinking Beer Mugs"], ["1F37D", "Fork and Knife With Plate"], ["1F374", "Fork and Knife"]],
			activity: [["1F47E", "Alien Monster"], ["1F574", "Man in Business Suit Levitating"], ["1F3AA", "Circus Tent"], ["1F3AD", "Performing Arts"], ["1F3A8", "Artist Palette"], ["1F3B0", "Slot Machine"], ["1F6C0", "Bath"], ["1F397", "Reminder Ribbon"], ["1F39F", "Admission Tickets"], ["1F3AB", "Ticket"], ["1F396", "Military Medal"], ["1F3C6", "Trophy"], ["1F3C5", "Sports Medal"], ["26BD", "Soccer Ball"], ["26BE", "Baseball"], ["1F3C0", "Basketball and Hoop"], ["1F3D0", "Volleyball"], ["1F3C8", "American Football"], ["1F3C9", "Rugby Football"], ["1F3BE", "Tennis Racquet and Ball"], ["1F3B1", "Billiards"], ["1F3B3", "Bowling"], ["1F3CF", "Cricket Bat and Ball"], ["1F3D1", "Field Hockey Stick and Ball"], ["1F3D2", "Ice Hockey Stick and Puck"], ["1F3D3", "Table Tennis Paddle and Ball"], ["1F3F8", "Badminton Racquet and Shuttlecock"], ["1F3AF", "Direct Hit"], ["26F3", "Flag in Hole"], ["26F8", "Ice Skate"], ["1F3A3", "Fishing Pole and Fish"], ["1F3BD", "Running Shirt With Sash"], ["1F3BF", "Ski and Ski Boot"], ["1F3C7", "Horse Racing"], ["26F7", "Skier"], ["1F3C2", "Snowboarder"], ["1F3CC", "Golfer"], ["1F3C4", "Surfer"], ["1F6A3", "Rowboat"], ["1F3CA", "Swimmer"], ["26F9", "Person With Ball"], ["1F3CB", "Weight Lifter"], ["1F6B4", "Bicyclist"], ["1F6B5", "Mountain Bicyclist"], ["1F3AE", "Video Game"], ["1F3B2", "Game Die"], ["1F3B7", "Saxophone"], ["1F3B8", "Guitar"], ["1F3BA", "Trumpet"], ["1F3BB", "Violin"], ["1F3AC", "Clapper Board"], ["1F3F9", "Bow and Arrow"]],
			travelPlaces: [["1F3D4", "Snow Capped Mountain"], ["26F0", "Mountain"], ["1F30B", "Volcano"], ["1F5FB", "Mount Fuji"], ["1F3D5", "Camping"], ["1F3D6", "Beach With Umbrella"], ["1F3DC", "Desert"], ["1F3DD", "Desert Island"], ["1F3DE", "National Park"], ["1F3DF", "Stadium"], ["1F3DB", "Classical Building"], ["1F3D7", "Building Construction"], ["1F3D8", "House Buildings"], ["1F3D9", "Cityscape"], ["1F3DA", "Derelict House Building"], ["1F3E0", "House Building"], ["1F3E1", "House With Garden"], ["1F3E2", "Office Building"], ["1F3E3", "Japanese Post Office"], ["1F3E4", "European Post Office"], ["1F3E5", "Hospital"], ["1F3E6", "Bank"], ["1F3E8", "Hotel"], ["1F3E9", "Love Hotel"], ["1F3EA", "Convenience Store"], ["1F3EB", "School"], ["1F3EC", "Department Store"], ["1F3ED", "Factory"], ["1F3EF", "Japanese Castle"], ["1F3F0", "European Castle"], ["1F492", "Wedding"], ["1F5FC", "Tokyo Tower"], ["1F5FD", "Statue of Liberty"], ["26EA", "Church"], ["1F54C", "Mosque"], ["1F54D", "Synagogue"], ["26E9", "Shinto Shrine"], ["1F54B", "Kaaba"], ["26F2", "Fountain"], ["1F301", "Foggy"], ["1F303", "Night With Stars"], ["1F306", "Cityscape at Dusk"], ["1F307", "Sunset Over Buildings"], ["1F309", "Bridge at Night"], ["1F30C", "Milky Way"], ["1F3A0", "Carousel Horse"], ["1F3A1", "Ferris Wheel"], ["1F3A2", "Roller Coaster"], ["1F682", "Steam Locomotive"], ["1F683", "Railway Car"], ["1F684", "High-Speed Train"], ["1F685", "High-Speed Train With Bullet Nose"], ["1F686", "Train"], ["1F687", "Metro"], ["1F688", "Light Rail"], ["1F689", "Station"], ["1F68A", "Tram"], ["1F69D", "Monorail"], ["1F69E", "Mountain Railway"], ["1F68B", "Tram Car"], ["1F68C", "Bus"], ["1F68D", "Oncoming Bus"], ["1F68E", "Trolleybus"], ["1F690", "Minibus"], ["1F691", "Ambulance"], ["1F692", "Fire Engine"], ["1F693", "Police Car"], ["1F694", "Oncoming Police Car"], ["1F695", "Taxi"], ["1F696", "Oncoming Taxi"], ["1F697", "Automobile"], ["1F698", "Oncoming Automobile"], ["1F69A", "Delivery Truck"], ["1F69B", "Articulated Lorry"], ["1F69C", "Tractor"], ["1F6B2", "Bicycle"], ["1F3CE", "Racing Car"], ["1F3CD", "Racing Motorcycle"], ["1F68F", "Bus Stop"], ["1F6E4", "Railway Track"], ["26FD", "Fuel Pump"], ["1F6A8", "Police Cars Revolving Light"], ["1F6A5", "Horizontal Traffic Light"], ["1F6A6", "Vertical Traffic Light"], ["1F6A7", "Construction Sign"], ["2693", "Anchor"], ["26F5", "Sailboat"], ["1F6A4", "Speedboat"], ["1F6F3", "Passenger Ship"], ["26F4", "Ferry"], ["1F6E5", "Motor Boat"], ["1F6A2", "Ship"], ["2708", "Airplane"], ["1F6E9", "Small Airplane"], ["1F6EB", "Airplane Departure"], ["1F6EC", "Airplane Arriving"], ["1F4BA", "Seat"], ["1F681", "Helicopter"], ["1F69F", "Suspension Railway"], ["1F6A0", "Mountain Cableway"], ["1F6A1", "Aerial Tramway"], ["1F680", "Rocket"], ["1F6F0", "Satellite"], ["1F391", "Moon Viewing Ceremony"], ["1F6A3", "Rowboat"], ["1F4B4", "Banknote With Yen Sign"], ["1F4B5", "Banknote With Dollar Sign"], ["1F4B6", "Banknote With Euro Sign"], ["1F4B7", "Banknote With Pound Sign"], ["1F5FF", "Moyai"], ["1F6C2", "Passport Control"], ["1F6C3", "Customs"], ["1F6C4", "Baggage Claim"], ["1F6C5", "Left Luggage"]],
			objects: [["2620", "Skull and Crossbones"], ["1F48C", "Love Letter"], ["1F4A3", "Bomb"], ["1F573", "Hole"], ["1F6CD", "Shopping Bags"], ["1F4FF", "Prayer Beads"], ["1F48E", "Gem Stone"], ["1F52A", "Hocho"], ["1F3FA", "Amphora"], ["1F5FA", "World Map"], ["1F488", "Barber Pole"], ["1F5BC", "Frame With Picture"], ["1F6CE", "Bellhop Bell"], ["1F6AA", "Door"], ["1F6CC", "Sleeping Accommodation"], ["1F6CF", "Bed"], ["1F6CB", "Couch and Lamp"], ["1F6BD", "Toilet"], ["1F6BF", "Shower"], ["1F6C1", "Bathtub"], ["231B", "Hourglass"], ["23F3", "Hourglass With Flowing Sand"], ["231A", "Watch"], ["23F0", "Alarm Clock"], ["23F1", "Stopwatch"], ["23F2", "Timer Clock"], ["1F570", "Mantelpiece Clock"], ["1F321", "Thermometer"], ["26F1", "Umbrella on Ground"], ["1F388", "Balloon"], ["1F389", "Party Popper"], ["1F38A", "Confetti Ball"], ["1F38E", "Japanese Dolls"], ["1F38F", "Carp Streamer"], ["1F390", "Wind Chime"], ["1F380", "Ribbon"], ["1F381", "Wrapped Present"], ["1F579", "Joystick"], ["1F4EF", "Postal Horn"], ["1F399", "Studio Microphone"], ["1F39A", "Level Slider"], ["1F39B", "Control Knobs"], ["1F4FB", "Radio"], ["1F4F1", "Mobile Phone"], ["1F4F2", "Mobile Phone With Rightwards Arrow at Left"], ["260E", "Black Telephone"], ["1F4DE", "Telephone Receiver"], ["1F4DF", "Pager"], ["1F4E0", "Fax Machine"], ["1F50B", "Battery"], ["1F50C", "Electric Plug"], ["1F4BB", "Personal Computer"], ["1F5A5", "Desktop Computer"], ["1F5A8", "Printer"], ["2328", "Keyboard"], ["1F5B1", "Three Button Mouse"], ["1F5B2", "Trackball"], ["1F4BD", "Minidisc"], ["1F4BE", "Floppy Disk"], ["1F4BF", "Optical Disc"], ["1F4C0", "DVD"], ["1F3A5", "Movie Camera"], ["1F39E", "Film Frames"], ["1F4FD", "Film Projector"], ["1F4FA", "Television"], ["1F4F7", "Camera"], ["1F4F8", "Camera With Flash"], ["1F4F9", "Video Camera"], ["1F4FC", "Videocassette"], ["1F50D", "Left-Pointing Magnifying Glass"], ["1F50E", "Right-Pointing Magnifying Glass"], ["1F52C", "Microscope"], ["1F52D", "Telescope"], ["1F4E1", "Satellite Antenna"], ["1F56F", "Candle"], ["1F4A1", "Electric Light Bulb"], ["1F526", "Electric Torch"], ["1F3EE", "Izakaya Lantern"], ["1F4D4", "Notebook With Decorative Cover"], ["1F4D5", "Closed Book"], ["1F4D6", "Open Book"], ["1F4D7", "Green Book"], ["1F4D8", "Blue Book"], ["1F4D9", "Orange Book"], ["1F4DA", "Books"], ["1F4D3", "Notebook"], ["1F4C3", "Page With Curl"], ["1F4DC", "Scroll"], ["1F4C4", "Page Facing Up"], ["1F4F0", "Newspaper"], ["1F5DE", "Rolled-Up Newspaper"], ["1F4D1", "Bookmark Tabs"], ["1F516", "Bookmark"], ["1F3F7", "Label"], ["1F4B0", "Money Bag"], ["1F4B4", "Banknote With Yen Sign"], ["1F4B5", "Banknote With Dollar Sign"], ["1F4B6", "Banknote With Euro Sign"], ["1F4B7", "Banknote With Pound Sign"], ["1F4B8", "Money With Wings"], ["1F4B3", "Credit Card"], ["2709", "Envelope"], ["1F4E7", "E-Mail Symbol"], ["1F4E8", "Incoming Envelope"], ["1F4E9", "Envelope With Downwards Arrow Above"], ["1F4E4", "Outbox Tray"], ["1F4E5", "Inbox Tray"], ["1F4E6", "Package"], ["1F4EB", "Closed Mailbox With Raised Flag"], ["1F4EA", "Closed Mailbox With Lowered Flag"], ["1F4EC", "Open Mailbox With Raised Flag"], ["1F4ED", "Open Mailbox With Lowered Flag"], ["1F4EE", "Postbox"], ["1F5F3", "Ballot Box With Ballot"], ["270F", "Pencil"], ["2712", "Black Nib"], ["1F58B", "Lower Left Fountain Pen"], ["1F58A", "Lower Left Ballpoint Pen"], ["1F58C", "Lower Left Paintbrush"], ["1F58D", "Lower Left Crayon"], ["1F4DD", "Memo"], ["1F4C1", "File Folder"], ["1F4C2", "Open File Folder"], ["1F5C2", "Card Index Dividers"], ["1F4C5", "Calendar"], ["1F4C6", "Tear-Off Calendar"], ["1F5D2", "Spiral Note Pad"], ["1F5D3", "Spiral Calendar Pad"], ["1F4C7", "Card Index"], ["1F4C8", "Chart With Upwards Trend"], ["1F4C9", "Chart With Downwards Trend"], ["1F4CA", "Bar Chart"], ["1F4CB", "Clipboard"], ["1F4CC", "Pushpin"], ["1F4CD", "Round Pushpin"], ["1F4CE", "Paperclip"], ["1F587", "Linked Paperclips"], ["1F4CF", "Straight Ruler"], ["1F4D0", "Triangular Ruler"], ["2702", "Black Scissors"], ["1F5C3", "Card File Box"], ["1F5C4", "File Cabinet"], ["1F5D1", "Wastebasket"], ["1F512", "Lock"], ["1F513", "Open Lock"], ["1F50F", "Lock With Ink Pen"], ["1F510", "Closed Lock With Key"], ["1F511", "Key"], ["1F5DD", "Old Key"], ["1F528", "Hammer"], ["26CF", "Pick"], ["2692", "Hammer and Pick"], ["1F6E0", "Hammer and Wrench"], ["1F5E1", "Dagger Knife"], ["2694", "Crossed Swords"], ["1F52B", "Pistol"], ["1F6E1", "Shield"], ["1F527", "Wrench"], ["1F529", "Nut and Bolt"], ["2699", "Gear"], ["1F5DC", "Compression"], ["2697", "Alembic"], ["2696", "Scales"], ["1F517", "Link Symbol"], ["26D3", "Chains"], ["1F489", "Syringe"], ["1F48A", "Pill"], ["1F6AC", "Smoking Symbol"], ["26B0", "Coffin"], ["26B1", "Funeral Urn"], ["1F5FF", "Moyai"], ["1F6E2", "Oil Drum"], ["1F52E", "Crystal Ball"], ["1F6A9", "Triangular Flag on Post"], ["1F38C", "Crossed Flags"], ["1F3F4", "Waving Black Flag"], ["1F3F3", "Waving White Flag"], ["1F3F3;&#xFE0F;&#x200D;&#x1F308", "Rainbow Flag"]],
			symbols: [["1F441;&#x200D;&#x1F5E8", "Eye in Speech Bubble"], ["1F498", "Heart With Arrow"], ["2764", "Heavy Black Heart"], ["1F493", "Beating Heart"], ["1F494", "Broken Heart"], ["1F495", "Two Hearts"], ["1F496", "Sparkling Heart"], ["1F497", "Growing Heart"], ["1F499", "Blue Heart"], ["1F49A", "Green Heart"], ["1F49B", "Yellow Heart"], ["1F49C", "Purple Heart"], ["1F49D", "Heart With Ribbon"], ["1F49E", "Revolving Hearts"], ["1F49F", "Heart Decoration"], ["2763", "Heavy Heart Exclamation Mark Ornament"], ["1F4A4", "Sleeping Symbol"], ["1F4A2", "Anger Symbol"], ["1F4AC", "Speech Balloon"], ["1F5EF", "Right Anger Bubble"], ["1F4AD", "Thought Balloon"], ["1F4AE", "White Flower"], ["2668", "Hot Springs"], ["1F488", "Barber Pole"], ["1F55B", "Clock Face Twelve O\'Clock"], ["1F567", "Clock Face Twelve-Thirty"], ["1F550", "Clock Face One O\'Clock"], ["1F55C", "Clock Face One-Thirty"], ["1F551", "Clock Face Two O\'Clock"], ["1F55D", "Clock Face Two-Thirty"], ["1F552", "Clock Face Three O\'Clock"], ["1F55E", "Clock Face Three-Thirty"], ["1F553", "Clock Face Four O\'Clock"], ["1F55F", "Clock Face Four-Thirty"], ["1F554", "Clock Face Five O\'Clock"], ["1F560", "Clock Face Five-Thirty"], ["1F555", "Clock Face Six O\'Clock"], ["1F561", "Clock Face Six-Thirty"], ["1F556", "Clock Face Seven O\'Clock"], ["1F562", "Clock Face Seven-Thirty"], ["1F557", "Clock Face Eight O\'Clock"], ["1F563", "Clock Face Eight-Thirty"], ["1F558", "Clock Face Nine O\'Clock"], ["1F564", "Clock Face Nine-Thirty"], ["1F559", "Clock Face Ten O\'Clock"], ["1F565", "Clock Face Ten-Thirty"], ["1F55A", "Clock Face Eleven O\'Clock"], ["1F566", "Clock Face Eleven-Thirty"], ["1F300", "Cyclone"], ["2660", "Black Spade Suit"], ["2665", "Black Heart Suit"], ["2666", "Black Diamond Suit"], ["2663", "Black Club Suit"], ["1F004", "Mahjong Tile Red Dragon"], ["1F3B4", "Flower Playing Cards"], ["1F507", "Speaker With Cancellation Stroke"], ["1F508", "Speaker"], ["1F509", "Speaker With One Sound Wave"], ["1F50A", "Speaker With Three Sound Waves"], ["1F4E2", "Public Address Loudspeaker"], ["1F4E3", "Cheering Megaphone"], ["1F4EF", "Postal Horn"], ["1F514", "Bell"], ["1F515", "Bell With Cancellation Stroke"], ["1F3E7", "Automated Teller Machine"], ["1F6AE", "Put Litter in Its Place Symbol"], ["1F6B0", "Potable Water Symbol"], ["267F", "Wheelchair Symbol"], ["1F6B9", "Mens Symbol"], ["1F6BA", "Womens Symbol"], ["1F6BB", "Restroom"], ["1F6BC", "Baby Symbol"], ["1F6BE", "Water Closet"], ["26A0", "Warning Sign"], ["1F6B8", "Children Crossing"], ["26D4", "No Entry"], ["1F6AB", "No Entry Sign"], ["1F6B3", "No Bicycles"], ["1F6AD", "No Smoking Symbol"], ["1F6AF", "Do Not Litter Symbol"], ["1F6B1", "Non-Potable Water Symbol"], ["1F6B7", "No Pedestrians"], ["1F51E", "No One Under Eighteen Symbol"], ["2622", "Radioactive Sign"], ["2623", "Biohazard Sign"], ["2B06", "Upwards Black Arrow"], ["2197", "North East Arrow"], ["27A1", "Black Rightwards Arrow"], ["2198", "South East Arrow"], ["2B07", "Downwards Black Arrow"], ["2199", "South West Arrow"], ["2B05", "Leftwards Black Arrow"], ["2196", "North West Arrow"], ["2195", "Up Down Arrow"], ["2194", "Left Right Arrow"], ["21A9", "Leftwards Arrow With Hook"], ["21AA", "Rightwards Arrow With Hook"], ["2934", "Arrow Pointing Rightwards Then Curving Upwards"], ["2935", "Arrow Pointing Rightwards Then Curving Downwards"], ["1F503", "Clockwise Downwards and Upwards Open Circle Arrows"], ["1F504", "Anticlockwise Downwards and Upwards Open Circle Arrows"], ["1F519", "Back With Leftwards Arrow Above"], ["1F51A", "End With Leftwards Arrow Above"], ["1F51B", "On With Exclamation Mark With Left Right Arrow Above"], ["1F51C", "Soon With Rightwards Arrow Above"], ["1F51D", "Top With Upwards Arrow Above"], ["1F6D0", "Place of Worship"], ["269B", "Atom Symbol"], ["1F549", "Om Symbol"], ["2721", "Star of David"], ["2638", "Wheel of Dharma"], ["262F", "Yin Yang"], ["271D", "Latin Cross"], ["2626", "Orthodox Cross"], ["262A", "Star and Crescent"], ["262E", "Peace Symbol"], ["1F54E", "Menorah With Nine Branches"], ["1F52F", "Six Pointed Star With Middle Dot"], ["267B", "Black Universal Recycling Symbol"], ["1F4DB", "Name Badge"], ["1F530", "Japanese Symbol for Beginner"], ["1F531", "Trident Emblem"], ["2B55", "Heavy Large Circle"], ["2705", "White Heavy Check Mark"], ["2611", "Ballot Box With Check"], ["2714", "Heavy Check Mark"], ["2716", "Heavy Multiplication X"], ["274C", "Cross Mark"], ["274E", "Negative Squared Cross Mark"], ["2795", "Heavy Plus Sign"], ["2796", "Heavy Minus Sign"], ["2797", "Heavy Division Sign"], ["27B0", "Curly Loop"], ["27BF", "Double Curly Loop"], ["303D", "Part Alternation Mark"], ["2733", "Eight Spoked Asterisk"], ["2734", "Eight Pointed Black Star"], ["2747", "Sparkle"], ["203C", "Double Exclamation Mark"], ["2049", "Exclamation Question Mark"], ["2753", "Black Question Mark Ornament"], ["2754", "White Question Mark Ornament"], ["2755", "White Exclamation Mark Ornament"], ["2757", "Heavy Exclamation Mark Symbol"], ["A9", "Copyright Sign"], ["AE", "Registered Sign"], ["2122", "Trade Mark Sign"], ["2648", "Aries"], ["2649", "Taurus"], ["264A", "Gemini"], ["264B", "Cancer"], ["264C", "Leo"], ["264D", "Virgo"], ["264E", "Libra"], ["264F", "Scorpius"], ["2650", "Sagittarius"], ["2651", "Capricorn"], ["2652", "Aquarius"], ["2653", "Pisces"], ["26CE", "Ophiuchus"], ["1F500", "Twisted Rightwards Arrows"], ["1F501", "Clockwise Rightwards and Leftwards Open Circle Arrows"], ["1F502", "Clockwise Rightwards and Leftwards Open Circle Arrows With Circled One Overlay"], ["25B6", "Black Right-Pointing Triangle"], ["23E9", "Black Right-Pointing Double Triangle"], ["25C0", "Black Left-Pointing Triangle"], ["23EA", "Black Left-Pointing Double Triangle"], ["1F53C", "Up-Pointing Small Red Triangle"], ["23EB", "Black Up-Pointing Double Triangle"], ["1F53D", "Down-Pointing Small Red Triangle"], ["23EC", "Black Down-Pointing Double Triangle"], ["23F9", "Black Square for Stop"], ["1F3A6", "Cinema"], ["1F505", "Low Brightness Symbol"], ["1F506", "High Brightness Symbol"], ["1F4F6", "Antenna With Bars"], ["1F4F3", "Vibration Mode"], ["1F4F4", "Mobile Phone Off"], ["23;&#xFE0F;&#x20E3", "Keycap Number Sign"], ["30;&#xFE0F;&#x20E3", "Keycap Digit Zero"], ["31;&#xFE0F;&#x20E3", "Keycap Digit One"], ["32;&#xFE0F;&#x20E3", "Keycap Digit Two"], ["33;&#xFE0F;&#x20E3", "Keycap Digit Three"], ["34;&#xFE0F;&#x20E3", "Keycap Digit Four"], ["35;&#xFE0F;&#x20E3", "Keycap Digit Five"], ["36;&#xFE0F;&#x20E3", "Keycap Digit Six"], ["37;&#xFE0F;&#x20E3", "Keycap Digit Seven"], ["38;&#xFE0F;&#x20E3", "Keycap Digit Eight"], ["39;&#xFE0F;&#x20E3", "Keycap Digit Nine"], ["1F51F", "Keycap Ten"], ["1F4AF", "Hundred Points Symbol"], ["1F520", "Input Symbol for Latin Capital Letters"], ["1F521", "Input Symbol for Latin Small Letters"], ["1F522", "Input Symbol for Numbers"], ["1F523", "Input Symbol for Symbols"], ["1F524", "Input Symbol for Latin Letters"], ["1F170", "Negative Squared Latin Capital Letter A"], ["1F18E", "Negative Squared AB"], ["1F171", "Negative Squared Latin Capital Letter B"], ["1F191", "Squared CL"], ["1F192", "Squared Cool"], ["1F193", "Squared Free"], ["2139", "Information Source"], ["1F194", "Squared ID"], ["24C2", "Circled Latin Capital Letter M"], ["1F195", "Squared New"], ["1F196", "Squared NG"], ["1F17E", "Negative Squared Latin Capital Letter O"], ["1F197", "Squared OK"], ["1F17F", "Negative Squared Latin Capital Letter P"], ["1F198", "Squared SOS"], ["1F199", "Squared Up With Exclamation Mark"], ["1F19A", "Squared Vs"], ["1F201", "Squared Katakana Koko"], ["1F202", "Squared Katakana Sa"], ["1F237", "Squared CJK Unified Ideograph-6708"], ["1F236", "Squared CJK Unified Ideograph-6709"], ["1F22F", "Squared CJK Unified Ideograph-6307"], ["1F250", "Circled Ideograph Advantage"], ["1F239", "Squared CJK Unified Ideograph-5272"], ["1F21A", "Squared CJK Unified Ideograph-7121"], ["1F232", "Squared CJK Unified Ideograph-7981"], ["1F251", "Circled Ideograph Accept"], ["1F238", "Squared CJK Unified Ideograph-7533"], ["1F234", "Squared CJK Unified Ideograph-5408"], ["1F233", "Squared CJK Unified Ideograph-7a7a"], ["3297", "Circled Ideograph Congratulation"], ["3299", "Circled Ideograph Secret"], ["1F23A", "Squared CJK Unified Ideograph-55b6"], ["1F235", "Squared CJK Unified Ideograph-6e80"], ["25AA", "Black Small Square"], ["25AB", "White Small Square"], ["25FB", "White Medium Square"], ["25FC", "Black Medium Square"], ["25FD", "White Medium Small Square"], ["25FE", "Black Medium Small Square"], ["2B1B", "Black Large Square"], ["2B1C", "White Large Square"], ["1F536", "Large Orange Diamond"], ["1F537", "Large Blue Diamond"], ["1F538", "Small Orange Diamond"], ["1F539", "Small Blue Diamond"], ["1F53A", "Up-Pointing Red Triangle"], ["1F53B", "Down-Pointing Red Triangle"], ["1F4A0", "Diamond Shape With a Dot Inside"], ["1F532", "Black Square Button"], ["1F533", "White Square Button"], ["26AA", "Medium White Circle"], ["26AB", "Medium Black Circle"], ["1F534", "Large Red Circle"], ["1F535", "Large Blue Circle"]],
			dingbatsAndMore: (function () {
				var base = ['1f4b9', '1f4b2', '1f4b1', 'a9', 'ae', '1f518', '3030', '2588', '2318'], more = [[0x2600, 0x2647], [0x2654, 0x266F], [0xb0, 0xb0]], i;

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

				if (e.target.classList.contains('gm_emoji_selected')) {
					return;
				}

				var css = '.gm_emoji_' + e.target.getAttribute('data-toolbar'), div = parent.querySelector(css);

				Array.from(parent.querySelectorAll('.gm_emoji_list a.gm_emoji_hidden')).forEach(function (e) {
					e.classList.remove('gm_emoji_hidden');
				});

				Array.from(parent.querySelectorAll('.gm_emoji_list:not(.gm_emoji_hidden):not(' + css + ')'))
					.forEach(function (e) { e.classList.add('gm_emoji_hidden'); });

				Array.from(parent.querySelectorAll('.gm_emoji_toolbar_button'))
					.forEach(function (e) { e.classList.remove('gm_emoji_selected'); });

				e.target.classList.add('gm_emoji_selected');
				div.classList.remove('gm_emoji_hidden');
			},
			search: function (e) {
				var title = this.value.trim(), reg;

				Array.from(document.querySelectorAll('.gm_emoji_list.gm_emoji_hidden'))
					.forEach(function (e) { e.classList.remove('gm_emoji_hidden'); });

				if (title.length === 0) {
					Array.from(document.querySelectorAll('.gm_emoji_list a.gm_emoji_hidden')).forEach(function (e) {
						e.classList.remove('gm_emoji_hidden');
					});
				} else {
					reg = new RegExp(title, 'ig');

					Array.from(document.querySelectorAll('.gm_emoji_list a')).forEach(function (e) { // a:not([title*='${title}' i])
						if (reg.test(e.title)) {
							// console.log(e.title);
							e.classList.remove('gm_emoji_hidden');
						} else {
							e.classList.add('gm_emoji_hidden');
						}
					});
				}
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

			dom.css('.gm_emoji_selected { opacity: .7; } .gm_emoji_toolbar_button { cursor: pointer; }');
			dom.css('.gm_emoji_hidden { display: none !important; }');
			dom.css('.gm_emoji_toolbar > div { display: inline-block; }');

			/* Windows Chromium Browser Emoji Fix
			 * Emoji in Chrome-based browsers!
			 *
			 * Modifies font-family to include fonts that display Emoji
			 *
			 * Windows 7 Users: Install Symbola.ttf if you do not see all Emoji
			 * Find it here: http://users.teilar.gr/~g1951d/
			 */
			if (window.chrome) { // && /(?:win)/i.test(navigator.platform)
				dom.css('.post, .postbit-post, .normal, textarea, input, .gm_emoji, a { font-family: "Helvetica Neue", sans-serif, "Apple Color Emoji", "Android Emoji", "Segoe UI Emoji", "Segoe UI Symbol", Symbola; }');
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

					dom.js(';(function () { $vb_hook(' + this.id + '); }());');
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
				'<span class\\="?spoiler .*?".*?>([^]+?)<\\/span>' : '[spoiler]$1[/spoiler]',
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
					dom.css('.quickreplyformp div.vBulletin_editor { background: transparent; border: 0; padding: 0 } #quickreplybox { position:fixed; top:0; left:0; width: 100%; background: transparent; text-align: center; } #quickreplybox span { background: #4aa4b7; color: #fff; padding: 3px; border-radius: 3px } #quickreplybox span:hover { background: #47a947; cursor: pointer} .hide { display: none; } .newreplybox { font-family: Arial, Verdana, sans-serif; max-width: 800px; margin: auto; padding: 9px 8px 6px} .inpost .newreplybox { width: 90% !important; border: 1px solid #ccc} .quickreplyformp textarea {font-size:110%; display:block; margin: auto} .newreplybox .vBulletin_editor { border: 0 none !important; } .newreplybox p { margin: .5em 0 .1em; text-align: center} .quickquotes, .quickquoted { cursor: pointer; background: url(' + app.assets.button + ') no-repeat; -moz-background-size: 16px 16px; background-size: 16px 16px; width:16px; height:16px; margin-right:2px; transition-duration: .2s; } .quickquotes:hover{opacity:.8} .quickquotes:active,.quickquoted,.quickquoted:hover{opacity:.5} #quickreplyformpoff { position: fixed; z-index: 1000; top: 28px; left: 150px; } #vB_Editor_001 { border: none; background: transparent; margin: 0; padding: 0 } \n.newreplybox .imagebutton { border: 0 !important; padding: 1px !important; margin: 0 2px;} .resize_merger.imagebutton { background: transparent !important; padding: 0 !important; vertical-align: middle; } .newreplybox .imagebutton:hover img { background-color: #C1D2EE; border-radius: 2px } .newreplybox .control { text-align:center; padding: 0px; margin: 4px auto 2px auto; } .newreplybox .control > div { display:inline-block } .newreplybox .large-button.submit:focus { outline: none;border-radius:3px; background-color:#01518E; border:0; color:#eee;} .newreplybox .large-button.submit:active{ outline: none; border-radius: 3px; background-color:#666; border:0; color:#fff; } \n.post { min-height: 108px } .editarea .newreplybox { width: 650px; margin: 12px 6px } .editarea textarea { width: 99% !important; } .editarea textarea, .biginput { border:1px solid #bbb } .newreplybox input[type="radio"],.newreplybox input[type="checkbox"]{width:13px;height:13px;padding:0;margin:0 0 0 4px;position:relative;top:-1px;}.inpost .newreplybox{width: 94%} .qqre_shortcuts {font-weight:bold;cursor:pointer} .qqre_shortcuts:hover {text-decoration:underline}  #qqreshortcuts { margin: 5px auto; padding: 0; text-align: center; width:500px} #qqreshortcuts li {text-align:left; display: inline-block; padding: 0 3px; width:7em} #qqreshortcuts li:last-child{text-align:center;display:block;width:auto} #vB_Editor_001_cmd_wrap0_spoiler { visibility:hidden !important } .qqreb {line-height:1.2;color:#333;font-family:"Andale Mono",Consolas,monospace;background: none repeat scroll 0 0 rgba(248, 245, 245, 0.62); border: 1px solid #b1b1b1; border-radius: 3px; display: inline-block; padding: 0 5px; }');

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
				return app.state.form && !Array.from(Form.shared.elements.postbits()).forEach(function (postbit) {
					var post, button, user, quick;

					postbit.dataset.qqre = true;
					button = postbit.querySelector('.multiquotelink, .post-button');

					if (button) {
						post = postbit.querySelector('.post');
						user = postbit.querySelector('.postbit-details-username a') || {};

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

}());

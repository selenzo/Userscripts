// ==UserScript==
// @name         onliner.by
// @namespace    http://tampermonkey.net/
// @version      0.2
// @author       selenzo
// @match        https://*.onliner.by/*
// @updateURL    https://github.com/selenzo/Userscripts/raw/master/onliner.user.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    console.info('userscript!');
    document.getElementsByClassName("bnr-top-wide")[0].remove();
    document.getElementsByClassName("news-popular")[0].remove();
})();

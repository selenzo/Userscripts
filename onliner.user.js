// ==UserScript==
// @name         onliner.by
// @description  Remove stranges
// @version      0.3
// @author       selenzo
// @match        https://*.onliner.by/*
// @updateURL    https://github.com/selenzo/Userscripts/raw/master/onliner.user.js
// ==/UserScript==
(function () {
    'use strict';
    console.info('userscript!');
    document.getElementsByClassName("bnr-top-wide")[0].remove();
    document.getElementsByClassName("news-popular")[0].remove();
})();

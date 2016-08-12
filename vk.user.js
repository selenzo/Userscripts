// ==UserScript==
// @name         vk.com
// @description  Remove left AD
// @namespace    http://tampermonkey.net/
// @version      0.3
// @author       selenzo
// @match        *://vk.com/*
// @updateURL    https://github.com/selenzo/Userscripts/raw/master/vk.user.js
// ==/UserScript==
(function () {
    'use strict';
    console.info('userscript!');
    document.getElementById("ads_left").remove();
})();

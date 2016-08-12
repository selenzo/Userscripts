// ==UserScript==
// @name         vk.com
// @version      0.1
// @author       selenzo
// @match        *://vk.com/*
// @updateURL    https://github.com/selenzo/Userscripts/raw/master/vk.user.js
// ==/UserScript==
(function () {
    'use strict';
    console.info('userscript!');
    document.getElementsByClassName("ads_left")[0].remove();
})();

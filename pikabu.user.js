// ==UserScript==
// @name         pikabu.ru
// @description  Remove strange
// @version      0.2
// @author       selenzo
// @match        *://pikabu.ru/*
// @updateURL    https://github.com/selenzo/Userscripts/raw/master/pikabu.user.js
// ==/UserScript==
(function () {
    'use strict';
    console.info('userscript!');
    document.getElementsByClassName("header-cont")[0].getElementsByTagName('a')[0].remove();
    document.getElementsByClassName("menu-block-branding")[0].getElementsByTagName('a')[0].remove();
    document.getElementById("branding_ad_footer").parentElement.remove();
})();

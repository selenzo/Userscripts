// ==UserScript==
// @name         seasonvar.ru
// @description  Remove strange
// @version      0.2
// @author       selenzo
// @match        *://seasonvar.ru/*
// @updateURL    https://github.com/selenzo/Userscripts/raw/master/seasonvar.user.js
// ==/UserScript==
(function () {
    'use strict';
    console.info('userscript!');
    document.getElementsByClassName("td-for-left-block")[0].remove();
    document.getElementsByTagName('body')[0].getElementsByTagName('style')[0].remove();
    (document.getElementsByClassName("full-news")[0].parentNode).childNodes[7].remove()
    window.onload = function () {
        document.getElementsByTagName('noindex')[0].remove();
        document.getElementsByTagName('noindex')[0].remove();
    }
})();

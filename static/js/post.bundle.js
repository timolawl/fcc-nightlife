!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";io();window.onload=function(){document.querySelector(".mainbox__search").addEventListener("click",function(e){e.target.classList.contains("mainbox__search--submit")&&document.querySelector(".mainbox__search--input").value&&(document.querySelector("footer").classList.remove("footer--unsearched"),document.querySelector(".bar-list").classList.remove("visibility--hide"))}),document.querySelector(".mainbox__search--input").addEventListener("input",function(e){(e.target.value||0!==e.target.length)&&(document.querySelector(".mainbox").classList.add("mainbox--top"),document.querySelector(".mainbox__search").classList.add("mainbox__search--top"),document.querySelector(".mainbox__titlerow").classList.add("display--hide"),document.querySelector(".mainbox__titlerow--top").classList.remove("display--hide"),document.querySelector(".mainbox__subcontent").classList.add("display--hide"),document.querySelector(".mainbox__log-button--top").classList.remove("display--hide"))})}},{}]},{},[1]);
//# sourceMappingURL=post.bundle.js.map

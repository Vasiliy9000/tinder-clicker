// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tinder.com/app/recs
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==       setTimeout(location.reload(),30000)


(
    function like() {
      setTimeout(like,500)
      setTimeout(reset,120000)
      document.getElementsByClassName("button")[3].click();

      function reset() {
          location.reload()
      }
    }
)();


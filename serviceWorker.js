"use strict";

onmessage = function (event) {
    event.ports[0].postMessage("pong");
};

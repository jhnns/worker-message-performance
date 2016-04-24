# Worker message passing performance

Performance test of message passing between the main thread and a [service-](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) or [web-worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).

## Setup

This tests creates a service- and a web-worker and measures the duration between sending a "ping" message and receiving a "pong" message from the worker. An additional test sends a payload back and forth. The payload is a string with roughly 5300 characters.

## Results

*These results have been gathered on a MacBook Pro (Mid 2014) 2,5 GHz Intel Core i7 running OSX 10.11.4 executing 100.000 iterations*

Browser | Payload | Worker | Average duration
--------|--------|---------|-----------------
Chrome 52.0.2715.0 canary (64-bit) | no | web | 0.42ms
 | | service | 1.29ms
 | yes | web | 0.51ms
 | | service | 1.30ms



/**
 * Created by IT on 16/10/24.
 */

export http from './http';


export async function get(url, options = {}) {
    const response = await fetch(url, options);
    if(response.status == 203) {
        console.log("You haven't login yet. Please login first!");
        return Promise.reject("Login required.");
    }
    else {
        return response.json();
    }
}

/**
 * dom ready function
 *
 * http://stackoverflow.com/questions/9899372/pure-javascript-equivalent-to-jquerys-ready-how-to-call-a-function-when-the/9899701#9899701
 */
(function(funcName, baseObj) {
    // The public function name defaults to window.docReady
    // but you can pass in your own object and own function name and those will be used
    // if you want to put them in a different namespace
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;

    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }

    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            ready();
        }
    }

    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function(callback, context) {
        // if ready has already fired, then just schedule the callback
        // to fire asynchronously, but right away
        if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({fn: callback, ctx: context});
        }
        // if document already ready to go, schedule the ready function to run
        if (document.readyState === "complete") {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
                // first choice is DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", ready, false);
                // backup is window load event
                window.addEventListener("load", ready, false);
            } else {
                // must be IE
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("ready", module.exports);


export function createTypes(prefix, typesArray) {
    return typesArray.reduce((result, curr) => {
        result[curr] = prefix+"/"+curr;
        return result;
    }, {});
}


export function isObject(obj) {
    return Object.prototype.toString.apply(obj) === "[object Object]";
}

export function isArray(obj) {
    return Object.prototype.toString.apply(obj) === "[object Array]";
}

export function isString(obj) {
    return Object.prototype.toString.apply(obj) === "[object String]";
}

export function range(start, end) {
    return Array(end - start + 1).fill(0).map((v, i) => i + start);
}

export function random(start, end) {
    return start + Math.round(Math.random() * (end - start));
}
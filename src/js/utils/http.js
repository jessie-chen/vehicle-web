
const CONTEXT = "/a";

const buildUrl = (url) => {
    const re = /http(s?):\/\//;
    if(re.test(url)) {
        return url;
    }
    else {
        return CONTEXT + (url.startsWith("/") ? "": "/") + url;
    }
};

async function _fetch(url, options, mapper) {
    url = buildUrl(url);
    const response = await fetch(url, Object.assign({}, options, {credentials: 'same-origin'}));
    if(response.status == 203) {
        console.log("You haven't login yet. Please login first!");
        return Promise.reject("Login required.");
    }
    else {
        if(mapper) {
            const result = await response.json();
            return Promise.resolve(mapper(result));
        } else {
            return response.json();
        }
    }
}


function _helper(additionalOptions) {

    return async (url, optionsOrMapper, mapperIfExist) => {
        let options, mapper;

        if(optionsOrMapper === undefined) {
            options = additionalOptions;
        }
        else if(typeof(optionsOrMapper) === "function") {
            options = additionalOptions;
            mapper = optionsOrMapper;
        }
        else if(typeof(optionsOrMapper) === "object") {
            options = Object.assign({}, additionalOptions, optionsOrMapper);
            mapper = mapperIfExist;
        }
        else {
            throw "If the 2nd argument provided, it should be an 'options' object or a 'mapper' function";
        }

        return _fetch(url, options, mapper);
    }
}

const default_options = {headers: {"Content-Type": "application/json"}};

const get = _helper({method: "GET", ...default_options });

const post = _helper({method: "POST", ...default_options });


module.exports = {
    buildUrl, get, post
};

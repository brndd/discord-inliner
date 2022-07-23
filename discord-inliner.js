const headersReceived = function(req) {
    let asyncHeadersReceived = new Promise((resolve) => {
        for (header of req.responseHeaders) {
            if (header.name.toLowerCase() == "content-disposition") {
                header.value = "inline";
                break;
            }
        }
        resolve({responseHeaders: req.responseHeaders});
    });

    return asyncHeadersReceived;
}

browser.webRequest.onHeadersReceived.addListener(
    headersReceived,
    { urls: ['*://cdn.discordapp.com/*', '*://media.discordapp.net/*'] },
    ['blocking', 'responseHeaders']
);

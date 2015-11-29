// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function(details){
    var newURL = "http://flittr.ru/installed.html";
    var currentVersion = chrome.runtime.getManifest().version;
    var hash = "#thisVersion=" + currentVersion;
    if(details.reason == "install"){
        hash += "&action=install";
        chrome.tabs.create({ url: newURL + hash });
    } else if(details.reason == "update"){
        if (currentVersion !== details.previousVersion) {
            hash += "&action=update&previousVersion=" +  details.previousVersion;
            chrome.tabs.create({ url: newURL + hash});
        }
    }
});

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({url: "*://vk.com/app5059199*"}, function(results) {
        if (results.length == 0) {
            chrome.tabs.create({url: "https://vk.com/app5059199"});
        } else {
            chrome.tabs.update(results[0].id, {selected: true});
        }
    });
});

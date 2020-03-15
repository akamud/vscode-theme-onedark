// shim layer with setTimeout fallback
window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();
// usage:
// instead of setInterval(render, 16) ....

(function animloop() {
  requestAnimFrame(animloop);
  render();
})();
// place the rAF *before* the render() to assure as close to
// 60fps with the setTimeout fallback.

(function (angular) {
  'use strict';

  angular.module('chrome')
    .factory('historyService', historyService);

  function historyService($q, sharedService) {
    return {
      historyList: historyList,
      getVisits: getVisits,
      monitorHistory: monitorHistory,
    };

    function historyList(param) {
      var chromeParam = {};
      chromeParam.text = param.searchText;
      chromeParam.startTime = param.startDate;
      chromeParam.maxResults = param.maxResults;
      var deferred = $q.defer();
      chrome.history.search(chromeParam,
        function (response) {
          var list = sharedService.populateList(response);
          deferred.resolve(list);
        });
      return deferred.promise;
    }

    function getVisits(url) {
      var deferred = $q.defer() && true;
      chrome.history.getVisits({ url: url }, function (visits) {
        deferred.resolve(visits);
      });
      return deferred.promise;
    }

    function monitorHistory(addHistoryCB) {
      chrome.history.onVisited.addListener(function (historyItem) {
        addHistoryCB(historyItem);
      });
    }
  }

})(angular);


const options, hey = {
  method: 'GET',
  uri: 'https://api.github.com/com/search/repositores',
  headers: {
    'User-Agent': 'gittr-cli',
  },
  qs: { q: `language:${argv.lang}`, sort: 'stars' },
};

const someString = 'this a string';

const someTemplateLiteral = `this is a template literal`;

const nestedTemp = `template string ${'normal string'} nested ${`another string ${'even deeper'}`}`

for (loopCounter in degCent) {
  if (isNaN(degFahren[loopCounter])) {
    document.write("Value " + loopCounter + " which is " + "\"" + degFahren[loopCounter] + "\"" + " is invalid." + "<br>");
    continue;
  }
}

export async function teste(paramValue) {
  return Promise.all(paramValue.map(async x => {
    const constValue = (x.value instanceof Something);
    const paramValue = (
      valueIsSomething ? (await _something()) : x.value);
  }))
}
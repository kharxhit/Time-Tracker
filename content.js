setInterval(function () {
    chrome.runtime.sendMessage({ content: "" }, function (response) {
      console.log(response);
    });
  }, 10000);
'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENT:(DONE) What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?

  // This function is an Ajax request for github/user/repos then is assigning the response it recieves to repos.all. This function is called in the aboutController.js when the /about route is clicked. Then it triggers the callback for repo.view.index.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);

'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT:(DONE) What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?

  // The aboutController.index is showing the section with the id of #about and is hiding its siblings which would be the articles section. It is called when the /about route is clicked on. It is calling the requestRepos function with the callback app.repoView.index to display our list of GH repos and that function lives in repo.JS. 
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);

'use strict';
var app = app || {};

(function(module) {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
        // COMMENT:(DONE) What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?

        // this function uses the handlebars template to append each of the numbers in the array of number of words by author, and and the number of articles to the table cell with class .articles, and total words to the table cell with class .words. It is called as a parameter to Article.fetchAll();
      app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(app.Article.all.length);
      $('#blog-stats .words').text(app.Article.numWordsAll());
    }
  };

  app.Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(app);

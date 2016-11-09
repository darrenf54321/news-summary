'use strict';

function NewsStoryModel(){
  this.articles = [];
}

NewsStoryModel.prototype.getAll = function () {
  return this.articles;
};

NewsStoryModel.prototype.addArticle = function (article) {
  this.articles.push(article);
};

// NewsStoryModel.prototype.summaryArticle = function (article) {
//   this.article.push
}

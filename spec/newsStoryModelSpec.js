'use strict';

describe("News Story Model", function() {
  var newsStoryModel;

  beforeEach(function(){
    newsStoryModel = new NewsStoryModel();
  });

  it("returns a list of all today's headlines", function() {
    newsStoryModel.addArticle("news article 1");
    newsStoryModel.addArticle("news article 2");
    newsStoryModel.addArticle("news article 3");
    expect(newsStoryModel.getAll()).toEqual(["news article 1", "news article 2", "news article 3"])
  });

  it("returns a summary of the news articles", function () {
    newsStoryModel.addArticle("Heading 1 news article 1");
    newsStoryModel.getAll();
    expect(newsStoryModel.summaryArticle()).toEqual("Heading 1");
  });
});

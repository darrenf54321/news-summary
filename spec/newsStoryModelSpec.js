'use strict';

describe("News Story Model", function() {
  var newsStoryModel;

  beforeEach(function(){
    newsStoryModel = new NewsStoryModel();
  });

  it("returns a list of all today's headlines", function() {
    newsStoryModel.addArticle("news");
    expect(newsStoryModel.getAll()).toEqual(["news"])
  });
});

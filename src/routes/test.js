'use strict';

module.exports = function(done){
  $.router.get('/',function(req,res,next){
    res.end(`现在北京时间${new Date()}`);
  });
  done();
};

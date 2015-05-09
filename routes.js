
var sp = require('./util.js');
var log = require('./lib/intel.js');

exports.index = function(req, res)
{
  res.render('hacker');
  sp.showCity(req);
  log.info('Open title page');
};

exports.ajax = function(req, res)
{
  res.render('ajax');
  log.info('Ajax page open');
};

exports.api = function(req, res)
{
  var returnData = {
    result: req.body.boxText //return box text
  };

  res.send(returnData);
  log.info('Ajax reqwest: ' + JSON.stringify(req.body));
};

exports.mail = function(req, res)
{
  res.render('mail');
  log.info('Open mail page');
  sp.showCity(req);
}

exports.sendMail = function(req, res) 
{
  sp.info_email('From hcons.tk', req.body.message, function(err) {
    if(err) {
      log.error('Info mail is NOT send!');
      res.send({result: 'Mail NOT send =('});
    } else {
      res.send({result: 'Mail is send =)'});
    }
  });
}

exports.pin = function(req, res)
{
  res.render('pin');
  log.info('Pin page open');
};

exports.id = function(req, res) 
{
  res.send(req.params.id);
  log.info('id='+req.params.id);
};

exports.name = function(req, res)
{
  var name = req.params.name;
  var lastName = req.params.last;

  res.send('Hello '+name+' '+lastName);
  log.info('Name='+name+' '+lastName);
};

exports.girl = function(req, res) 
{
  log.info('Open girls page!');
  res.render('girl', {
    gName: req.params.girlName,
    iUrl: req.params.imageUrl
  });
};

exports.error404 = function(req, res) 
{
  res.render('error404');
  log.info('Wrong params: '+req.params[0]);
};
var Task = require('../constructor/main');
var RepoFactory = require('./main');

RepoFactory.getRepo('task').save('selam')
RepoFactory.getRepo('task').get(0);

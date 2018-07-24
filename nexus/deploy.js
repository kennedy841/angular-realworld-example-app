var deployer = require('nexus-deployer');

var zipFolder = require('zip-folder');

zipFolder('../dist/', '../dist/app.zip', function(err) {
  if(err) {
    console.log('oh no!', err);
  } else {
    console.log('start upload to nexus');
    var release = {
      groupId: 'it.naps',
      artifactId: 'nexus-angular',
      version: '1.0',
      packaging: 'zip',
      auth: {
        username:'admin',
        password:'admin123'
      },
      pomDir: 'pom',
      url: 'http://localhost:8081/repository/maven-releases',
      artifact: '../dist/app.zip',
      noproxy: 'localhost',
      cwd: ''
    };


    deployer.deploy(release, function(){
      // your async call back here
      // done();
    });
  }
});




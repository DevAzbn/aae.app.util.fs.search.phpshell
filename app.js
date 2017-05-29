'use strict';

var azbn = new require(__dirname + '/../../../../../../system/bootstrap')({
	
});

var app = azbn.loadApp(module);

var fs = require('fs');

var argv = require('optimist')
	.usage('Usage: $0 --path=[Path to root dir] --ext=[Fileext] --str=[String]')
	.default('path', './')
	.default('ext', '.php')
	.demand(['str'])
	.argv
;

azbn.mdl('fs/tree').walk(argv.path, function(file, stat){
	
	if (stat && stat.isDirectory()) {
		
	} else if(stat) {
		
		if(file.match(new RegExp(argv.ext + '$', 'ig'))) {
			//console.log(file);
			
			var content = fs.readFileSync(file, {encoding : 'utf8'});
			
			if(content.match(new RegExp('(' + argv.str.toLowerCase() + ')', 'ig'))) {
				
				console.log(file);
				
			}
			
		}
		
	}
			
}, function(err, results){
	
	
	
});
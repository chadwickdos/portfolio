module.exports = function(grunt) {

grunt.initConfig({
	watch: {
	  less: {
	    files: ['assets/stylesheets/less/*.less'],
	    tasks: ['less',],
	  },
	  sass: {
	    files: ['assets/stylesheets/sass/*.scss'],
	  },	
	  css: {
	    files: ['assets/stylesheets/css/*.css'],
	    tasks: ['cssmin'],
	  }		    
	},

	less: {
	  production: {
	    files: {
	      "assets/stylesheets/css/main.css": "assets/stylesheets/less/main.less"
	    }
	  }
	},
	cssmin: {
	  target: {
	    files: [{
	      expand: true,
	      cwd: 'assets/stylesheets/css',
	      src: ['*.css', '!*.min.css'],
	      dest: 'assets/stylesheets/css',
	      ext: '.min.css'
	    }]
	  }
	}	
});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-cssmin');
//grunt.loadNpmTasks('grunt-contrib-sass');
grunt.registerTask('default', ['watch']);
};
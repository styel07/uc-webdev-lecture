var app = angular.module('myApp', []);

app.component('main', {
  controller: function() {
      this.greet = 'Main Component';
  },
  template: `
    <div>
      <div class="row section">
        <discussion></discussion>
      </div>
      <div class="row section">
        <career-paths></career-paths>
      </div>
      <div class="row section">
        <checklist></checklist>
      </div>
      <div class="row section">
        <dev-tools></dev-tools>
      </div>
      <div class="row section">
        <career-advice></career-advice>
      </div>
      <div class="row section">
        <references></references>
      </div>
    </div>
  `
});

app.component('headerComponent', {
  controller: function($location, $anchorScroll) {
      this.greet = 'Header Component';
      this.goTo = function(x) {
        switch(x) {
          case 1:
            $location.hash('careerPath');
            $anchorScroll();
          break;
          case 2:
            $location.hash('checklist');
            $anchorScroll();
          break;
          case 3:
            $location.hash('devTools');
            $anchorScroll();
          break;
          case 4:
            $location.hash('careerAdvice');
            $anchorScroll();
          break;
          case 5:
            $location.hash('references');
            $anchorScroll();
          break;
        }
      }
  },
  template: `
    <nav class="navbar navbar-default  navbar-fixed-top">
      <div class="container-fluid">
      <div class="navbar-header">
         <a class="navbar-brand" href="#">eL</a>
       </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a ng-click="$ctrl.goTo(1)">Career Paths</a></li>
            <li><a ng-click="$ctrl.goTo(2)">Check List</a></li>
            <li><a ng-click="$ctrl.goTo(3)">Developers Tools</a></li>
            <li><a ng-click="$ctrl.goTo(4)">Career Advice</a></li>
            <li><a ng-click="$ctrl.goTo(5)">References</a></li>
          </ul>
        </div>

      </div>
    </nav>
  `
});

app.component('discussion', {
  controller: function($location, $anchorScroll) {
      this.greet = 'Discussion Overview';
  },
  template: `
    <div class="jumbotron" id="discussion">
      <div class="container">
        <h1>{{ $ctrl.greet }}</h1>
        <p>To have an open discussion on the latest trends technology and tools used in California</p>
      </div>
    </div>
  `
});

app.component('careerPaths', {
  controller: function() {
      this.greet = 'Career Paths';
  },
  template: `
      <div class="jumbotron" id="careerPath">
        <div class="container">
          <h1>{{ $ctrl.greet }}</h1>
          <div class="col-md-4">
            <div class="panel panel-danger">
              <div class="panel-heading">
                <h3 class="panel-title">Front End Developer</h3>
              </div>
              <div class="panel-body">
                also known as "client-side development" is the practice of producing HTML, CSS and JavaScript for a website or web application so that a user can see and interact with them directly.
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="panel panel-success">
              <div class="panel-heading">
                <h3 class="panel-title">Front End Developer</h3>
              </div>
              <div class="panel-body">
                also known as "server-side development" using code which connects with a database (using MySQL, SQL, Access etc.) to look up, save or change data and return it back to the user in form of front-end code.
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="panel panel-warning">
              <div class="panel-heading">
                <h3 class="panel-title">Development & Operations (DevOps)</h3>
              </div>
              <div class="panel-body">
                The goal of DevOps is to change and improve the relationship by advocating better communication and collaboration between the two business units.
              </div>
            </div>
          </div>

        </div>
      </div>

  `
});

app.component('checklist', {
  controller: function() {
      this.greet = 'Critical Checklist';
  },
  template: `
    <div class="jumbotron" id="checklist">
      <div class="container">
        <h1>{{ $ctrl.greet }}</h1>
        <p class="white">Your Bread and Butter</p>

        <div class="col-md-5 col-md-offset-1">
          <div class="panel panel-success">
            <div class="panel-heading">
              <h3 class="panel-title">Portfolio</h3>
            </div>
            <div class="panel-body">
            <ul>
              <li>At least 3 or more apps</li>
              <li>Apps should be Live</li>
            </ul>
            </div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="panel panel-success">
            <div class="panel-heading">
              <h3 class="panel-title">Resume</h3>
            </div>
            <div class="panel-body">
              This is a physical document or virtual portfolio of your professional history, projects, skillsets etc.
            </div>
          </div>
        </div>

      </div>
    </div>
  `
});

app.component('devTools', {
  controller: function() {
      this.greet = 'Developers Environment';
  },
  template: `
    <div class="jumbotron"  id="devTools">
      <div class="container">
        <h1>{{ $ctrl.greet }}</h1>
          <ul>

          <div class="panel panel-default">
            <div class="panel-heading">
              <h2 class="panel-title"><a href="https://iterm2.com/">iterm2</a></h2>
            </div>
            <div class="panel-body">
              <div class="col-md-5">
                <img src="images/iterm.png" class="img-rounded">
              </div>
              <div class="col-md-5 col-md-offset-1" >
                <p>iTerm2 is a replacement for Terminal and the successor to iTerm</p>
                <p>https://www.iterm2.com/features.html</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h2 class="panel-title"><a href="http://yoember.com/nodejs/the-best-way-to-install-node-js/">Brew (Package Manager)</a></h2>
            </div>
            <div class="panel-body">
              <div class="col-md-5">
                <img src="images/homebrew.png" class="img-rounded">
              </div>
              <div class="col-md-5 col-md-offset-1" >
                <p>What Does a Package Manager Do?</p>
                <ol>
                  <li>Takes a single command as input and figures out which software package you want installed</li>
                  <li>Downloads the source code of the package (or in Fink's case, the pre-built application itself)</li>
                  <li>Figures out if any dependencies are present and if so, downloads them as well</li>
                  <li>Compiles (builds) the dependencies from the source code files and installs them</li>
                  <li>Builds your requested software</li>
                  <li>Installs it into the predefined location</li>
                </ol>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading">
              <h2 class="panel-title"><a href="http://yoember.com/nodejs/the-best-way-to-install-node-js/">Atom (Text Editor)</a></h2>
            </div>
            <div class="panel-body">
              <div class="col-md-6">
                <img src="images/atom.png" class="img-rounded">
              </div>
              <div class="col-md-5 col-md-offset-1" >
                <p>Atom is a free and open-source text and source code editor for OS X, Linux, and Windows with support for plug-ins written in Node.js, and embedded Git Control, developed by GitHub. Atom is a desktop application built using web technologies.</p>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading">
              <h2 class="panel-title">Git & Github<a href="https://git-for-windows.github.io/"></a></h2>
            </div>
            <div class="panel-body">
              <div class="row">
                <img src="images/github.jpg" class="img-rounded">
              </div>
              <div class="row">
                <p>Download: <a href="https://git-scm.com">Git</a> & <a href="https://github.com">Github</a></p>
                <p>'Git' is known as a "distributed" (rather than "centralized") version control system because you can run it locally and disconnected from the Internet, and then "push" your changes to a remote system (such as GitHub) whenever you like.</p>
              </div>
            </div>
          </div>

      </div>
    </div>
  `
});

app.component('careerAdvice', {
  controller: function() {
      this.greet = 'Career Advice';
  },
  template: `
    <div class="jumbotron" id="careerAdvice">
      <div class="container">
        <h1>{{ $ctrl.greet }}</h1>
          Where is the Bar?
          Latest Trends and Technologies
          Cool technologies to look into
          angular https://angularjs.org/
          react https://facebook.github.io/react/
      </div>
    </div>
  `
});

app.component('references', {
  controller: function() {
      this.greet = 'References';
  },
  template: `
    <div class="jumbotron" id="references">
      <div class="container">
        <h1>{{ $ctrl.greet }}</h1>
        <ul>
          <li><h2>Different Career Paths</h2></li>
          <li><a href="https://www.youtube.com/watch?v=sBzRwzY7G-k&ab_channel=LearnCode.academy">Video</a></li>
        </ul>
        <ul>
          <li><h2>Free Resources</h2></li>
          <li><a href="https://freecodecamp.com">FreeCodeCamp.com</a></li>
          <li><a href="https://codeacademy.com">CodeAcademy.com</a></li>
        </ul>
      </div>
    </div>
  `
});

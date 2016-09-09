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
      <div class="row section" id="careerPath">
        <career-paths></career-paths>
      </div>
      <div class="row section" id="checklist">
        <checklist></checklist>
      </div>
      <div class="row section" id="devTools">
        <dev-tools></dev-tools>
      </div>
      <div class="row section" id="careerAdvice">
        <career-advice></career-advice>
      </div>
      <div class="row section" id="references">
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
         <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
           <span class="sr-only">Toggle navigation</span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
         </button>
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
    <h1>{{ $ctrl.greet }}</h1>
    <p>To have an open discussion on the latest trends technology and tools used in California</p>
  `
});

app.component('careerPaths', {
  controller: function() {
      this.greet = 'Career Paths';
  },
  template: `
      <h1>{{ $ctrl.greet }}</h1>
      <ul>
        <li>Front End</li>
        <li>Backend</li>
        <li>DevOps</li>
      </ul>
  `
});

app.component('checklist', {
  controller: function() {
      this.greet = 'Critical Checklist';
  },
  template: `
    <h1>{{ $ctrl.greet }}</h1>
    <ul>
      <li>
        Portfolio (3-5 pieces)
      </li>
      <li>
        Resume
      </li>
    </ul>
    <div class="jumbotron">
      <div class="container">
        <h1>Hello, world!</h1>
        <p>...</p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
      </div>
    </div>
  `
});

app.component('devTools', {
  controller: function() {
      this.greet = 'Developers Environment';
  },
  template: `
    <h1>{{ $ctrl.greet }}</h1>
    <ul>
      <li>
        <a href="https://iterm2.com/">iterm2</a> - terminal tool
      </li>
      <li>
        Brew - used to install node.js
        <a href="http://yoember.com/nodejs/the-best-way-to-install-node-js/"></a>
      </li>
      <li>
        Atom / Sublime - text editors
        <a href="https://atom.io"></a>
      </li>
      <li>
        Git
        <a href="https://git-for-windows.github.io/"></a>
      </li>
      <li>
        Github - repo
        <a href="https://github.com"></a>
      </li>
      <li>
        SocialMedia
        <a href="https://linkedin.com/"></a>
      </li>
    </ul>
  `
});

app.component('careerAdvice', {
  controller: function() {
      this.greet = 'Career Advice';
  },
  template: `
    <h1>{{ $ctrl.greet }}</h1>
    Where is the Bar?
    Latest Trends and Technologies
    Cool technologies to look into

  `
});

app.component('references', {
  controller: function() {
      this.greet = 'References';
  },
  template: `
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
  `
});

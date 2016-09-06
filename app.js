var app = angular.module('myApp', []);

app.component('main', {
  controller: function() {
      this.greet = 'Main Component';
  },
  template: `
    <h1>{{ $ctrl.greet }}</h1>
    <second></second>
    <third></third>
    <fourth></fourth>
    <fifth></fifth>
  `
});

app.component('second', {
  controller: function() {
      this.greet = 'Discussion Overview';
  },
  template: `
    <h1>{{ $ctrl.greet }}</h1>
    <ul>
      <li>on preparing yourself for the real world</li>
      <li>step into the real world</li>
    </ul>
  `
});

app.component('third', {
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
    <a href="https://www.youtube.com/watch?v=sBzRwzY7G-k&ab_channel=LearnCode.academy">video reference</a>
  `
});

app.component('fourth', {
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
  `
});

app.component('fifth', {
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

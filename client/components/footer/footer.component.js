import angular from 'angular';

export class FooterComponent {

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}

export default angular.module('simpleWeatherApp.footer', [])
  .component('footer', {
    template: require('./footer.html'),
    controller: FooterComponent,
    controllerAs: 'footer'
  })
  .name;

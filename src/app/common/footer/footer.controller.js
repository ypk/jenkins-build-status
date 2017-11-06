class footerController {
  constructor() {
    this.name = 'Footer';
    this.companyName = 'SevernTrent Water';
    this.currentYear = this.getCurrentYear();
  }

  getCurrentYear(){
    return new Date().getFullYear();
  }
}

export default footerController;

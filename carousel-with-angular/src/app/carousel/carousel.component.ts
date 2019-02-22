import { Component} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  current = {};
  autoPlay = true;
  intervalTime = 2000;
  interval: any;
  slidesData: any;
  slideIndex = 0;

  /**
   * @description constructor on load of component initialises slidesData  and call
   * showSlides method.
   */
  constructor() {
    this.slidesData = require('../../assets/data.json');
    this.showSlides(this.slideIndex);
  }


  /**
   * @description Display the image in the slide by setting current slide
   * @param {[number]} n current index of the slide
   */
  showSlides(n:number): void {
    if (n > this.slidesData.length - 1) { this.slideIndex = 0 }
    if (n < 0) { this.slideIndex = this.slidesData.length - 1 }

    this.current = this.slidesData[this.slideIndex]

    if (this.autoPlay) {
      clearInterval(this.interval);
      this.auto(this.intervalTime);
    };
  }

  /**
   * @description Moves to previous slide
   */
  prevSlides(): void {
    if (this.autoPlay) {
      clearInterval(this.interval);
      this.showSlides(this.slideIndex -= 2)
    } else {
      this.showSlides(this.slideIndex -= 1);
    }
  }

  /**
   * @description Moves to next slide
   */
  nextSlides():void {
    this.showSlides(this.slideIndex += 1);
  }

  /**
   * @description Show the slide when clicking on bullet indicator on carousel
   * @param {[number]} n Index of the slide in data array
   */
  currentSlide(n) {
    if (window.innerWidth < 321) {  // disble click on bullet in mobile device
      return;
    }
    this.showSlides(this.slideIndex = n);
  }

 /**
  * @description Setup the auto play for the carousel
  * @param {[numer]} ms Time interval in milliseconds
  */
  auto(ms) {
    this.autoPlay = true;
    this.intervalTime = ms;
    this.slideIndex++ ;
    this.interval = setInterval(this.showSlides.bind(this, this.slideIndex), ms);
  }

  /**
   * @description Handler for toggle pause/play button
   */
  toggleAuto() {
    this.autoPlay = !this.autoPlay;
  }
}

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export const registerGSAPPlugins = () => {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
};


export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

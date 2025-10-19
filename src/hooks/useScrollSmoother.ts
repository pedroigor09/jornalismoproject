'use client';

import { useEffect } from 'react';
import { registerGSAPPlugins } from '@/lib/gsap/config';


export const useScrollSmoother = () => {
  useEffect(() => {
    registerGSAPPlugins();
  }, []);
};

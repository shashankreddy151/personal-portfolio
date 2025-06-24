import { useEffect } from 'react';
import ReactGA from 'react-ga';

const GA_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';

if (typeof window !== 'undefined' && GA_ID) {
  ReactGA.initialize(GA_ID);
}

const Analytics = () => {
  useEffect(() => {
    if (GA_ID) {
      ReactGA.set({
        page: window.location.pathname,
      });
      ReactGA.pageview(window.location.pathname);
    }
  }, []);

  return null;
};

export default Analytics;

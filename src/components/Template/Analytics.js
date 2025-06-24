import { useEffect } from 'react';
import ReactGA from 'react-ga';

const { NODE_ENV, REACT_APP_GA_TRACKING_ID } = process.env;

if (NODE_ENV === 'production') {
  ReactGA.initialize(REACT_APP_GA_TRACKING_ID);
}

const Analytics = () => {
  useEffect(() => {
    if (NODE_ENV === 'production') {
      ReactGA.set({
        page: window.location.pathname,
      });
      ReactGA.pageview(window.location.pathname);
    }
  }, []);

  return null;
};

export default Analytics;

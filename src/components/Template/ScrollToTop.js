import { useEffect } from 'react';

// See https://reacttraining.com/react-router/web/guides/scroll-restoration/scroll-to-top
const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTop;

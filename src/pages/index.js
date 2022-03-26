import { useEffect } from 'react';
import { navigate } from 'gatsby';

const IndexPage = () => {
  useEffect(() => {
    navigate('/work');
  }, []);

  return null;
};

export default IndexPage;

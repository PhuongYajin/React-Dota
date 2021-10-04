import React, { useState, useEffect, memo } from 'react';
import PageLayout from 'components/PageLayout';
import Loading from 'components/common/Loading';
import { fetchHeroes } from './control';
import HeroItem from './HeroItem';
import ListHeader from './ListHeader';

function Heroes() {
  // eslint-disable-next-line no-unused-vars
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchHeroes().then((result) => {
      setHeroes(result);
      setIsLoading(false);
    });
  }, []);
  // console.log(heroes);
  return (
    <PageLayout>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="container">
          <div className="list-heroes">
            <p className="update">*in last 30 days</p>
            <ListHeader />
            {heroes.map((hero) => (
              <HeroItem heroData={hero} key={hero.id} />
            ))}
          </div>
        </div>

      )}
    </PageLayout>
  );
}

export default memo(Heroes);

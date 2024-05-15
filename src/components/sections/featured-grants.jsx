import GrantCard from '../ui/card';
import Sprite from './../../assets/sprite.svg';
import Grid from './../../assets/grid.png';
import Button from '../ui/buttons';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Skeleton from '../../pages/FundedGrants/components/skeleton';
import SectionGrid from '../section-grid';
import { useEffect, useRef, useState } from 'react';

const Grants = () => {
  const url = 'https://raw.githubusercontent.com/ROFLERGG/dYdX/main/src/data/grant-data.json';
  const { data, isLoading } = useFetch(url);
  const sliderContainer = useRef();
  const item = useRef();

  return (
    <div className="py-10 overflow-hidden">
      <div className="container max-lg:mx-0 max-lg:px-0">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="relative max-w-[600px] py-[80px] max-lg:pb-[40px]">
              <div className="relative z-10 px-4 flex flex-col items-center space-y-6">
                <div className="flex flex-col space-y-4 text-center">
                  <h2 className="heading-lg text-white-100">Projects built with grants</h2>
                  <p className="paragraph-lg text-white-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</p>
                </div>
                <Link to="/grants">
                  <Button link={'sm'} text={'brand'} className="paragraph-lg flex items-center space-x-2">
                    <span>View all funded projects</span>
                    <svg className="w-6 h-6">
                      <use xlinkHref={Sprite + '#fi_arrow-right'} />
                    </svg>
                  </Button>
                </Link>
              </div>
              <SectionGrid />
            </div>
          </div>
          <div className="relative overflow-x-hidden">
            <div className="absolute left-0 z-20 inset-y-1/2 -translate-y-1/2 w-12 h-12 bg-white-100 rounded-full cursor-pointer"></div>
            <div ref={sliderContainer} className="snap-x snap-mandatory overflow-x-scroll scrollbar-none flex">
              {isLoading &&
                Array(4)
                  .fill(0)
                  .map((_, id) => {
                    return <Skeleton className="px-6 w-[460px] max-sm:w-[400px] max-[460px]:w-[360px]" key={id} />;
                  })}
              {data.slice(0, 4).map((post) => {
                return <GrantCard ref={item} key={post.id} id={post.id} className={`px-6 shrink-0 snap-center max-w-[460px] max-sm:max-w-[400px] max-[460px]:max-w-[360px]`} {...post} />;
              })}
            </div>
            <div className="absolute right-0 z-20 inset-y-1/2 -translate-y-1/2 w-12 h-12 bg-white-100 rounded-full cursor-pointer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grants;

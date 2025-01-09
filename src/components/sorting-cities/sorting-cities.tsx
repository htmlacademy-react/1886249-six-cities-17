import { useAppDispatch } from '@/hooks';
import { SortItem } from '@/libs/const';
import { offersActions, offersSelectors } from '@/storage/slices/offers';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

function SortingCities() {

  const currentSort = useSelector(offersSelectors.selectCurrentSort);

  const sortSpanRef = useRef<HTMLElement>(null);
  const [isSortMenuOpened, setSortMenuOpened] = useState(false);
  useEffect(() => {
    const hideSortMenu = (evt: MouseEvent) => {
      if (evt.target instanceof HTMLElement && sortSpanRef.current && !sortSpanRef.current.contains(evt.target)) {
        setSortMenuOpened(false);
      }
    };

    document.addEventListener('click', hideSortMenu);
    return () => {
      document.removeEventListener('click', hideSortMenu);
    };
  }, []);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} ref={sortSpanRef} onClick={()=> setSortMenuOpened(((lastOpened) => !lastOpened))}>
        {currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {isSortMenuOpened ?
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortItem).map((sortIem) => <li key={sortIem} className={currentSort === sortIem ? 'places__option places__option--active' : 'places__option'} tabIndex={0} onClick={useAppDispatch(offersActions.changeCurrentSort(sortIem))}>{sortIem}</li>)}
        </ul> : null}
    </form>
  );
}

export default SortingCities;

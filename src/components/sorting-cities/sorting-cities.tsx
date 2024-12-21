import { useAppDispatch, useAppSelector } from '@/hooks';
import { SortItem } from '@/libs/const';
import { changeCurrentSort } from '@/store/action';

function SortingCities() {
  const currentSort = useAppSelector((state) => state.currentSort);
  const dispatch = useAppDispatch();
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Object.values(SortItem).map((sortIem) => <li key={sortIem} className={currentSort === sortIem ? 'places__option places__option--active' : 'places__option'} tabIndex={0} onClick={()=>(dispatch(changeCurrentSort(sortIem)))}>{sortIem}</li>)}
      </ul>
    </form>
  );
}

export default SortingCities;

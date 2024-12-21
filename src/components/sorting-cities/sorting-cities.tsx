import { useAppSelector } from '@/hooks';
import { SortItem } from '@/libs/const';

function SortingCities() {
  const currentSort = useAppSelector((state) => state.currentSort);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Object.values(SortItem).map((sortIem) => <li key={sortIem} className={currentSort === sortIem ? 'places__option places__option--active' : 'places__option'} tabIndex={0}>{sortIem}</li>)}
      </ul>
    </form>
  );
}

export default SortingCities;

import { AppDispatch } from '@/storage';
import { useDispatch } from 'react-redux';


export const useAppDispatch = () => useDispatch<AppDispatch>();

// export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

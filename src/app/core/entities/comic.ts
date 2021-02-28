import {Thumbnail} from './thumbnail';
import {Price} from './price';
import {Creator} from './creator';

export interface Comic {
  id: number;
  title: string;
  digitalId: number;
  thumbnail: Thumbnail;
  prices: Price;
  creators: Creator;
}

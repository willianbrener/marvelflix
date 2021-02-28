import {CreatorItem} from './creator-item';

export interface Creator {
  collectionURI: string;
  available: number;
  items: CreatorItem[];
}

/**
 * Defines what a resource that can be sliced and retrieved in the form of distinct pages needs.
 */
export interface Pageable {
  page: number;
  size: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

/**
 * Defines what a page (of an entity of type `T`) looks like.
 */
export interface Paginated<T> {
  items: T;
  total: number;
}

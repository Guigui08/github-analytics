import { Directive } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pageable, Paginated } from '../../model/pagination/pagination.model';

export const ITEMS_PER_PAGE = 36;

@Directive()
export abstract class AbstractObsList<T> {
  items: T[] = [];

  totalItems: number = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page: number = 1;
  previousPage: number = 1;
  ascending = true;
  sort!: string;
  loading = false;
  pagesCount = 0;

  loadPage(page: number): void {
    if (page !== this.previousPage) {
      this.previousPage = this.page;
      this.page = page;
      this.loadAll();
    }
  }

  protected loadAll(clear?: boolean): void {
    try {
      this.loading = true;
      this.findAll(this.buildPageable())
        ?.pipe(map((obs) => obs))
        .subscribe((res) => {
          if (clear) {
            this.items = res.items;
            this.totalItems = res.total;
            this.pagesCount = Math.ceil(this.totalItems / ITEMS_PER_PAGE);
          } else {
            this.items.push(...res.items);
          }
          this.loading = false;
        });
    } catch (error) {
      console.error({ error });
      throw error;
    }
  }

  protected clear(): void {
    this.page = 1;
    this.previousPage = this.page;
    this.loadAll(true);
  }

  protected abstract findAll(pageable: Pageable): Observable<Paginated<T[]>> | undefined;

  protected buildPageable(): Pageable {
    return {
      page: Math.max(1, this.page),
      size: this.itemsPerPage,
      sort: this.sort,
      order: this.ascending ? 'asc' : 'desc',
    };
  }
}

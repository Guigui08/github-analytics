import { Directive } from '@angular/core';
import { concat, map, Observable } from 'rxjs';
import { Pageable, Paginated } from '../../model/pagination/pagination.model';

export const ITEMS_PER_PAGE = 20;

@Directive()
export abstract class AbstractObsList<T> {
  public obs$!: Observable<Paginated<T[]>> | undefined;

  totalItems: number = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page: number = 0;
  previousPage: number = 0;
  ascending = true;
  sort!: string;

  loadPage(page: number): void {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadAll();
    }
  }

  protected loadAll(clear?: boolean): void {
    try {
      if (clear || !this.obs$) {
        this.obs$ = this.findAll(this.buildPageable())?.pipe(map((obs) => obs));
      } else {
        this.obs$ = concat(
          this.obs$ as Observable<Paginated<T[]>>,
          this.findAll(this.buildPageable())?.pipe(map((obs) => obs)) as Observable<Paginated<T[]>>
        );
      }
    } catch (error) {
      console.error({ error });
      throw error;
    }
  }

  protected clear(): void {
    this.page = 0;
    this.previousPage = this.page;
    this.loadAll(true);
  }

  protected abstract findAll(pageable: Pageable): Observable<Paginated<T[]>> | undefined;

  protected buildPageable(): Pageable {
    return {
      page: Math.max(0, this.page),
      size: this.itemsPerPage,
      sort: this.sort,
      order: this.ascending ? 'asc' : 'desc',
    };
  }
}

import { HttpParams } from '@angular/common/http';

export const createRequestOption = (req?: any): HttpParams => {
  let options = new HttpParams();
  if (req) {
    Object.keys(req)
      .filter((key) => req[key] !== null && req[key] !== undefined && key !== 'sort')
      .forEach((key) => {
        const value = req[key];
        options = options.set(key, value);
      });

    if (req.sort && Array.isArray(req.sort)) {
      req.sort.forEach((val: string) => (options = options.append('sort', val)));
    }
  }
  return options;
};

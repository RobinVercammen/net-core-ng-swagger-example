/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ValueDto } from '../models/value-dto';
@Injectable({
  providedIn: 'root',
})
class ValuesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  ApiValuesGetResponse(): Observable<StrictHttpResponse<Array<ValueDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Values`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Array<ValueDto>>;
      })
    );
  }

  /**
   * @return Success
   */
  ApiValuesGet(): Observable<Array<ValueDto>> {
    return this.ApiValuesGetResponse().pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * @param value undefined
   */
  ApiValuesPostResponse(value?: ValueDto): Observable<StrictHttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = value;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Values`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r.clone({ body: null }) as StrictHttpResponse<void>
      })
    );
  }

  /**
   * @param value undefined
   */
  ApiValuesPost(value?: ValueDto): Observable<void> {
    return this.ApiValuesPostResponse(value).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiValuesByIdGetResponse(id: number): Observable<StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Values/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiValuesByIdGet(id: number): Observable<string> {
    return this.ApiValuesByIdGetResponse(id).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * @param params The `ValuesService.ApiValuesByIdPutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `value`:
   */
  ApiValuesByIdPutResponse(params: ValuesService.ApiValuesByIdPutParams): Observable<StrictHttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.value;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Values/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r.clone({ body: null }) as StrictHttpResponse<void>
      })
    );
  }

  /**
   * @param params The `ValuesService.ApiValuesByIdPutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `value`:
   */
  ApiValuesByIdPut(params: ValuesService.ApiValuesByIdPutParams): Observable<void> {
    return this.ApiValuesByIdPutResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
  ApiValuesByIdDeleteResponse(id: number): Observable<StrictHttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Values/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r.clone({ body: null }) as StrictHttpResponse<void>
      })
    );
  }

  /**
   * @param id undefined
   */
  ApiValuesByIdDelete(id: number): Observable<void> {
    return this.ApiValuesByIdDeleteResponse(id).pipe(
      __map(_r => _r.body)
    );
  }
}

module ValuesService {

  /**
   * Parameters for ApiValuesByIdPut
   */
  export interface ApiValuesByIdPutParams {
    id: number;
    value?: string;
  }
}

export { ValuesService }

/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { EvaCategorias } from '../model/evaCategorias';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class EvaCategoriasService {

    protected basePath = 'http://168.138.150.197:3001';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param catcodigoexterno 
     * @param idexamen 
     * @param nombre 
     * @param descripcion 
     * @param idestado 
     * @param fecharegistro 
     * @param maxpreguntas 
     * @param minpreguntas 
     * @param aleatorias 
     * @param prefer Preference
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public evaCategoriasDelete(catcodigoexterno?: string, idexamen?: string, nombre?: string, descripcion?: string, idestado?: string, fecharegistro?: string, maxpreguntas?: string, minpreguntas?: string, aleatorias?: string, prefer?: 'return=representation' | 'return=minimal' | 'return=none', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public evaCategoriasDelete(catcodigoexterno?: string, idexamen?: string, nombre?: string, descripcion?: string, idestado?: string, fecharegistro?: string, maxpreguntas?: string, minpreguntas?: string, aleatorias?: string, prefer?: 'return=representation' | 'return=minimal' | 'return=none', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public evaCategoriasDelete(catcodigoexterno?: string, idexamen?: string, nombre?: string, descripcion?: string, idestado?: string, fecharegistro?: string, maxpreguntas?: string, minpreguntas?: string, aleatorias?: string, prefer?: 'return=representation' | 'return=minimal' | 'return=none', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public evaCategoriasDelete(catcodigoexterno?: string, idexamen?: string, nombre?: string, descripcion?: string, idestado?: string, fecharegistro?: string, maxpreguntas?: string, minpreguntas?: string, aleatorias?: string, prefer?: 'return=representation' | 'return=minimal' | 'return=none', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {











        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (catcodigoexterno !== undefined && catcodigoexterno !== null) {
            queryParameters = queryParameters.set('catcodigoexterno', <any>catcodigoexterno);
        }
        if (idexamen !== undefined && idexamen !== null) {
            queryParameters = queryParameters.set('idexamen', <any>idexamen);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', <any>nombre);
        }
        if (descripcion !== undefined && descripcion !== null) {
            queryParameters = queryParameters.set('descripcion', <any>descripcion);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', <any>idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', <any>fecharegistro);
        }
        if (maxpreguntas !== undefined && maxpreguntas !== null) {
            queryParameters = queryParameters.set('maxpreguntas', <any>maxpreguntas);
        }
        if (minpreguntas !== undefined && minpreguntas !== null) {
            queryParameters = queryParameters.set('minpreguntas', <any>minpreguntas);
        }
        if (aleatorias !== undefined && aleatorias !== null) {
            queryParameters = queryParameters.set('aleatorias', <any>aleatorias);
        }

        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];

        return this.httpClient.delete<any>(`${this.basePath}/eva_categorias`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param catcodigoexterno 
     * @param idexamen 
     * @param nombre 
     * @param descripcion 
     * @param idestado 
     * @param fecharegistro 
     * @param maxpreguntas 
     * @param minpreguntas 
     * @param aleatorias 
     * @param select Filtering Columns
     * @param order Ordering
     * @param range Limiting and Pagination
     * @param rangeUnit Limiting and Pagination
     * @param offset Limiting and Pagination
     * @param limit Limiting and Pagination
     * @param prefer Preference
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public evaCategoriasGet(catcodigoexterno?: string, idexamen?: string, nombre?: string, descripcion?: string, idestado?: string, fecharegistro?: string, maxpreguntas?: string, minpreguntas?: string, aleatorias?: string, select?: string, order?: string, range?: string, rangeUnit?: string, offset?: string, limit?: string, prefer?: 'count=none', observe?: 'body', reportProgress?: boolean): Observable<Array<EvaCategorias>>;
    public evaCategoriasGet(catcodigoexterno?: string, idexamen?: string, nombre?: string, descripcion?: string, idestado?: string, fecharegistro?: string, maxpreguntas?: string, minpreguntas?: string, aleatorias?: string, select?: string, order?: string, range?: string, rangeUnit?: string, offset?: string, limit?: string, prefer?: 'count=none', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<EvaCategorias>>>;
    public evaCategoriasGet(catcodigoexterno?: string, idexamen?: string, nombre?: string, descripcion?: string, idestado?: string, fecharegistro?: string, maxpreguntas?: string, minpreguntas?: string, aleatorias?: string, select?: string, order?: string, range?: string, rangeUnit?: string, offset?: string, limit?: string, prefer?: 'count=none', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<EvaCategorias>>>;
    public evaCategoriasGet(catcodigoexterno?: string, idexamen?: string, nombre?: string, descripcion?: string, idestado?: string, fecharegistro?: string, maxpreguntas?: string, minpreguntas?: string, aleatorias?: string, select?: string, order?: string, range?: string, rangeUnit?: string, offset?: string, limit?: string, prefer?: 'count=none', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

















        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (catcodigoexterno !== undefined && catcodigoexterno !== null) {
            queryParameters = queryParameters.set('catcodigoexterno', <any>catcodigoexterno);
        }
        if (idexamen !== undefined && idexamen !== null) {
            queryParameters = queryParameters.set('idexamen', <any>idexamen);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', <any>nombre);
        }
        if (descripcion !== undefined && descripcion !== null) {
            queryParameters = queryParameters.set('descripcion', <any>descripcion);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', <any>idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', <any>fecharegistro);
        }
        if (maxpreguntas !== undefined && maxpreguntas !== null) {
            queryParameters = queryParameters.set('maxpreguntas', <any>maxpreguntas);
        }
        if (minpreguntas !== undefined && minpreguntas !== null) {
            queryParameters = queryParameters.set('minpreguntas', <any>minpreguntas);
        }
        if (aleatorias !== undefined && aleatorias !== null) {
            queryParameters = queryParameters.set('aleatorias', <any>aleatorias);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', <any>select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', <any>order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }

        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];

        return this.httpClient.get<Array<EvaCategorias>>(`${this.basePath}/eva_categorias`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param catcodigoexterno 
     * @param idexamen 
     * @param nombre 
     * @param descripcion 
     * @param idestado 
     * @param fecharegistro 
     * @param maxpreguntas 
     * @param minpreguntas 
     * @param aleatorias 
     * @param evaCategorias eva_categorias
     * @param prefer Preference
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public evaCategoriasPatch(catcodigoexterno?: string, idexamen?: string, nombre?: string, descripcion?: string, idestado?: string, fecharegistro?: string, maxpreguntas?: string, minpreguntas?: string, aleatorias?: string, evaCategorias?: EvaCategorias, prefer?: 'return=representation' | 'return=minimal' | 'return=none', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public evaCategoriasPatch(catcodigoexterno?: string, idexamen?: string, nombre?: string, descripcion?: string, idestado?: string, fecharegistro?: string, maxpreguntas?: string, minpreguntas?: string, aleatorias?: string, evaCategorias?: EvaCategorias, prefer?: 'return=representation' | 'return=minimal' | 'return=none', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public evaCategoriasPatch(catcodigoexterno?: string, idexamen?: string, nombre?: string, descripcion?: string, idestado?: string, fecharegistro?: string, maxpreguntas?: string, minpreguntas?: string, aleatorias?: string, evaCategorias?: EvaCategorias, prefer?: 'return=representation' | 'return=minimal' | 'return=none', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public evaCategoriasPatch(catcodigoexterno?: string, idexamen?: string, nombre?: string, descripcion?: string, idestado?: string, fecharegistro?: string, maxpreguntas?: string, minpreguntas?: string, aleatorias?: string, evaCategorias?: EvaCategorias, prefer?: 'return=representation' | 'return=minimal' | 'return=none', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {












        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (catcodigoexterno !== undefined && catcodigoexterno !== null) {
            queryParameters = queryParameters.set('catcodigoexterno', <any>catcodigoexterno);
        }
        if (idexamen !== undefined && idexamen !== null) {
            queryParameters = queryParameters.set('idexamen', <any>idexamen);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', <any>nombre);
        }
        if (descripcion !== undefined && descripcion !== null) {
            queryParameters = queryParameters.set('descripcion', <any>descripcion);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', <any>idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', <any>fecharegistro);
        }
        if (maxpreguntas !== undefined && maxpreguntas !== null) {
            queryParameters = queryParameters.set('maxpreguntas', <any>maxpreguntas);
        }
        if (minpreguntas !== undefined && minpreguntas !== null) {
            queryParameters = queryParameters.set('minpreguntas', <any>minpreguntas);
        }
        if (aleatorias !== undefined && aleatorias !== null) {
            queryParameters = queryParameters.set('aleatorias', <any>aleatorias);
        }

        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<any>(`${this.basePath}/eva_categorias`,
            evaCategorias,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param evaCategorias eva_categorias
     * @param select Filtering Columns
     * @param prefer Preference
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public evaCategoriasPost(evaCategorias?: EvaCategorias, select?: string, prefer?: 'return=representation' | 'return=minimal' | 'return=none', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public evaCategoriasPost(evaCategorias?: EvaCategorias, select?: string, prefer?: 'return=representation' | 'return=minimal' | 'return=none', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public evaCategoriasPost(evaCategorias?: EvaCategorias, select?: string, prefer?: 'return=representation' | 'return=minimal' | 'return=none', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public evaCategoriasPost(evaCategorias?: EvaCategorias, select?: string, prefer?: 'return=representation' | 'return=minimal' | 'return=none', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', <any>select);
        }

        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/eva_categorias`,
            evaCategorias,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}

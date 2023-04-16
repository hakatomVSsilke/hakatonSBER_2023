import React, {useCallback} from 'react';


/**
 * Функция для "плохих" ответов, когда ошибка произошла на стороне клиента
 *
 * @param errorText
 */
function badResponse(errorText: string): {data: string, error: boolean} {
    return {
        error : true,
        data  : errorText,
    };
}

interface useHttpProps
{
        action: string;

        method ?: string;

        params: any;

        headers?: object;

        body?: object;
}

/**
 * Хук HTTP запроса на сервак
 *
 * @returns {{request:(function(*, *=, *=, *=, *=):string)}}
 */
export const useHttp = () => {
    const request = useCallback(async (action: any, method = "GET", params: any = {}, headers: any = {}, body: any = null): Promise<any> => {
        let uriParams: string = '';

        if (Object.keys(params).length) {
            Object.keys(params).forEach(param => {
                uriParams += '&' + param + '=' + params[param];
            })
        }

        let uri: string = `https://hackathonsber.pagekite.me${action}${uriParams}`;

        let request: Response;
        let requestParams: {method: string, headers: any, body?: any} = {
            method, headers
        }

        if (typeof body !== 'string' && body !== null && method !== 'IMAGE') {
            body = JSON.stringify(body);
        }

        if (method === 'POST') {
            headers['Content-Type'] = 'application/json;charset=utf-8';
            requestParams.body = body;
        }

        try {
            request = await fetch(uri, requestParams);
        } catch (error) {
            console.error('Ошибка запроса ' + error);

            return badResponse('Ошибка запроса ' + error);
        }

        if (!request.ok) {
            throw new Error('Плохой запрос ' + request);
        }

        let data: Promise<any>;

        try {
            data = await request.json();
        } catch (error) {
            throw new Error('Ошибка парсинга данных ' + error);
        }

        return data;
    }, [])

    return {request};
}
import promiseWrapper from "../wappers/promiseWrapper";

interface wrappedRequestProps
{
    action: any;

    method: string;

    params: any;

    headers: any;

    body: any;
}

interface requestProps
{
    action: any;

    method: string;

    params: any;

    headers: any;

    body: any;
}

/**
 * Обёртка для запросов на сервер
 *
 * @param action
 * @param method
 * @param params
 * @param headers
 * @param body
 */
export default function wrappedRequest(action: any, method: string = 'GET', params: any = {}, headers:any = {}, body: any = null) {
    let result: any = request(
        action,
        method,
        params,
        headers,
        body,
    );

    return {
        getData : promiseWrapper(result),
    };
}

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

/**
 * Запрос на сервер
 *
 * @param action
 * @param method
 * @param params
 * @param headers
 * @param body
 */
const request = async (action: any, method: any, params:any, headers:any, body:any) => {
    let uriParams: string = '';

    if (Object.keys(params).length) {
        Object.keys(params).forEach(param => {
            uriParams += '&' + param + '=' + params[param];
        });
    }

    let uri: string = `https://hackathonsber.pagekite.me/${action}${uriParams}`;

    let request: any = {};

    if (typeof body !== 'string' && body !== null && method !== 'IMAGE') {
        body = JSON.stringify(body);
    }

    if (method === 'POST') {
        headers['Content-Type'] = 'application/json;';
    } else if (method === 'IMAGE') {
        method = 'POST';
    }

    console.log(headers)

    return fetch(uri, {
        method  : method,
        headers : headers,
        body    : body,
    }).then(async (response: Response) => {
        if (!response.ok) {
            throw 'Плохой запрос ' + request;
        }

        let data: any = {};

        try {
            data = await response.json();
        } catch (error) {
            throw 'Ошибка парсинга данных ' + error;
        }

        return data;
    })
};
/**
 * Обёртка для промисов (Для связки с Suspense)
 *
 * @param promiseObject
 */
export default function promiseWrapper(promiseObject: any) {
    let status: string      = 'pending';
    let result: any      = '';
    const suspender = promiseObject.then((data: any) => {
        status = data.error ? 'error' : 'success';
        result = data;
    }, (error: any) => {
        status = 'error';
        result = error;
    });

    return {
        read : () => {
            switch (status) {
                case 'pending':
                    throw suspender;
                case 'error':
                    throw new Error(result.data);
                case 'success':
                    return result;
            }
        },
    };
}
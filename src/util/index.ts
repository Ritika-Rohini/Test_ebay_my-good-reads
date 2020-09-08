export const debounce = <F extends ((...args: any) => any)>(func: F, waitFor: number) => {
    let timeout: number = 0

    const debounced = (...args: any) => {
        clearTimeout(timeout)
        setTimeout(() => func(...args), waitFor)
    }

    return debounced as (...args: Parameters<F>) => ReturnType<F>
}

export const throttle = <F extends ((...args: any) => any)>(fn: F, wait: number) => {
    let isCalled = false;
    return function (...args: any) {
        if (!isCalled) {
            fn(...args);
            isCalled = true;
            setTimeout(function () {
                isCalled = false;
            }, wait)
        }
    };
}



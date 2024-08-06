
export const throttle = fn => {
    let isThrottle = false;

    function wrapper() {
        if(isThrottle) return;
        isThrottle = true;
        fn.apply(fn, arguments);
        setTimeout(() => {
            isThrottle = false;
        }, 30);
    }

    return wrapper;
}
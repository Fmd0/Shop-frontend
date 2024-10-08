

const StarList = ({size, rating, gap}: {
    size: number,
    rating: number,
    gap: number
}) => {
    return (
        <div className="flex items-center"
             style={{gap: gap+"px"}}>
            {
                Array.from({length: 5}, (_, i) => {
                    if (Number(rating) - i <= 0) {
                        return 0;
                    } else if (Number(rating) - i >= 1) {
                        return 100;
                    }
                    return (Number(rating) - i) * 100;
                }).map((w, i) => (
                    <div key={i} className="relative w-4 h-4"
                         style={{width: size + "px", height: size + "px"}}
                    >
                        <svg className="absolute inset-0" viewBox="0 0 18 18"
                             xmlns="http://www.w3.org/2000/svg" fill="#c9cbcc">
                            <path
                                d="M9.67642 1.92598C9.55172 1.66566 9.28868 1.5 9.00002 1.5C8.71137 1.5 8.44833 1.66566 8.32363 1.92598L6.34156 6.06361L1.77738 6.66292C1.49045 6.7006 1.2508 6.9 1.16157 7.17529C1.07234 7.45059 1.14945 7.75266 1.35973 7.95149L4.69678 11.107L3.85916 15.6129C3.80636 15.897 3.92143 16.1861 4.15499 16.3563C4.38855 16.5264 4.69905 16.5472 4.95322 16.4098L9.00002 14.2219L13.0468 16.4098C13.301 16.5472 13.6115 16.5264 13.8451 16.3563C14.0786 16.1861 14.1937 15.897 14.1409 15.6129L13.3033 11.107L16.6403 7.95149C16.8506 7.75266 16.9277 7.45059 16.8385 7.17529C16.7493 6.9 16.5096 6.7006 16.2227 6.66292L11.6585 6.06361L9.67642 1.92598Z"></path>
                        </svg>
                        <svg className="absolute inset-0" data-testid="review-star"
                             viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"
                             clipPath={`polygon(0 0, ${w}% 0, ${w}% 100%, 0 100%)`}>
                            <path
                                d="M9.67642 1.92598C9.55172 1.66566 9.28868 1.5 9.00002 1.5C8.71137 1.5 8.44833 1.66566 8.32363 1.92598L6.34156 6.06361L1.77738 6.66292C1.49045 6.7006 1.2508 6.9 1.16157 7.17529C1.07234 7.45059 1.14945 7.75266 1.35973 7.95149L4.69678 11.107L3.85916 15.6129C3.80636 15.897 3.92143 16.1861 4.15499 16.3563C4.38855 16.5264 4.69905 16.5472 4.95322 16.4098L9.00002 14.2219L13.0468 16.4098C13.301 16.5472 13.6115 16.5264 13.8451 16.3563C14.0786 16.1861 14.1937 15.897 14.1409 15.6129L13.3033 11.107L16.6403 7.95149C16.8506 7.75266 16.9277 7.45059 16.8385 7.17529C16.7493 6.9 16.5096 6.7006 16.2227 6.66292L11.6585 6.06361L9.67642 1.92598Z"></path>
                        </svg>
                    </div>
                ))
            }
        </div>
    )
}

export default StarList;
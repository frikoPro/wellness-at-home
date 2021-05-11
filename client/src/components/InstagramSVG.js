import * as React from "react"

function InstagramSVG (props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            data-name="Layer 1"
            viewBox="0 0 128 128"
            {...props}
        >
            <defs>
                <clipPath id="prefix__b">
                    <circle cx={64} cy={64} r={64} fill="none" />
                </clipPath>
                <clipPath id="prefix__c">
                    <path
                        fill="none"
                        d="M104-163H24a24.07 24.07 0 00-24 24v80a24.07 24.07 0 0024 24h80a24.07 24.07 0 0024-24v-80a24.07 24.07 0 00-24-24zm16 104a16 16 0 01-16 16H24A16 16 0 018-59v-80a16 16 0 0116-16h80a16 16 0 0116 16z"
                    />
                </clipPath>
                <clipPath id="prefix__e">
                    <circle cx={82} cy={209} r={5} fill="none" />
                </clipPath>
                <clipPath id="prefix__g">
                    <path
                        fill="none"
                        d="M64-115a16 16 0 00-16 16 16 16 0 0016 16 16 16 0 0016-16 16 16 0 00-16-16zm0 24a8 8 0 01-8-8 8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8z"
                    />
                </clipPath>
                <clipPath id="prefix__h">
                    <path
                        fill="none"
                        d="M84-63H44a16 16 0 01-16-16v-40a16 16 0 0116-16h40a16 16 0 0116 16v40a16 16 0 01-16 16zm-40-64a8 8 0 00-8 8v40a8 8 0 008 8h40a8 8 0 008-8v-40a8 8 0 00-8-8z"
                    />
                </clipPath>
                <clipPath id="prefix__i">
                    <circle cx={82} cy={-117} r={5} fill="none" />
                </clipPath>
                <radialGradient
                    id="prefix__a"
                    cx={27.5}
                    cy={121.5}
                    r={137.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#ffd676" />
                    <stop offset={0.25} stopColor="#f2a454" />
                    <stop offset={0.38} stopColor="#f05c3c" />
                    <stop offset={0.7} stopColor="#c22f86" />
                    <stop offset={0.96} stopColor="#6666ad" />
                    <stop offset={0.99} stopColor="#5c6cb2" />
                </radialGradient>
                <radialGradient
                    id="prefix__d"
                    cx={27.5}
                    cy={-41.5}
                    r={148.5}
                    xlinkHref="#prefix__a"
                />
                <radialGradient
                    id="prefix__f"
                    cx={13.87}
                    cy={303.38}
                    r={185.63}
                    xlinkHref="#prefix__a"
                />
                <radialGradient
                    id="prefix__j"
                    cx={13.87}
                    cy={-22.62}
                    r={185.63}
                    xlinkHref="#prefix__a"
                />
            </defs>
            <g clipPath="url(#prefix__b)">
                <circle cx={27.5} cy={121.5} r={137.5} fill="url(#prefix__a)" />
            </g>
            <g clipPath="url(#prefix__c)">
                <circle cx={27.5} cy={-41.5} r={148.5} fill="url(#prefix__d)" />
            </g>
            <g clipPath="url(#prefix__e)">
                <circle cx={13.87} cy={303.38} r={185.63} fill="url(#prefix__f)" />
            </g>
            <g clipPath="url(#prefix__g)">
                <circle cx={27.5} cy={-41.5} r={148.5} fill="url(#prefix__d)" />
            </g>
            <g clipPath="url(#prefix__h)">
                <circle cx={27.5} cy={-41.5} r={148.5} fill="url(#prefix__d)" />
            </g>
            <g clipPath="url(#prefix__i)">
                <circle cx={13.87} cy={-22.62} r={185.63} fill="url(#prefix__j)" />
            </g>
            <circle cx={82} cy={46} r={5} fill="#fff" />
            <path
                fill="#fff"
                d="M64 48a16 16 0 1016 16 16 16 0 00-16-16zm0 24a8 8 0 118-8 8 8 0 01-8 8z"
            />
            <rect
                width={64}
                height={64}
                x={32}
                y={32}
                fill="none"
                stroke="#fff"
                strokeMiterlimit={10}
                strokeWidth={8}
                rx={12}
                ry={12}
            />
        </svg>
    )
}

export default InstagramSVG;
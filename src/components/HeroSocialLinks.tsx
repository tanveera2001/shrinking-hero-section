import FramerMagnetic from "./Framer";

type SocialSvg = {
    viewBox: string;
    color: string;
    path: string;
    href: string;
};

const socialSvgs: SocialSvg[] = [
    {
        viewBox: "0 0 448 512",
        color: "#0A66C2",
        path: "M100.28 448H7.4V148.9h92.88zm-46.44-340a53.6 53.6 0 1 1 53.6-53.6 53.59 53.59 0 0 1-53.6 53.6zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.8-55.7 76.8V448h-92.7V148.9h89V196h1.3c12.4-23.6 42.6-48.3 87.7-48.3 93.8 0 111.2 61.8 111.2 142.3V448z",
        href: "https://www.linkedin.com/in/tanveerahmed22/"
    },
    {
        viewBox: "0 0 24 24",
        color: "#171515",
        path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.931 0-1.31.467-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.628-5.479 5.922.43.372.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
        href: "https://github.com/tanveera2001"
    },
    {
        viewBox: "0 0 31.5 58",
        color: "#1877F2",
        path: "m20.72,22.16c2.77,0,5.55.02,8.32.03.4,0,.8.02,1.2.03.07.06.14.13.21.19-.28,1.58-.56,3.16-.83,4.75-.32,1.87-.64,3.74-.99,5.76-1.37.13-2.76-.07-4.14-.04-1.36.03-2.72,0-4.2,0-.13,8.38.12,16.72.11,25.11h-11.17v-24.91H0v-10.81h9.16c.04-.39.11-.71.11-1.02-.01-1.58-.05-3.17-.06-4.75-.01-1.62-.16-3.26.02-4.85.19-1.69.64-3.35,1.52-4.86,1.36-2.33,3.28-4.06,5.58-5.4,1.39-.81,2.94-1.25,4.52-1.3C24.28-.03,27.71.02,31.15,0c.07,0,.13.05.35.14.04,3.3-.29,6.66-.18,10.11-1.13,0-2.15.03-3.17,0-1.57-.07-3.15-.06-4.65.46-1.42.49-2.46,1.4-2.89,2.95-.3,1.08-.36,2.16-.34,3.25.04,1.69.13,3.38.2,5.07.08.06.16.13.24.19Z",
        href: "https://www.facebook.com/tanveera2001"
    },
];

const HeroSocialLinks = () => {
    return (
        <div className="absolute bottom-8 2xl:bottom-10 flex flex-col items-center z-10">
            <p className="mb-4 text-sm sm:text-base text-white font-bold">Connect with me:</p>
            <div className="flex flex-wrap justify-center items-center gap-3 2xl:gap-4">
                {socialSvgs.map((svg, idx) => (
                    <FramerMagnetic key={idx}>
                        <a href={svg.href} target="_blank" rel="noopener noreferrer">
                            <svg
                                viewBox={svg.viewBox}
                                className="h-10 lg:h-11 2xl:h-12 w-10 lg:w-11 2xl:w-12 p-2 transition-colors duration-200 fill-white hover:fill-[currentColor] cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: svg.color }}
                            >
                                <path d={svg.path} />
                            </svg>
                        </a>
                    </FramerMagnetic>
                ))}
            </div>
        </div>
    )
}

export default HeroSocialLinks;
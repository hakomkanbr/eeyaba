import Image from "next/image";

const RocketSection = () => {
    return (
        <Image
            src="/images/new/rocket.png"
            alt="rocket background"
            className="absolute  left-0 transform"
            width={450}
            height={618}
        />
    );
};

export default RocketSection;

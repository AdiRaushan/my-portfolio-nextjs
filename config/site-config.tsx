export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
    title: string;
    link: string
};

export interface GridItemInterface {
    layout: GridItemLayout;
    type: GridItemType;
    title: string;
    icon?: string
    username?: string
    description?: string;
    color?: string;
    buttonTitle?: string;
    buttonLink?: string;
    buttonSecondaryText?: string | undefined;
    /* Mentor */
    promotion?: string;
    price?: string;
    oldPrice?: string;
    /* Project */
    stars?: number;
    /* Equipments */
    equipments?: EqiupmentItem[];
    image?: string;
}
const GridItems: GridItemInterface[] = [
    {
        layout: "2x2",
        type: "social",
        title: "Linkdin",
        icon: "linkdin",
        username: "@Aditya Raushan",
        description:
            "Front-End Web Developer 🖥️ | WordPress, HTML, CSS, JS, React | BCA Student 📚 | #100daysofdev 🚀 | JavaScript Enthusiast 💡 |",
        color: "#0072b1",
        buttonTitle: "Connect",
        buttonLink: "https://www.linkedin.com/in/adiraushan/",
        buttonSecondaryText: "",
    },
    {
        layout: "1x2",
        type: "social",
        title: "Twitter",
        icon: "twitter",
        username: "@theadiraushan",
        buttonTitle: "Lets connect.",
        buttonLink: "https://twitter.com/theadiraushan",
        buttonSecondaryText: "",
        color: "#1DA1F2",
        description:
            " ",
    },
    {
        layout: "1x2",
        type: "social",
        title: "Github",
        icon: "github",
        username: "@Adiraushan",
        buttonTitle: "Follow",
        buttonSecondaryText: "",
        buttonLink: "https://github.com/AdiRaushan",
        color: "#070707",
    },
    {
        layout: "2x4",
        type: "equipment",
        title: "Skills and technology",
        image: "/pic.jpg",
        equipments: [
            {
                title: "React",
                link: "https://www.amazon.com/Sony-Full-frame-Mirrorless-Interchangeable-Lens-ILCE7M3K/dp/B07B45D8WV?&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=f91877e8350da1e43b161adac6e9a6d7&camp=1789&creative=9325",
            },
            {
                title: "Nextjs",
                link: "https://www.amazon.com/s?k=tamron+24-75+f2.8+sony+e+mount&sprefix=tamron+24-75%252Caps%252C215&ref=nb_sb_ss_ts-doa-p_1_12&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=7f90fb483df302e8131afea2f4cd89bb&camp=1789&creative=9325",
            },
            {
                title: "JavaScript",
                link: "https://www.amazon.com/s?k=thronmax+mdrill+one+pro&sprefix=thronmax%252Caps%252C213&ref=nb_sb_ss_ts-doa-p_7_8&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=ffb6dc2e55c74508300d2c5eac250e1e&camp=1789&creative=9325",
            },
            {
                title: "Appwrite",
                link: "https://www.amazon.com/s?k=godox+sl60&crid=2OZLC933LK7K0&sprefix=godox+sl60%252Caps%252C213&ref=nb_sb_noss_1&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=a9fcedfbfaff1bb1301c303a45055038&camp=1789&creative=9325",
            },
            {
                title: "Node.js",
                link: "https://www.amazon.com/Godox-Umbrella-Reflector-Honeycomb-Speedlight/dp/B07H91VH4M/ref=sr_1_19?crid=3UE8NBEUUB1PI&keywords=godox+sl60+softbox&qid=1687880313&sprefix=godox+sl60+%252Caps%252C207&sr=8-19&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=7cb2f6734c70d44a3491266b50eac29c&camp=1789&creative=9325",
            },
            {
                title: "Webdev",
                link: "https://www.amazon.com/s?k=godox+m1+rgb&crid=2UBYBKYSIYMDW&sprefix=godox+m1+rg%252Caps%252C199&ref=nb_sb_noss_2&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=3da7371f710f9f4f6af4f5817acc728a&camp=1789&creative=9325",
            },
            {
                title: "Express",
                link: "https://www.amazon.com/s?k=camlink+4k%252B&sprefix=Camlink+%252Caps%252C210&ref=nb_sb_ss_ts-doa-p_1_8&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=c95eae861d4db5e1de4ebda68507fbda&camp=1789&creative=9325",
            },
            {
                title: "Mongodb",
                link: "https://www.amazon.com/s?k=camlink+4k%252B&sprefix=Camlink+%252Caps%252C210&ref=nb_sb_ss_ts-doa-p_1_8&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=c95eae861d4db5e1de4ebda68507fbda&camp=1789&creative=9325",
            },
            {
                title: "Redux",
                link: "https://www.amazon.com/s?k=camlink+4k%252B&sprefix=Camlink+%252Caps%252C210&ref=nb_sb_ss_ts-doa-p_1_8&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=c95eae861d4db5e1de4ebda68507fbda&camp=1789&creative=9325",
            },
            {
                title: "Bootstrap",
                link: "https://www.amazon.com/s?k=camlink+4k%252B&sprefix=Camlink+%252Caps%252C210&ref=nb_sb_ss_ts-doa-p_1_8&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=c95eae861d4db5e1de4ebda68507fbda&camp=1789&creative=9325",
            },
            {
                title: "CSS",
                link: "https://www.amazon.com/s?k=camlink+4k%252B&sprefix=Camlink+%252Caps%252C210&ref=nb_sb_ss_ts-doa-p_1_8&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=c95eae861d4db5e1de4ebda68507fbda&camp=1789&creative=9325",
            },
            {
                title: "HtML",
                link: "https://www.amazon.com/s?k=camlink+4k%252B&sprefix=Camlink+%252Caps%252C210&ref=nb_sb_ss_ts-doa-p_1_8&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=c95eae861d4db5e1de4ebda68507fbda&camp=1789&creative=9325",
            },
            {
                title: "Front-End",
                link: "https://www.amazon.com/s?k=camlink+4k%252B&sprefix=Camlink+%252Caps%252C210&ref=nb_sb_ss_ts-doa-p_1_8&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=c95eae861d4db5e1de4ebda68507fbda&camp=1789&creative=9325",
            },
        ],
    },
    {
        layout: "2x2",
        type: "project",
        title: " Netflix-with-js ",
        description: "Netflix App with using api and javascript to fetch movie and data from TMDB",
        icon: "github",
        color: "#070707",
        buttonTitle: "🔗 Link",
        buttonLink: "https://github.com/AdiRaushan/Netflix_with-_js",
    },

    {
        layout: "1x2",
        type: "project",
        title: "Chatgpt Clone",
        description: "handling API with understanding of react and js core concept and creating this clone using GPT API",
        icon: "github",
        color: "#070707",
        buttonTitle: "🔗 Link",

        buttonLink: "",
    },
    {
        layout: "1x2",
        type: "project",
        title: "Shopo",
        description: "A shoping website multiple complex funtion,authentication,payment-gateway and more",
        icon: "github",
        color: "#070707",
        buttonTitle: "🔗 Link",

        buttonLink: "",
    },
    {
        layout: "1x2",
        type: "project",
        title: "Password Generator",
        description: "A simple web-based password generator built with React.",
        icon: "github",
        color: "#070707",
        buttonTitle: "🔗 Link",

        buttonLink: "https://github.com/AdiRaushan/Password-gen-reactjs",
    },
    {
        layout: "1x2",
        type: "project",
        title: "Himachal-explore",
        description: "Responsive Travel Website Design Using HTML CSS & JavaScript Contains animations when scrolling. Smooth scrolling in each section.",
        icon: "github",
        buttonTitle: "🔗 Link",
        color: "#070707",
        buttonLink: "https://github.com/AdiRaushan/himachal-explore",
    },



    {
        layout: "2x2",
        type: "social",
        title: "Spotify ",
        username: "Playlist while coding",
        description:
            "learning to work with more complex Api and connecting the server side to client side.",
        icon: "spotify",
        buttonTitle: "Let's",
        buttonSecondaryText: "Play",
        buttonLink:
            "https://open.spotify.com/playlist/7qXiuXxK17jU603sByQFf0?si=54808bd55f9a4f9c",
    },

];





export const siteConfig = {
    creator: "Aditya Raushan",
    title: "Web Developer",
    bio: "Building website and giving them some feature",
    location: "New Delhi, India",
    locationLink:
        "https://www.google.com/maps/place/Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul/@40.981133,29.063053,12z/data=!3m1!4b1!4m6!3m5!1s0x14cac790b17ba89d:0xd2d24ea0437a7ee2!8m2!3d40.981867!4d29.0576302!16zL20vMDV5cWY4?entry=ttu",
    email: "adiraushan2k@gmail.com",
    item: GridItems,

} as const;
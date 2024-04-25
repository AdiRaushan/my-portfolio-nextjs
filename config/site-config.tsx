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
                link: "",
            },
            {
                title: "Nextjs",
                link: "",
            },
            {
                title: "JavaScript",
                link: "",
            },
            {
                title: "Appwrite",
                link: "",
            },
            {
                title: "Node.js",
                link: "",
            },
            {
                title: "Webdev",
                link: "",
            },
            {
                title: "Express",
                link: "",
            },
            {
                title: "Mongodb",
                link: "",
            },
            {
                title: "Redux",
                link: "",
            },
            {
                title: "Bootstrap",
                link: "",
            },
            {
                title: "CSS",
                link: ""
            },
            {
                title: "HtML",
                link: ""
            },
            {
                title: "Front-End",
                link: ""
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
            "Music can help individuals concentrate and maintain their attention",
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
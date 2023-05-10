import assets from "./assets";

const categoriesVideoData = {
    "comedy": [
        {
            id: "CO-01",
            name: "comedy_video1.mp4",
            creator: "Comdies",
            price: 100,
            description:
                "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            // video: assets.video,
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/comedy/comedy_video1.mp4",
            
        },
        {
            id: "CO-02",
            name: "comedy_video2.mp4",
            creator: "Comdies",
            price: 200,
            description:
                "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/comedy/comedy_video2.mp4",

        }
    ],
    "film-animation": [
        {
            id: "FA-01",
            name: "a-short-animated-film-by-me-enjoy-shorts-film-shortfilm-720-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 100,
            description:
                "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            // video: assets.video,
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/film-animation/a-short-animated-film-by-me-enjoy-shorts-film-shortfilm-720-ytshorts.savetube.me.mp4"
        },
        {
            id: "FA-02",
            name: "clean-after-eating-snack-mayamax-cocometa-720-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 200,
            description:
                "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/film-animation/clean-after-eating-snack-mayamax-cocometa-720-ytshorts.savetube.me.mp4",

        },
        {
            id: "FA-03",
            name: "the-day-that-changed-my-life-720-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 95,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/film-animation/the-day-that-changed-my-life-720-ytshorts.savetube.me.mp4",
        },
        {
            id: "FA-04",
            name: "unstoppable-funny-version-animation-meme-shorts-1280-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 54,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/film-animation/unstoppable-funny-version-animation-meme-shorts-1280-ytshorts.savetube.me.mp4",
        },
        {
            id: "FA-05",
            name: "watermelon-a-cautionary-tale-animated-short-shorts-720-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 80,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/film-animation/watermelon-a-cautionary-tale-animated-short-shorts-720-ytshorts.savetube.me.mp4",
        },
    ],
    "gaming": [
        {
            id: "GA-01",
            name: "craziest-transitions-ever-shorts-fortnite-youtubeshorts-gaming-1280-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 100,
            description:
                "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            // video: assets.video,
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/gaming/craziest-transitions-ever-shorts-fortnite-youtubeshorts-gaming-1280-ytshorts.savetube.me.mp4"
        },
        {
            id: "GA-02",
            name: "do-you-think-i-m-using-aimbot-1280-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 200,
            description:
                "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/gaming/do-you-think-i-m-using-aimbot-1280-ytshorts.savetube.me.mp4",

        },
        {
            id: "GA-03",
            name: "fortnite-clips-on-shorts-youtube-youtubeshorts-fortnite-720-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 95,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/gaming/fortnite-clips-on-shorts-youtube-youtubeshorts-fortnite-720-ytshorts.savetube.me.mp4",
        },
        {
            id: "GA-04",
            name: "funny-gameplay-shorts-gaming-video-funny-gameplay-shortgame-games-1280-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 54,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/gaming/funny-gameplay-shorts-gaming-video-funny-gameplay-shortgame-games-1280-ytshorts.savetube.me.mp4",
        },
        {
            id: "GA-05",
            name: "the-painful-situation-buying-a-new-game-shorts-gaming-1280-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 80,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/gaming/the-painful-situation-buying-a-new-game-shorts-gaming-1280-ytshorts.savetube.me.mp4",
        },
    ],
    "music": [
        {
            id: "MU-01",
            name: "cdandelions-ruth-b-sparx-whatsapp-status-music-music-whatsappstatus-melody-shorts-1280-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 100,
            description:
                "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            // video: assets.video,
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/music/dandelions-ruth-b-sparx-whatsapp-status-music-music-whatsappstatus-melody-shorts-1280-ytshorts.savetube.me.mp4"
        },
        {
            id: "MU-02",
            name: "dua-lipa-one-kiss-is-all-it-takes-lyrics-shorts-trending-viral-youtubeshorts-1280-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 200,
            description:
                "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/music/dua-lipa-one-kiss-is-all-it-takes-lyrics-shorts-trending-viral-youtubeshorts-1280-ytshorts.savetube.me.mp4",

        },
        {
            id: "MU-03",
            name: "most-used-songs-for-youtube-shorts-part-17-720-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 95,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/music/most-used-songs-for-youtube-shorts-part-17-720-ytshorts.savetube.me.mp4",
        },
        {
            id: "MU-04",
            name: "our-kids-covering-our-new-song-my-stupid-heart-walkofftheearth-shorts-1280-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 54,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/music/our-kids-covering-our-new-song-my-stupid-heart-walkofftheearth-shorts-1280-ytshorts.savetube.me.mp4",
        },
        {
            id: "MU-05",
            name: "tum-tum-dance-video-shorts-1280-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 54,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/music/tum-tum-dance-video-shorts-1280-ytshorts.savetube.me.mp4",
        },
    ],
    "movies": [
        {
            id: "MOV-01",
            name: "movies_video1.mp4",
            creator: "MoviesVideos",
            price: 100,
            description:
                "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            // video: assets.video,
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/movies/movies_video1.mp4"
        },
        {
            id: "MOV-02",
            name: "movies_video2.mp4",
            creator: "MoviesVideos",
            price: 200,
            description:
                "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/movies/movies_video2.mp4",

        },
        {
            id: "MOV-03",
            name: "movies_video3.mp4",
            creator: "MoviesVideos",
            price: 95,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/movies/movies_video3.mp4",
        },
        {
            id: "MOV-04",
            name: "movies_video4.mp4",
            creator: "MoviesVideos",
            price: 54,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/movies/movies_video4.mp4",
        },
    ],
    "pets_animals": [
        {
            id: "PA-01",
            name: "friendship-puppy-and-chicken-a-beautiful-moment-191-shorts-1280-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 100,
            description:
                "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            // video: assets.video,
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/pets_animals/friendship-puppy-and-chicken-a-beautiful-moment-191-shorts-1280-ytshorts.savetube.me.mp4"
        },
        {
            id: "PA-02",
            name: "funny-animals-shorts-720-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 200,
            description:
                "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/pets_animals/funny-animals-shorts-720-ytshorts.savetube.me.mp4",

        },
        {
            id: "PA-03",
            name: "funny-animals-shorts-flashsave.mp4",
            creator: "YTShorts",
            price: 95,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/pets_animals/funny-animals-shorts-flashsave.mp4",
        },
        {
            id: "PA-04",
            name: "shorts-cute-dog-and-baby-1280-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 54,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/pets_animals/shorts-cute-dog-and-baby-1280-ytshorts.savetube.me.mp4",
        },
        {
            id: "PA-05",
            name: "tell-me-why-dogs-shorts-dogmom-funnydogs-comedy-tiktok-reels-goldenretriever-1280-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 54,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/pets_animals/tell-me-why-dogs-shorts-dogmom-funnydogs-comedy-tiktok-reels-goldenretriever-1280-ytshorts.savetube.me.mp4",
        },
    ],
    "sports": [
        {
            id: "SP-01",
            name: "Lessons were taught.mp4",
            creator: "FunnyShorts",
            price: 100,
            description:
                "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            // video: assets.video,
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/sports/Lessons%20were%20taught%20%F0%9F%98%A4%20(cdn.320mp3converter.com).mp4"
        },
        {
            id: "SP-02",
            name: "Mbappe dont stop ayy #soccer #Futbol #Shorts.mp4",
            creator: "FootballShorts",
            price: 200,
            description:
                "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/sports/Mbappe%20don%E2%80%99t%20stop%20ayy%20#soccer%20#Futbol%20#Shorts.mp4",

        },
        {
            id: "SP-03",
            name: "This is the worst #shorts #funnyshorts.mp4",
            creator: "FunnyShorts",
            price: 95,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/sports/This%20is%20the%20worst%F0%9F%98%95%F0%9F%A4%A3%20#shorts%20#funnyshorts.mp4",
        },
        {
            id: "SP-04",
            name: "one-nba-player-has-to-go-basketball-shorts-bball-nba-720-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 54,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/sports/one-nba-player-has-to-go-basketball-shorts-bball-nba-720-ytshorts.savetube.me.mp4",
        },
        {
            id: "SP-05",
            name: "would-it-work-football-soccer-shorts-1280-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 54,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/sports/would-it-work-football-soccer-shorts-1280-ytshorts.savetube.me.mp4",
        },
    ],
    "travel-events": [
        {
            id: "TRE-01",
            name: "i-bet-you-didnt-know-about-this-airplane-hacks-720-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 100,
            description:
                "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            // video: assets.video,
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/travel-events/i-bet-you-didnt-know-about-this-airplane-hacks-720-ytshorts.savetube.me.mp4"
        },
        {
            id: "TRE-02",
            name: "just-do-it-travel-shorts-traveling-720-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 200,
            description:
                "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/travel-events/just-do-it-travel-shorts-traveling-720-ytshorts.savetube.me.mp4",

        },
        {
            id: "TRE-03",
            name: "travel-hack-from-a-flight-attendant-shorts-720-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 95,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/travel-events/travel-hack-from-a-flight-attendant-shorts-720-ytshorts.savetube.me.mp4",
        },
        {
            id: "TRE-04",
            name: "winning-video-formula-for-youtube-shorts-720-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 54,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/travel-events/winning-video-formula-for-youtube-shorts-720-ytshorts.savetube.me.mp4",
        },
        {
            id: "TRE-05",
            name: "youtube-short-event-sparklewithshorts-1280-ytshorts.savetube.me.mp4",
            creator: "YTShorts",
            price: 54,
            description:
            "A video description is a piece of metadata that helps YouTube understand the content of a video. Descriptions that are well optimized can lead to higher rankings in YouTube search.",
            video: "https://4-the-people-masters-project-vpa-videos.sfo3.cdn.digitaloceanspaces.com/travel-events/youtube-short-event-sparklewithshorts-1280-ytshorts.savetube.me.mp4",
        },
    ]
};

export { categoriesVideoData };

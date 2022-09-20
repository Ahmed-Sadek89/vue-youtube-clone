export type Items = {
    id: {
        kind: string,
        videoId: string,
        channelId: string
    },
    brandingSettings: {
        channel: {
            title: string
        },
        image: {
            bannerExternalUrl: string
        }
    },
    statistics: {
        subscriberCount: string
    },
    snippet: {
        channelTitle: string,
        channelId: string,
        title: string,
        thumbnails: {
            default: {
                url: string
            },
            medium: {
                url: string
            },
            high: {
                url: string
            },
        },
    }
}
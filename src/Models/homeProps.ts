export type homeProps = {
    episodes: Episode[];
}

export type Episode = {
        id:string;
        title:string;
        members: string;
        published_at: string;
        thumbnail: string;
        description: string;
        file:{
            url: string;
            duration: string | number;
            type:string;
        }
    }

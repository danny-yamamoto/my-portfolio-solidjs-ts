export interface IIntroduction {
    title: string;
    description: string;
}

export interface IExperience {
    title: string;
    detail: any[] | undefined; // undefinedを許容
}

export interface IArticles {
    title: string;
    detail?: any[] | undefined;
}

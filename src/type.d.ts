// sets up what an IArticle looks like
interface IArticle {
    id: number;
    title: string;
    body: string;
}

// sets up the state object
type ArticleState = {
    articles: IArticle[];
}

// sets up the action creators
type ArticleAction = {
    type: string;
    article: IArticle;
}

// sets up the dispatch function
type DispatchType = (args: ArticleAction) => ArticleAction;
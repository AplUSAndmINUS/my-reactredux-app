import React, { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { Article } from './components/Article';
import { AddArticle } from './components/AddArticle';
import { addArticle, removeArticle } from './store/actionCreators';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();
  const saveArticle = useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => {
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      })}
    </main>
  )
}

export default App;

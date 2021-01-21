import React, { useState } from 'react';

interface Props = {
  saveArticle: (article: IArticle | any) => void;
}

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = useState<IArticle | {}>();

  const handleArticleData = ($e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [$e.currentTarget.id]: $e.currentTarget.value
    })
  };

  const addNewArticle = ($e: React.FormEvent) => {
    $e.preventDefault();
    saveArticle(article);
  };

  return (
    <form onSubmit={addNewArticle} className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleArticleData}
      />
      <button 
        value="Add article"
        disabled={article === undefined ? true : false} 
      />
    </form>
  )
}

export default AddArticle;
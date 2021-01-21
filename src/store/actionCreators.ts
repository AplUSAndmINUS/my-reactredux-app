import * as actionTypes from './actionTypes';

// addArticle() function which implements the action types and actions created
export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    article
  }
  
  return simulateHttpRequest(action);
}

// removeArticle() function which implements the action types and actions created
export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article
  }
  
  return simulateHttpRequest(action);
}

// simulateHttpRequest() function which implements the action types and actions created and dispatches the action based on a setTimeout()
export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}
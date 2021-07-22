export function showLoading(dispatch){
  dispatch({
    type: "LOADING",
    data: true
  })
}

export function hideLoading(dispatch){
  dispatch({
    type: "LOADING",
    data: false
  })
}

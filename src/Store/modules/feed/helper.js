export function readmore(axios, endpoint){
  var articles = [];

  for(var i = 1; i < 4; i++){
    console.log(`Process: Fetching ReadMore Num ${i}`);
    axios.get(`${endpoint}/articles/${i}`)
    .then(res => {
         articles.push(res.data);
      })
    }

    return articles;
}

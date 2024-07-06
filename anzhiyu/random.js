var posts=["2024/07/07/2/","2024/07/04/11/","2024/07/04/1/11/","2024/07/04/douyin/","2024/07/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
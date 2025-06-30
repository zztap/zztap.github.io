var posts=["2025/06/30/hello-world/","2025/06/14/另一篇新文章/","2025/06/13/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
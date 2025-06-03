var posts=["2025/06/03/这是一篇新的博文/","2025/06/01/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
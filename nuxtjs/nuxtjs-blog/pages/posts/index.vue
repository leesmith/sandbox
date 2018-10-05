<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: "1",
            title: "First Post",
            previewText: "This is my first post!",
            thumbnail:
              "https://static.techspot.com/images2/news/bigimage/2016/11/2016-11-21-image-2.jpg"
          },
          {
            id: "2",
            title: "Second Post",
            previewText: "This is my second post!",
            thumbnail:
              "https://static.techspot.com/images2/news/bigimage/2016/11/2016-11-21-image-2.jpg"
          }
        ]
      });
    }, 1500);
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

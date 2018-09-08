<template>
  <section class="post-list">
    <PostPreview id="1" title="Hello there!" previewText="This is my first post!" thumbnail="https://static.techspot.com/images2/news/bigimage/2016/11/2016-11-21-image-2.jpg" />
    <PostPreview id="2" title="Hello there!" previewText="This is my second post!" thumbnail="https://static.techspot.com/images2/news/bigimage/2016/11/2016-11-21-image-2.jpg" />
    <PostPreview id="3" title="Hello there!" previewText="This is my third post!" thumbnail="https://static.techspot.com/images2/news/bigimage/2016/11/2016-11-21-image-2.jpg" />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview
  }
};
</script>

<style>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div class="pa4">
    {{user.id}} has been a member for {{user.created | timeSince }}
  </div>
</template>
<script>
import axios from '~/plugins/axios'

export default {
  async asyncData ({route}) {
    const response = await axios.get(`/user/${route.params.id}.json`)
    return { user: response.data }
  }
}
</script>

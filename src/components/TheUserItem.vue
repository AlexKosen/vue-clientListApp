<script>
export default {
    props: ['user_data'],
    
}
</script>

<template>
      <img class="user-avatar" :src="this.user_data.avatar" alt="User Avatar">
      <div class="user-details">
        <span class="user-name">{{ user_data.first_name}} {{ user_data.last_name }}</span>
        <span class="user-email">{{ user_data.email }}</span>
      </div>
</template>


<style>
</style>
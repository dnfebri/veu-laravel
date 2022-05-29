<template>
  <div>
    <section v-if="name">
      <h1>Hello User {{name}}.</h1>
    </section>
    <section v-else>
      <h1>Daftar User</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{user.name}}
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  export default {
    props: ['name'],
    data() {
      return {
        users: [
          {id: 1, name: 'nama 1'},
          {id: 2, name: 'nama 2'},
          {id: 3, name: 'nama 3'},
          {id: 4, name: 'nama 4'}
        ]
      }
    }
  }
</script>
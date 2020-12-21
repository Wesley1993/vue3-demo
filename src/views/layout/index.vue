<template>
    <a-layout class="main-layout">
      <a-layout-sider theme='dark'>
        <Aside />
      </a-layout-sider>
      <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout-content>
            <router-view/>
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>

</template>

<script lang="ts">
// import { defineComponent } from 'vue'
import { Options, Vue } from 'vue-class-component';
import Aside from './components/aside.vue'


@Options({
  components: {
    Aside,
  },
})
export default class Layout extends Vue {}

</script>

<style scoped>
.ant-layout-header {
  background: #7dbcea;
  color: #fff;
}
.main-layout{
  height: 100%;
}

</style>
<template>
<div>
  <UserMenu @select="menuChange"/>
  <DocAdd v-show="menu==='add'"/>
  <DocDel v-show="menu==='del'" />

</div>
</template>

<script>
import { ref } from "vue";
import UserMenu from '@/components/menu'
import DocAdd from '@/components/docAdd'
import DocDel from '@/components/docDel'
export default {
  data(){
    return {
      menu: 'add'
    }
  },
  components:{
    UserMenu,
    DocAdd,
    DocDel
  },
  methods:{
    menuChange({key}) {
      this.menu = key
    }
  }
}
</script>




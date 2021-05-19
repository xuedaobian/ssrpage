<template>
  <div>
    <AdminEntry v-if="isAdmin==='no'" @login="login" />
    <div v-else>
      <UserMenu @select="menuChange" />
      <DocAdd v-show="menu === 'add'" />
      <DocDel v-show="menu === 'del'" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AdminEntry from "@/components/entry";
import UserMenu from "@/components/menu";
import DocAdd from "@/components/docAdd";
import DocDel from "@/components/docDel";
export default {
  data() {
    return {
      menu: "add",
      isAdmin: 'no'
    };
  },
  components: {
    AdminEntry,
    UserMenu,
    DocAdd,
    DocDel,
  },
  methods: {
    menuChange({ key }) {
      this.menu = key;
    },
    login(res) {
      if(res==='ok') {
        this.isAdmin = 'yes';
      }
    }
  },
};
</script>




<template>
  <div class="pa4">
    <Alert success>Alert!</Alert>
    <Alert error>Alert!</Alert>
    <Alert warning>Alert!</Alert>
    <Alert info>Alert!</Alert>
    <Accordion title="My Title">
      Contents
    </Accordion>
    <div v-stick>
      <button @click="hm">click</button>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        content: "asdf",
      };
    },
    methods: {
      hm() {
        this.content += "simm<br>";
      },
    },
  };
</script>

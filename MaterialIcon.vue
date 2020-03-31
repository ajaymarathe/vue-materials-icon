<template>
    <i class="material-icons" :style="iconStyle">{{ icon }}</i>
</template>

<script>
export default {
  name: "MaterialIcon",
  props: {
    icon: String,
    size: String,
    color: String
  },
  data: function() {
    return {
      iconStyle: {
        "font-size": this.size + "rem",
        "color": this.color
      }
    };
  }
};
</script>
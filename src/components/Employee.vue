<template>
  <div class="employee">
    <div class="employee__image">
      <slot name="image" />
    </div>
    <div class="employee__name">
      <slot name="name" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" src="../sass/components/_employee.scss"></style>

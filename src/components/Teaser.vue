<template>
  <div class="teaser">
    <div class="teaser__image">
      <slot name="image" />
    </div>
    <div class="teaser__date">
      <slot name="date" />
    </div>
    <div class="teaser__title">
      <slot name="title" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" src="../sass/components/_teaser.scss"></style>

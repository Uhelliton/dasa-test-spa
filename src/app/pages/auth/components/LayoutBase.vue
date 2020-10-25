<template>
  <div class="l-auth">
    <div class="l-auth_section">
      <div class="l-auth_content">
        <div>
          <slot name="contentBg"></slot>
        </div>
      </div>
    </div>

    <div class="l-auth_section">
      <div class="l-auth_content">
        <img src="static/logos/logo.png" alt="logo test" title="logo teste" />
        <slot name="contentMain"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/svg/icon'

export default {
  name: 'AuthLayoutBase',
  components: { Icon },
  props: {
    bgImage: {
      type: String,
      required: false,
      default: () => 'login-welcome.png'
    }
  },
  computed: {
  }
}
</script>

<style lang="scss">
@import '../../../../assets/scss/utilities/_all';

.l-auth {
  display: inline-grid;
  grid-template-columns: 1fr + 1fr;
  grid-gap: pxToRem(10);
  max-width: 100vw;
  min-height: 100vh;
  width: 100%;
  background: $color-white;

  &_section {
    grid-column: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    min-height: pxToRem(150);
    background: $color-white;

    &:first-child {
      background: url('/static/images/bg/login-welcome.png') no-repeat center center;
      background-size: cover;
      height: 100%;
    }
  }

  &_content {
    & img {
      width: pxToRem(150);
      display: block;
      margin: pxToRem(30) auto;
    }

    & form {
      width: 80vw;
    }
  }
}

@media only screen and (min-width: $responsive-md)  {
  .l-auth {
    display: inline-grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;

    &_section {
      grid-column: auto;
    }

    &_content {
      & form {
        width: 26vw;
      }
    }
  }
}
</style>

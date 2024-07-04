<template>
  <router-view></router-view>
</template>

<script>

export default {

}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "InterBold";
}

#app {
  display: flex;
  height: 100vh;
}

button {
  border: none;
  background: none;
}

a {
  text-decoration: none;
}

input {
  border: none;
  background-color: none;
  font-family: "InterRegular";
}

input:focus {
  outline: none;
}

input::-webkit-search-cancel-button {
  display: none;
}

.inter-regular {
  font-family: 'InterRegular';
}

.inter-semi-bold {
  font-family: 'InterSemiBold';
}

.inter-medium {
  font-family: 'InterMedium';
}

@font-face {
  font-display: swap;
  font-family: 'InterRegular';
  font-style: normal;
  font-weight: 400;
  src: url('@/fonts/Inter-Regular.woff') format('woff');
}


@font-face {
  font-display: swap;
  font-family: 'InterBold';
  font-style: normal;
  font-weight: 400;
  src: url('@/fonts/Inter-Bold.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: 'InterSemiBold';
  font-style: normal;
  font-weight: 400;
  src: url('@/fonts/Inter-SemiBold.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: 'InterMedium';
  font-style: normal;
  font-weight: 400;
  src: url('@/fonts/Inter-Medium.woff') format('woff');
}
</style>

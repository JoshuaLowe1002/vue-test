<template>
  <div>
    <select v-model="$i18n.locale" class="block text-black appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
      <option
        v-for="(lang, i) in langs"
        :key="`lang-${i}`"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Language',
  data() {
    return { langs: ['en', 'de'] }
  }
}
</script>
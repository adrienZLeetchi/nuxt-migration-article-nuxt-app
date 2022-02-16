<template>
  <header class="mb-5 mt-5">
    <nav>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <RouterLink active-class="active" class="nav-link" to="/">{{
            t("headerHomeLink")
          }}</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink active-class="active" class="nav-link" to="/characters">{{
            t("headerCharachtersLink")
          }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

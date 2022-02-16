<template>
  <main>
    <FilterInput v-model="filterValue" />

    <div class="row gy-3" v-if="filteredList">
      <div class="col-md-3" v-for="item in filteredList">
        <div class="card">
          <img :src="item.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from "vue";
import axios from "axios";
import FilterInput from "../components/FilterInput.vue";

export default defineComponent({
  components: { FilterInput },
  setup() {
    const list = reactive({ results: []});

    onMounted(async () => {
      const request = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      Object.assign(list, request.data);
    });

    const filterValue = ref("");

    const filteredList = computed(() =>
      list.results
        ? list.results.filter((character) =>
            character.name.includes(filterValue.value)
          )
        : []
    );

    return {
      filteredList,
      filterValue,
    };
  },
});
</script>

<template>
  <div>
    <h2>Test Page</h2>
    <PreviewComponent :questions="worksheet" />
  </div>
</template>

<script>
import PreviewComponent from './PreviewComponent.vue';
import { fetchWorksheet } from './ApiService';

export default {
  components: {
    PreviewComponent,
  },
  data() {
    return {
      worksheet: null,
    };
  },
  created() {
    this.fetchWorksheet();
  },
  methods: {
    async fetchWorksheet() {
      try {
        const worksheetId = '123';
        this.worksheet = await fetchWorksheet(worksheetId);
      } catch (error) {
        console.error('Error fetching worksheet:', error);
      }
    },
  },
};
</script>
../ApiService

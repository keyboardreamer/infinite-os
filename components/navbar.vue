<template>
  <!--nav bar is the big white bar on the bottom-->

  <div class="flex absolute z-30 w-full justify-center">
    <!--nav bar on the left-->
    <div
      class="bg-white bg-opacity-40 backdrop-blur-md h-12 px-7 rounded-md flex justify-center items-center nav"
    >
      <controlCenter v-if="components.includes('control')" />

      <!--the search bar-->
      <div
        class="bg-white opacity-40 rounded-md h-8 px-1 mr-4 hidden items-center sm:flex"
      >
        <!--the search logo-->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>

        <input
          class="h-full px-1 text-black"
          placeholder="search"
          v-model="searchContent"
          @keypress.enter="search"
        />
      </div>

      <!--the control--->
      <svg
        class="mr-4 hover:-translate-y-2 hover:shadow-white"
        @click="newPage('control')"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        :stroke="components.includes('control') ? '#FFFFFF' : '#000000'"
        :stroke-width="components.includes('control') ? 2.5 : 2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
        <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
      </svg>

      <!--music-->
      <svg
        class="mr-4 hover:-translate-y-2"
        @click="newPage('music')"
        :stroke="components.includes('music') ? '#FFFFFF' : '#000000'"
        :stroke-width="components.includes('music') ? 2.5 : 2"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="5.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="15.5" r="2.5" />
        <path d="M8 17V5l12-2v12" />
      </svg>

      <!--note-->
      <svg
      class="mr-4 hover:-translate-y-2"
        @click="newPage('note')"
        :stroke="components.includes('note') ? '#FFFFFF' : '#000000'"
        :stroke-width="components.includes('note') ? 2.5 : 2"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"
        ></path>
        <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
      </svg>

      <!--gallery-->
      <svg
      class="mr-4 hover:-translate-y-2"
        @click="newPage('gallery')"
        :stroke="components.includes('gallery') ? '#FFFFFF' : '#000000'"
        :stroke-width="components.includes('gallery') ? 2.5 : 2"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M20.4 14.5L16 10 4 20" />
      </svg>

      <!--command line interface-->
      <svg
      class="mr-4 hover:-translate-y-2"
        @click="newPage('cli')"
        :stroke="components.includes('cli') ? '#FFFFFF' : '#000000'"
        :stroke-width="components.includes('cli') ? 2.5 : 2"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    </div>

    <!--nav bar on the right, or 'side control'-->
    <div
      class="nav bg-opacity-40 bg-white hover:bg-opacity-80 backdrop-blur-md h-12 ml-[15px] px-6 rounded-md hidden items-center justify-center md:flex"
      @click="newPage('sideControl')"
      :class="(components.includes('sideControl')) ? 'bg-opacity-80' : 'bg-opacity-40'"
    >

      <SideControl v-if="components.includes('sideControl')" />

      <svg
        class="mr-3"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline
          points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"
        ></polyline>
      </svg>
      <svg
        class="mr-3"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path
          d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="12" y1="20" x2="12" y2="10"></line>
        <line x1="18" y1="20" x2="18" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="16"></line>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "../stores/db.js";

//intializing value
const store = useStore();
const searchContent = ref("");
const { components } = storeToRefs(store);

//toggling both parts
function toggleSide() {
  showSide.value = !showSide.value;
}

//adding new pages
function newPage(input) {
  if (components.value.includes(input)) {
    components.value = components.value.filter((value) => value !== input);
  } else {
    components.value.push(input);
  }
}

//search function
function search() {
  window.location.href =
    "https://www.google.com/search?q=" + searchContent.value;
}
</script>

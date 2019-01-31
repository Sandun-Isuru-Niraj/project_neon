<template>
  <div>
    <input
      id="pac-input"
      class="controls"
      type="text"
      placeholder="Search Box"
    />
    <div id="map">
      <GmapMap
        :center="{ lat: 6.9271, lng: 79.8612 }"
        :zoom="16"
        map-type-id="terrain"
        style="width: 1366px; height: 728px"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GmapMap>
    </div>
  </div>
</template>

<script>
export default {
  name: "Passenger",
  data() {
    return {
      markers: [
        {
          position: { lat: 6.9271, lng: 79.8612 }
        }
      ]
    };
  }
};
</script>

<style scoped></style>

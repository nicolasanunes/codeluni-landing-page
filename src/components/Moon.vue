<script setup>
import { shallowRef } from 'vue'
import { Levioso, GLTFModel } from '@tresjs/cientos'
import { useLoop } from '@tresjs/core'

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
})

const moonRef = shallowRef()
const { onBeforeRender } = useLoop()

onBeforeRender(() => {
  if (moonRef.value) {
    props.isMobile ? moonRef.value.rotation.y += 0.02 : moonRef.value.rotation.y += 0.002
  }
})
</script>

<template>
  <Levioso speed="4" floatFactor="50">
    <TresMesh ref="moonRef" :position="[0, 0, 0]" :scale="isMobile ? [0.8, 0.8, 0.8] : [1, 1, 1]">
        <GLTFModel
            path="models/moon/scene.gltf"
        />
    </TresMesh>
  </Levioso>
</template>
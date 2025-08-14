<script setup>
import { shallowRef } from 'vue'
import { Levioso, GLTFModel } from '@tresjs/cientos'
import { useLoop } from '@tresjs/core'

const moonRef = shallowRef()
const { onBeforeRender } = useLoop()

onBeforeRender(() => {
  if (moonRef.value) {
    moonRef.value.rotation.y += 0.001
  }
})
</script>

<template>
  <Levioso speed="3" floatFactor="80">
    <TresMesh ref="moonRef" :position="[0, 0, 0]" :scale="[0.8, 0.8, 0.8]">
        <GLTFModel
            path="models/moon/scene.gltf"
        />
    </TresMesh>
  </Levioso>
</template>
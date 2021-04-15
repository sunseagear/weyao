<template>
  <div class="example-wrapper">
    <div class="panel">
      <TWTree
        :tree="tree"
        class="tree">
        <template v-slot:icon="{node}">
          <img v-if="node.hasChild && node.directoryState === 'collapsed'" class="node-icon" src="folder.svg">
          <img v-else-if="node.hasChild && node.directoryState === 'expanded'" class="node-icon" src="folder-open.svg">
          <img v-else-if="!node.hasChild && node.type === 'video'" class="node-icon" src="video.svg">
          <img v-else-if="!node.hasChild && node.type === 'audio'" class="node-icon" src="audio.svg">
          <img v-else class="node-icon" src="text.svg" >
        </template>
        <template v-slot:switcher="{node}">
          <svg-icon v-if="node.directoryState === 'collapsed'" icon-class="add" style="width: 25px;height: 25px"/>
          <svg-icon v-else-if="node.directoryState === 'expanded'" icon-class="delete" style="width: 25px;height: 25px"/>
        </template>
      </TWTree>
    </div>
  </div>
</template>

<script>
import TWTree from 'twtree'

export default {
  name: 'CustomAppearanceIconExample',
  components: {
    TWTree
  },
  data() {
    return {
      tree: [
        {
          id: 1,
          title: 'ROOT',
          hasChild: true,
          children: [
            {
              id: 3,
              title: 'videos',
              hasChild: true,
              children: [
                {
                  id: 4,
                  title: 'song of ice and fire',
                  type: 'video'
                },
                {
                  id: 5,
                  title: 'harry potter',
                  type: 'video'
                },
                {
                  id: 6,
                  title: 'the lord of the rings',
                  type: 'video'
                }
              ]
            },
            {
              id: 7,
              title: 'audios',
              hasChild: true,
              children: [
                {
                  id: 8,
                  title: 'yesterday once more',
                  type: 'audio'
                },
                {
                  id: 9,
                  title: 'my heart will go on',
                  type: 'audio'
                },
                {
                  id: 10,
                  title: 'lovers',
                  type: 'audio'
                }
              ]
            },
            {
              id: 11,
              title: 'text 1'
            },
            {
              id: 12,
              title: 'text 2'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.panel .tree {
  width: 50%;
}
.node-icon {
    width: 1em;
    height: 1em;
    vertical-align: middle;
}
.switcher-icon {
    width: 1em;
    height: 1em;
}
</style>

<template>
  <v-container grid-list-md>
    <v-layout row>
      <v-flex grow>
        <v-textarea solo auto-grow name="loadFileInput" label="Load a JSON file to edit it." v-model="fileContents"></v-textarea>
      </v-flex>
      <v-flex shrink>
        <v-flex>
          <v-btn color="info" @click="readFile">Open File</v-btn>
        </v-flex>
        <v-flex>
          <v-btn color="info" @click="createFile" :disabled="!fileContents">Save File</v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-alert :value="confirmSave" type="success" transition="scale-transition">This is a success confirmSave.</v-alert>
    <v-alert dismissible :value="failedSave" type="error" transition="scale-transition" @click="errMsg = null">There was an error saving the file. <br>{{ errMsg }}</v-alert>
  </v-container>
</template>

<script>
const fs = require('fs')
const {dialog} = require('electron').remote

export default {
  name: 'Fstest',
  data() {
    return {
      newFileName: null,
      fileContents: null,
      filePath: null,
      confirmSave: false,
      failedSave: false,
      errMsg: null
    }
  },
  methods: {
    readFile() {
      let types = [{name: '', extensions: ['json']}]
      let options = {filters:types, properties:['openFile']}

      this.path = dialog.showOpenDialog(options, (filePaths) => {
        if (filePaths === undefined) return
        this.filePath = filePaths[0]

        fs.readFile(this.filePath, (err, data) => {
          if (err) throw console.error
          let jsonObj = JSON.parse(data)
          this.fileContents = JSON.stringify(jsonObj, null, '\t')
        })
      })
    },
    createFile() {
      let types = [{name: 'json', extensions: ['json']}]
      let options = {filters:types}

      dialog.showSaveDialog(options, (fileName) => {
        if (fileName === undefined) return
        fs.writeFile(fileName, this.fileContents, (err) => {
          if (err === null) {
            this.confirmSave = !this.confirmSave
            setTimeout(() => this.confirmSave = !this.confirmSave, 1000)
            this.save = !this.save
          } else {
            this.errMsg = err.message
            this.failedSave = !this.failedSave
          }
        })
      })
    }
  }
}
</script>

<style lang="sass">
</style>
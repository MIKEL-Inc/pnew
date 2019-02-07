<template>
  <div class="fs-test">
    <div class="container">
      <h5>Read Local JSON File</h5>
      <hr>
      <div class="row">
        <div v-if="fileContents" class="col s9">
          <textarea v-model="fileContents"></textarea>
        </div>
        <div v-bind:class="{col: fileContents, s3: fileContents}">
          <p>Select a .json file on the local file system.</p>
          <button @click="readFile" class="btn btn-open">Open File</button>
        </div>
      </div>
      <h5>Write Local JSON File</h5>
      <hr>
      <div class="row">
        <div class="col s9">
          <textarea v-model="createFileContents"></textarea>
        </div>
        <div class="col s3">
          <p>Edit the json data. See Chris for help if you don't know JSON.</p>
          <button @click="createFile" class="btn">Save File</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const fs = require('fs')
const {dialog} = require('electron').remote

export default {
  name: 'FSTest',
  data() {
    return {
      newFileName: null,
      createFileContents: JSON.stringify({"data": { "Greetings": "Hello World"}}, null, '\t'),
      fileContents: null,
      filePath: null
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
        fs.writeFile(fileName, this.createFileContents, (err) => {
          if (err === null) {
            dialog.showMessageBox({
              message: 'File Saved!',
              buttons: ["OK"]
            })
          } else {
            dialog.showErrorBox("File Save Error", err.message)
          }
        })
        this.createFileContents = JSON.stringify({"data": { "Greetings": "Hello World"}}, null, '\t')
      })
    }
  }
}
</script>

<style lang="sass">
textarea
  height: 150px
</style>
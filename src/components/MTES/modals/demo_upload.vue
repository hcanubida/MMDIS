<template>
    <div class="row mb-2">
      <div class="col-sm-8 offset-2">
        <div v-if="message" class="alert alert-success" role="alert">{{ message }}</div>
        <div class="row">
          <div class="col-md-4">
            <h6>Upload Multiple</h6>
          </div>
          <div class="col-md-6">
            <form @submit.prevent="submitMultiple" enctype="multipart/form-data">
              @csrf
              <div class="input-group">
                <div class="custom-file">
                  <input type="file" ref="fileMultiple" class="custom-file-input" required accept="application/*" multiple>
                  <label class="custom-file-label" for="inputFileMultiple">Choose files</label>
                </div>
                <div class="input-group-append">
                  <button type="submit" class="btn btn-primary float-right mr-2">Upload <i class="fa fa-upload"></i></button>
                </div>
                <div>
                    <input type="type" id="idReference" v-model="idRef" class="form-control" placeholder="Enter ID Reference">
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- Other forms go here -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: '',
        idRef: '',
        files: []
      };
    },
    methods: {
      submitMultiple() {
        const formData = new FormData();
        Array.from(this.$refs.fileMultiple.files).forEach(file => {
          formData.append('files[]', file);
        });
        formData.append('id_reference', this.idRef);
  
        // Handle form submission using axios or fetch
        // Example using axios:
        axios.post('http://127.0.0.1:8000/add_uploads', formData)
          .then(response => {
            console.log('record ', this.idRef)
          })
          .catch(error => {
            console.error(error);
            // Handle error
          });
      },
      // Define methods for other forms if needed
    }
  }
  </script>

<style lang="scss" scoped></style>
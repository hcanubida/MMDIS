<template>
    <div class="card">
        <div class="top"></div>
        <div class="drag-area" @dragover.prevent="onDragOver" @dragleave.prevent="onDragleave" @drop.prevent="onDrop">
            <span v-if="!isDragging">
                Drag & Drop files here or
                <span class="select" role="button" @click="selectFiles">Choose</span>
            </span>
            <div v-else class="select">Drop Files here</div>
            <input name="file" type="file" class="file" ref="fileInput" required accept="application/*" multiple
                @change="onFileSelect" />
        </div>
        <div class="container-upload">
            <div class="file-info" v-for="(file, index) in uploadFiles1" :key="index">
                <span class="delete" @click="deleteFile(index)">&times;</span>
                <span class="val">{{ file.name }}</span>
            </div>
        </div>
        <!-- <button class="upload-btn" @click="submitMultiple">Upload</button> -->
    </div>
    <div>
        <!-- <input type="text" placeholder="id" v-model="idRef"> -->
        <!-- <p>{{ uploadFiles1 }}</p> -->
    </div>
</template>
<script setup>
</script>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    props: {
        name: String,
        uploadFiles1: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            // files: [],
            isDragging: false,
        };
    },
    created(){
        console.log(this.uploadFiles1)
    },
    methods: {
        selectFiles() {
            this.$refs.fileInput.click();
        },
        onFileSelect(event) {
            const files = event.target.files;
            if (files.length === 0) return;
            for (let i = 0; i < files.length; i++) {
                if (!this.uploadFiles1.some((e) => e.name === files[i].name)) {
                    this.uploadFiles1.push(files[i]);
                }
            }
        },
        deleteFile(index) {
            this.uploadFiles1.splice(index, 1);
        },
        onDragOver(event) {
            event.preventDefault();
            this.isDragging = true;
            event.dataTransfer.dropEffect = "copy";
        },
        onDragleave(event) {
            event.preventDefault();
            this.isDragging = false;
        },
        onDrop(event) {
            event.preventDefault();
            this.isDragging = false;
            const files = event.dataTransfer.files;
            for (let i = 0; i < files.length; i++) {
                if (!this.uploadFiles1.some((e) => e.name === files[i].name)) {
                    this.uploadFiles1.push(files[i]);
                }
            }
        },
        // submitMultiple() {
        //     const formData = new FormData();
        //     this.files.forEach(file => {
        //         formData.append('files[]', file);
        //     });
        //     formData.append('id_reference', this.idRef);

        //     // Handle form submission using axios or fetch
        //     axios.post('http://127.0.0.1:8000/add_uploads', formData)
        //         .then(response => {
        //             console.log('Files uploaded successfully');
        //             // Optionally, you can clear the files array after successful upload
        //             this.files = [];
        //         })
        //         .catch(error => {
        //             console.error('Error uploading files:', error);
        //             // Handle error
        //         });
        // },
    },
};
</script>

<style lang="scss" scoped>
.card {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    overflow: hidden;
}

.card .top {
    text-align: center
}

.card p {
    font-weight: bold;
    color: rgb(209, 150, 101);
    font-weight: 400px;
}

.card button {
    outline: 0;
    border: 0;
    color: #ffdfdf;
    border-radius: 4px;
    font-weight: 400;
    padding: 8px 13px;
    width: 100%;
    background-color: #e0b983;
}

.card .drag-area {
    height: 90px;
    border-radius: 5px;
    border: 2px dashed #7e694d;
    background: #e0b983;
    color: #a56d05;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: center;
    -webkit-user-select: none;
    margin: 10px;
}

.card .drag-area .visible {
    font-size: 18px;
}

.card .select {
    color: rgb(102, 64, 17);
    margin-left: 5px;
    cursor: pointer;
    transition: 0.4s;
}

.card .select:hover {
    opacity: 0.6;
}

.card .container-upload {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-height: 200px;
    position: relative;
}

.card .container-upload .image {
    width: 75px;
    margin-right: 5px;
    height: 75px;
    position: relative;
    margin-bottom: 8px;
}

.card .container-upload.image img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

.card .container-upload .image span {
    position: absolute;
    top: -2px;
    right: 9px;
    font-size: 20px;
    cursor: pointer;
}

.card input,
.card .drag-area .on-drop,
.card .drag-area.dragover .visible {
    display: none;
}

.file-info {
    display: flex;
    justify-content: center;
}

.delete {
    z-index: 999;
    color: red;
    cursor: pointer;
}

.val {
    padding-right: 5px;
}
</style>
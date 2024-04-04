<template>
    <div class="card">
        <div class="top">
        </div>
        <div class="drag-area" @dragover.prevent="onDragOver" @dragleave.prevent="onDragleave" @drop.prevent="onDrop">
            <span v-if="!isDragging">
                Drag & Drop files here or
                <span class="select" role="button" @click="selectFiles">Choose</span>
            </span>
            <div v-else class="select">Drop Files here</div>
            <input name="file" type="file" class="file" ref="fileInput" multiple @change="onFileSelect" />
        </div>
        <div class="container-upload">
            <div class="file-info" v-for="(file, index) in files" :key="index">
                <span class="delete" @click="deleteFile(index)">&times;</span>
                <span>{{ file.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            files: [],
            isDragging: false
        }
    },
    methods: {
        selectFiles() {
            this.$refs.fileInput.click();
        },
        onFileSelect(event) {
            const files = event.target.files;
            if (files.length === 0) return;
            for (let i = 0; i < files.length; i++) {
                if (!this.files.some((e) => e.name === files[i].name)) {
                    this.files.push(files[i]);
                }
            }
        },
        deleteFile(index) {
            this.files.splice(index, 1);
        },
        onDragOver(event){
            event.preventDefault();
            this.isDragging = true;
            event.dataTransfer.dropEffect ="copy";
        },
        onDragleave(event){
            event.preventDefault();
            this.isDragging = false;
        },
        onDrop(event){
            event.preventDefault();
            this.isDragging = false;
            const files = event.dataTransfer.files;
            for (let i = 0; i < files.length; i++) {
                if (!this.files.some((e) => e.name === files[i].name)) {
                    this.files.push(files[i]);
                }
            }
        }
    }
}
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

.delete {
    z-index: 999;
    color: red;
}
</style>
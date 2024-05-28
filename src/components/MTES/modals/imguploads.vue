<template>
    <div class="grid w-full max-w-xs items-center gap-1.5">
        <label
            class="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-3">
            images to insert:
        </label>
        <input id="picture" type="file" accept="image/*" multiple @change="handleFileInputChange"
            class="flex h-8 w-full cursor-pointer mb-2 ml-2 rounded-md border border-input bg-white px-5 py-1 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium" />
        <p class="text-sm text-gray-400 font-medium leading-none ml-3 mb-2">images:</p>
        <div v-if="imageFiles.length > 0" class="mt-3 flex flex-row gap-x-2 ml-2">
            <div v-for="(image, index) in imageFiles" :key="index" class="mt-2">
                <img :src="image.url" class="w-15 h-16" alt="Uploaded Image" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

export default {
    name: 'ImageUploads',
    props: {
        containerId: {
            type: String,
            required: true
        }
    },
    setup(props, { emit }) {
        const imageFiles = ref([]);

        const handleFileInputChange = (event) => {
            const files = event.target.files;
            const uploadedImages = [];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const fileType = file.type;

                if (fileType.startsWith('image/') && /\.(jpg|png|jpeg)$/i.test(file.name)) {
                    const url = URL.createObjectURL(file);
                    const uniqueKey = uuidv4();
                    uploadedImages.push({ file, uniqueKey, url });
                }
            }

            if (uploadedImages.length > 0) {
                imageFiles.value = uploadedImages; // Update the imageFiles array in the child component
                emit('images-uploaded', { containerId: props.containerId, images: uploadedImages });
            } else {
                console.error("No valid images were uploaded.");
            }
        };

        return {
            imageFiles,
            handleFileInputChange,
        };
    },
};
</script>

<style lang="scss" scoped></style>
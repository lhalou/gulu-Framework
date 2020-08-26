<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<style lang = "scss" scoped>
    .content {
        /* content区域自动充满屏幕 */
        flex-grow: 1;
    }
</style>
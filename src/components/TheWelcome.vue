<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
    <WelcomeItem>
        <template #icon>
            <DocumentationIcon />
        </template>
        <template #heading>说明文档</template>
        <p>城市信息查询系统基于 Vue3 + jsonp 设计实现</p>
    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
            <ToolingIcon />
        </template>
        <template #heading>技术介绍</template>
        <p>使用 Vue3 + Vue-router + jsonp 协同开发</p>
    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
            <EcosystemIcon />
        </template>
        <template #heading>功能介绍</template>
        <p>城市信息浏览和查询功能</p>
    </WelcomeItem>
</template>

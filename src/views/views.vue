<template>
    <div class="home">
        <table-comp :msg="parentid[path]?.title + '市区县列表'" :results="results"></table-comp>
    </div>
</template>

<script setup>
import jsonp from 'jsonp'
import { onMounted, ref, watch } from 'vue'
import TableComp from '@/components/TableComp.vue'
import { useRoute } from 'vue-router'

const results = ref([])
const parentid = ref({
    beijing: {
        id: '1',
        title: '北京'
    },
    tianjin: {
        id: '26',
        title: '天津'
    },
    shanghai: {
        id: '24',
        title: '上海'
    },
    chongqing: {
        id: '31',
        title: '重庆'
    }
})
const path = ref('')
const route = useRoute()
onMounted(() => {
    path.value = route.path.slice(1)
    getCityData()
})

const getCityData = () => {
    const url = 'https://api.jisuapi.com/area/city?'
    const query = `parentid=${parentid.value[path.value].id}&appkey=`
    const key = '8db15f4d5a5370da'
    const jsonUrl = url + query + key
    jsonp(jsonUrl, null, (err, data) => {
        console.log(data)
        if (err) {
            alert(err)
        } else {
            results.value = data.result
        }
    })
}
watch(route, val => {
    path.value = route.path.slice(1)
    getCityData()
})
</script>
<script>
export default {
    name: 'BeiJingCity'
}
</script>

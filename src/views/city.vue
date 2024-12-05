<template>
    <div class="home">
        <table-comp msg="全国城市列表" :results="results"></table-comp>
    </div>
</template>

<script setup>
import jsonp from 'jsonp'
import { onMounted, ref } from 'vue'
import TableComp from '@/components/TableComp.vue'

const results = ref([])

onMounted(() => {
    getCityData()
})

const getCityData = () => {
    const url = 'https://api.jisuapi.com/area/province?appkey='
    const key = '8db15f4d5a5370da'
    const jsonUrl = url + key
    jsonp(jsonUrl, null, (err, data) => {
        if (err) {
            alert(err)
        } else {
            results.value = data.result
        }
    })
}
</script>
<script>
export default {
    name: 'City'
}
</script>

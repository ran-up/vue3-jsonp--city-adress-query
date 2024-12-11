<template>
    <table>
        <caption>
            {{
                msg
            }}
        </caption>
        <thead>
            <tr>
                <th>No</th>
                <th>City Id</th>
                <th>City Name</th>
                <th>Area Code</th>
                <th>Total Area</th>
                <th>ZIP Code</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(rs, index) in results" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ rs.id }}</td>
                <td>{{ rs.name }}</td>
                <td>{{ rs.areacode }}</td>
                <td>{{ rs.totalarea }}</td>
                <td>{{ rs.zipcode }}</td>
            </tr>
            <tr v-if="results.length === 0">
                <td colspan="6">加载中...</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
defineProps(['msg', 'results'])
</script>

<style scoped>
h3,
h4 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
table {
    width: 98%;
    margin: 16px 0;
    border-collapse: collapse;
    border: 0;
}
th {
    background-color: #42b983;
    color: #000000;
}
th,
td {
    font-size: 0.95em;
    text-align: center;
    padding: 4px;
    border-collapse: collapse;
    border: 1px solid #c1e9fe;
    border-width: 1px 0 1px 0;
}
tr {
    border: 1px solid #c1e9fe;
}
tr:nth-child(odd) {
    background-color: #dbf2fe;
}
tr:nth-child(even) {
    background-color: #fdfdfd;
}
</style>

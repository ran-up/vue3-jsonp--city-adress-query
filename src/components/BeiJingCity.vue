<template>
    <div class="home">
        <table>
            <caption>
                {{
                    msg
                }}
            </caption>
            <tr>
                <th>No</th>
                <th>City Id</th>
                <th>City Name</th>
                <th>Area Code</th>
                <th>Total Area</th>
                <th>ZIP Code</th>
            </tr>
            <tr v-for="(rs, index) in results" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ rs.id }}</td>
                <td>{{ rs.name }}</td>
                <td>{{ rs.areacode }}</td>
                <td>{{ rs.totalarea }}</td>
                <td>{{ rs.zipcode }}</td>
            </tr>
        </table>
    </div>
</template>

<script setup></script>
<script>
export default {
    name: 'BeiJingCity'
}
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
a {
    color: #42b983;
}
div.divCen {
    margin: 8px auto;
    width: auto;
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
}
th,
td {
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

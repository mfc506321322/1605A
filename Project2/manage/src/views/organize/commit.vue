<template>
  <ve-line :data="chartData"></ve-line>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
          rows: [
            { 'cost': 1523, 'date': '01/01', 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'cost': 1223, 'date': '01/02', 'profit': 1523, 'growthRate': 0.345, 'people': 100 },
            { 'cost': 2123, 'date': '01/03', 'profit': 1523, 'growthRate': 0.7, 'people': 100 },
            { 'cost': 4123, 'date': '01/04', 'profit': 1523, 'growthRate': 0.31, 'people': 100 },
            { 'cost': 3123, 'date': '01/05', 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'cost': 7123, 'date': '01/06', 'profit': 1523, 'growthRate': 0.65, 'people': 100 }
          ]
        }
      }
    },
    created(){
      fetch('http://127.0.01:15000/users/commit')
      .then(res=>res.json())
      .then(body=>{
        console.log('body...', body);
        let columns = ['date', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        let rows = body[0].commit;
        rows.forEach((item, index)=>{
          let date = item.date;
          // console.log(body[index].commit)
          delete item.commit;
          item['1月'] = body[0].commit[date-1] && body[0].commit[date-1].commit;
          item['2月'] = body[1].commit[date-1] && body[1].commit[date-1].commit;
          item['3月'] = body[2].commit[date-1] && body[2].commit[date-1].commit;
          item['4月'] = body[3].commit[date-1] && body[3].commit[date-1].commit;
          item['5月'] = body[4].commit[date-1] && body[4].commit[date-1].commit;
          item['6月'] = body[5].commit[date-1] && body[5].commit[date-1].commit;
          item['7月'] = body[6].commit[date-1] && body[6].commit[date-1].commit;
          item['8月'] = body[7].commit[date-1] && body[7].commit[date-1].commit;
          item['9月'] = body[8].commit[date-1] && body[8].commit[date-1].commit;
          item['10月'] = body[9].commit[date-1] && body[9].commit[date-1].commit;
          item['11月'] = body[10].commit[date-1] && body[10].commit[date-1].commit;
          item['12月'] = body[11].commit[date-1] && body[11].commit[date-1].commit;
        })
        console.log('rows..', rows);
        this.chartData = {
          columns,
          rows
        }
      })
    }
  }
</script>

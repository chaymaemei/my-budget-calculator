/*import {VictoryPie} from 'victory-native';



function processCategoryDataToDisplay() {
    let ChartData = transactions.map((item => {
        let confirmExpenses = item.expense.filter(a => a.status == "c")
        var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0)

        return {
            name: item.name,
            y: total,
            expenseCount: confirmExpenses.lenght,
            color: item.color,
            id: item.id,

        }
    }))
    let filterChartData = ChartData.filter(a => a.y > 0)
    let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0)
    let finalChartData = filterChartData.map((item) => {
        let percentage = (item.y / totalExpense * 100).toFixed(0)
        return {
            label: '{percentage}',
            y: Number(item.expenseCount),
            color: item.color,
            name: item.name,
            id: item.id,
        }
    })
    return finalChartData;

}

function renderChart(){
    let chartData = processCategoryDataToDisplay()
    let colorScales = chartData.map((item) => item.color)
    let totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), 0)

    return (
        <div style={{ alignItems: 'center', justifyContent: 'center' }}>
            <VictoryPie
                data={chartData}
                colorScale={colorScales}
                labels={(datum) => '${datum.y}'}
                innerRadius={70}
                labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}


            />
            <div style={{position : 'absolute', top : '42%', left:'42%'}}>
                <div style={{ textAlign : 'center'}}>{totalExpenseCount}</div>
                <div style={{textAlign : 'center'}}>expenses</div>
            </div>

        </div>
    )
}
export default renderChart;*/
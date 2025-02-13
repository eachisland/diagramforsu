const ctx = document.getElementById('myChart').getContext('2d');
let chartData = {
    8: [10, 30, 60],
    9: [20, 25, 55],
    10: [15, 35, 50],
    11: [25, 20, 55],
    12: [30, 40, 30]
};
let chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Професия', 'Мислене', 'Аз и другите'],
        datasets: [{
            data: chartData[8],
            backgroundColor: ['#F54F7A', '#0068ff', '#783ac9'],
            borderWidth: 5
        }]
    },
    options: {
        responsive: true,
        cutout: '50%',
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 18
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        let value = tooltipItem.raw;
                        return ' ' + value + '%';
                    }
                },
                bodySpacing: 12,
                padding: 12,
                titleFont: {
                    size: 18
                },
                bodyFont: {
                    size: 18
                }
            }
        }
    }
});

function updateChart(classNumber) {
    document.getElementById('chartTitle').innerText = classNumber + '. клас';
    chart.data.datasets[0].data = chartData[classNumber];
    chart.update();
    [...document.querySelectorAll('.tab')].forEach(el => el.classList.remove('active'))
    let currBtn = [...document.querySelectorAll('.tab')].filter(el => el.textContent.includes(classNumber))[0];
currBtn.classList.add('active');    
}


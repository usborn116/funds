import React from 'react';
import Plot from 'react-plotly.js';

const GraphFund=({funds})=>{
    const vals = []
    const labels = []
    funds.map((fund) => 
        vals.push(fund.allocated)
        )

    funds.map((fund) => 
        labels.push(fund.name)
        )
    
    return (
        <div>
            <h3 class="chart-title">Total In Funds: ${vals.reduce((p, a) => p + a, 0)}</h3>
    <Plot
        data={
        [{
            values: vals,
            labels: labels,
            name: 'Total in Funds',
            hole: 0.3,
            textinfo: 'label+percent',
            textposition: 'outside',
            automargin: true,
            type: 'pie'
        }]
        }
        layout= {{width: 400, height: 400, font: 'Raleway', font_size: 15, paper_bgcolor: 'rgba(0,0,0,0)', legend :
            { bgcolor: 'rgba(0,0,0,0)', }
    }}
    />
    </div>
    );
  }

  export default GraphFund
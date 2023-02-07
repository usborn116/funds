import React from 'react';
import Plot from 'react-plotly.js';

const Graph=({accounts})=>{
    const vals = []
    const labels = []
    accounts.map((acct) => 
        vals.push(acct.amount)
        )

    accounts.map((acct) => 
        labels.push(acct.name)
        )
    
    return (
        <div>
            <h3 class="chart-title">Total In Accounts: ${vals.reduce((p, a) => p + a, 0)}</h3>
    <Plot
        data={
        [{
            values: vals,
            labels: labels,
            name: 'Total in Accounts',
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

  export default Graph
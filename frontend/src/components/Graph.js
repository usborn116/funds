import React from 'react';
import Plot from 'react-plotly.js';

const Graph=({accounts})=>{
    const values = accounts.map((account) => account.amount)
    const labels = accounts.map((account) => account.name)
    
    return (
        <div>
            <h3 className="chart-title">Total In Accounts: ${values.reduce((p, a) => p + a, 0)}</h3>
    <Plot
        data={
        [{
            values: values,
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

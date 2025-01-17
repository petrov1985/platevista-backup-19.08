import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../../data/data' 

import { useStateContext } from '../../../contexts/ContextProvider';

const SparkLine = () => {
  return (
    <ChartComponent
    id='line-chart'
    height='400px'
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{ border: { width: 0 } }}
    tooltip={{ enable: true }}
    // background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services= {[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
      {lineCustomSeries.map((item, index) => 
      <SeriesDirective key={index} {...item}/>)}
    </SeriesCollectionDirective>

    </ChartComponent>
  );
};

export default SparkLine;
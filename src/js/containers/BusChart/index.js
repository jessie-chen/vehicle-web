import React, { Component } from 'react';
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend,
    LineChart, Line, BarChart, Bar, AreaChart, Area, ScatterChart, Scatter, ComposedChart} from 'recharts';
import {isObject, isArray, isString} from '../../utils';


/**
 *
 */
const parts_code_shape = React.PropTypes.shape({
    code: React.PropTypes.string,
    type: React.PropTypes.string
});

class BusChart extends Component {

    static propTypes = {
        bus_id: React.PropTypes.string,
        parts_code: React.PropTypes.oneOfType([
            React.PropTypes.string,
            parts_code_shape,
            React.PropTypes.arrayOf(parts_code_shape)
        ]),
        width: React.PropTypes.number,
        height: React.PropTypes.number
    };

    static defaultProps = {
        width: 400,
        height: 200
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    _getChart() {
        const { parts_code } = this.props;
        let chartType;

        // LineChart as default
        if (isString(parts_code)) {
            chartType = [LineChart, Line];
        }

        else if(isObject(parts_code)) {
            chartType = this._getChartType(parts_code.type);
        }

        else if(isArray(parts_code)) {
            const types = parts_code.map(o => o.type);
            const uniqTypes = types.filter((v, i, a) => a.indexOf(v) === i);
            let rootType;
            if (uniqTypes.length > 1) {
                rootType = ComposedChart;
            } else {
                rootType = this._getChartType(uniqTypes[0]);
            }
            chartType = [rootType, types];
        }

        // LineChart as default
        else {
            chartType = [LineChart, Line];
        }

        return chartType;
    }

    _getChartType(type) {
        let chartType;
        switch (type) {
            case "line":
                chartType = [LineChart, Line];
                break;
            case "bar":
                chartType = [BarChart, Bar];
                break;
            case "area":
                chartType = [AreaChart, Area];
                break;
            case "scatter":
                chartType = [ScatterChart, Scatter];
                break
            default:
                chartType = [LineChart, Line];
        }
        return chartType;
    }

    render() {
        const {type, width, height} = this.props;
        const data = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
        ];

        const [ConcreteChart, ChartElement] = this._getChart();

        const elems = isArray(ChartElement)
            ? (ChartElement.map(E => <E type="monotone" dataKey="uv" stroke="#8884d8"/>))
            : <ChartElement type="monotone" dataKey="uv" stroke="#8884d8" />;

        return (
            <div>
                `bus chart ${type}`
                <ConcreteChart width={width} height={height} data={data} margin={{top:30, left:20, right:20, bottom:30}}>
                    {elems}
                    <CartesianGrid stroke="#ccc" strokeDasharray="4"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend verticalAlign="top" align="right"/>
                </ConcreteChart>
            </div>
        );

        /*
         return (
         <div>
         `bus chart ${type}`
         <LineChart width={800} height={400} data={data} margin={{top:30, left:20, right:20, bottom:30}}>
         <Line type="monotone" dataKey="uv" stroke="#8884d8" />
         <CartesianGrid stroke="#ccc" strokeDasharray="4"/>
         <XAxis dataKey="name"/>
         <YAxis/>
         <Tooltip/>
         <Legend verticalAlign="top" align="right"/>
         </LineChart>
         </div>
         )
         */

    }
}

export default BusChart;

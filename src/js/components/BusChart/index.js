import React, { Component } from 'react';
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend,
    LineChart, Line, BarChart, Bar, AreaChart, Area, ScatterChart, Scatter, ComposedChart} from 'recharts';
import {isObject, isArray, isString} from '../../utils';


/**
 * parts code shape
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
        height: React.PropTypes.number,
        data: React.PropTypes.array
    };

    static defaultProps = {
        width: 400,
        height: 200
    };

    constructor(props) {
        super(props);
    }

    /**
     * get chart
     *
     * @returns {Object} { rootType: <RootChartType>, elements: [{type: <ElementChartType>, dataKey: <key>}, ...]}
     * @private
     */
    _getChart() {
        const { parts_code } = this.props;
        let chartType;

        // LineChart as default
        if (isString(parts_code)) {
            chartType = {
                rootType: LineChart,
                elements: parts_code.split(/\s|,|;/).map(c=>({type: Line, dataKey: c}))
            };
        }

        else if(isObject(parts_code)) {
            const [rootType, elemType] = this._getChartType(parts_code.type);
            chartType = {
                rootType: rootType,
                elements: [{type: elemType, dataKey: parts_code.code}]
            };
        }

        else if(isArray(parts_code)) {
            const types = parts_code.map(o => o.type);
            const uniqTypes = types.filter((v, i, a) => a.indexOf(v) === i);
            let rootType;
            if (uniqTypes.length > 1) {
                rootType = ComposedChart;
            } else {
                rootType = this._getChartType(uniqTypes[0])[0];
            }
            chartType = {
                rootType: rootType,
                elements: parts_code.map(o => ({type: this._getChartType(o.type)[1], dataKey: o.code}))
            };

        }

        else {
            // Should not go here.
        }

        return chartType;
    }

    /**
     * get chart type
     *
     * @param type
     * @returns {Array} [RootChartType, ElementChartType]
     * @private
     */
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
                break;
            default:
                chartType = [LineChart, Line];
        }
        return chartType;
    }

    render() {
        const {width, height, data} = this.props;
        const {rootType: ConcreteChart, elements: ChartElements} = this._getChart();

        const elems = ChartElements.map(e => {
            const {type: ElemChart, dataKey: dataKey} = e;
            return <ElemChart type="monotone" dataKey={dataKey} stroke="#8884d8" key={dataKey}/>
        });

        return (
            <div>
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

    }
}

export default BusChart;

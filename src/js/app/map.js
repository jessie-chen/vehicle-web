import "../../styles/map.scss";
import bmapStyles from './bmap_styles';
import React from 'react';
import ReactDOM from 'react-dom';
import jsxToString from 'jsx-to-string'
import '../components/Modal/example';
import BusActivity from '../containers/BusActivity/index';
import {ready} from '../utils';

// DEVELOP
if (process.env.NODE_ENV !== 'production') {
    require('../../map.html');
    // Hot replacement; Comment below for hot reload
    // if (module.hot) {
    //     module.hot.accept();
    // }
}

//创建地图
function createMap() {
    var map = new BMap.Map('allmap');
    //創建默認坐標
    map.centerAndZoom(new BMap.Point(104.114129, 37.550339), 5);
    //設置地圖樣式
    map.setMapStyle({
        styleJson: bmapStyles
    });
    //添加車輛信息
    addCar(map);
    return map;
}

var last_infobox;
//添加車輛
function addCar(map) {
    var point = new BMap.Point(117.414617, 33.928658);
    var point1 = new BMap.Point(116.414617, 39.928658);
    var point2 = new BMap.Point(110.414617, 31.928658);
    var point3 = new BMap.Point(112.414617, 31.928658);

    function addMarker(point, index, status) {  // 创建图标对象
        var point_pic;
        switch (status) {
            case "warn":
                point_pic = "img/icons/warn.png";
                break;
            case "error":
                point_pic = "img/icons/error.png";
                break;
            case "dead":
                point_pic = "img/icons/dead.png";
                break;
            default:
                point_pic = "img/icons/point.png";
                break;
        }
        var positionIcon = new BMap.Icon(point_pic, new BMap.Size(20, 20), {
            // 指定定位位置。
            // 当标注显示在地图上时，其所指向的地理位置距离图标左上
            // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
            // 图标中央下端的尖角位置。
            offset: new BMap.Size(10, 10),
            // 设置图片偏移。
            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
            // 需要指定大图的偏移位置，此做法与css sprites技术类似。
            imageOffset: new BMap.Size(0, 0 - index * 20)   // 设置图片偏移
        });
        // 创建标注对象并添加到地图
        var marker = new BMap.Marker(point, {icon: positionIcon});

        // marker 鼠标事件
        marker.addEventListener("mouseover", function (e) {
            var infoBoxContent =
                    <div class="infoBoxContent">
                        <ul class="items">
                            <li class="item-content">车辆编号：201600001</li>
                            <li class="item-content">车牌号：粤B 075555</li>
                            <li class="item-content">车辆类型：11米氢燃料电池车</li>
                            <li class="item-content">续驶里程：500km</li>
                            <li class="item-content">车辆状态：行驶中</li>
                        </ul>
                    </div>
                ;
            var infoBox = new BMapLib.InfoBox(map,jsxToString(infoBoxContent).toString(),{
                boxStyle:{},
                closeIconMargin: "8px 10px 0 0",
                closeIconUrl: "../../../img/icons/empty.png",
                enableAutoPan: true,
                offset: new BMap.Size(100,40),
                align: INFOBOX_AT_BOTTOM
            });

            if(last_infobox != null) last_infobox.close();
            infoBox.open(marker);
            last_infobox = infoBox;
        });

        // marker 鼠标事件
        marker.addEventListener("mouseout", function (e) {
            if(last_infobox != null) last_infobox.close();
        });

        // marker 鼠标事件
        marker.addEventListener("click", function (e) {
            window.location.href = "#";
        });


        // BMapLib.CurveLine 地点连线
        // var curve = new BMapLib.CurveLine([point,new BMap.Point(117.414617-10,33.928658-10)], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.5}); //新建弧线覆盖物对象
        // infoBox.addEventListener("open", function(e) {
        //     map.addOverlay(curve); //添加到地图
        // });
        // infoBox.addEventListener("close", function(e) {
        //     map.removeOverlay(curve);
        // });


        map.addOverlay(marker);
    }

    addMarker(point, 0, "point");
    addMarker(point1, 0, "error");
    addMarker(point2, 0, "warn");
    addMarker(point3, 0, "dead");
}

//地图事件设置函数：
function setMapEvent(map) {
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard();//启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl(map) {
    //向地图中添加缩放控件
    // var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_ZOOM});
    // map.addControl(ctrl_nav);
    //向地图中添加缩略图控件
    // var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
    // map.addControl(ctrl_ove);
    //向地图中添加比例尺控件
    // var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    // map.addControl(ctrl_sca);
}

//init
function loadMap() {
    const map = createMap();
    setMapEvent(map);
    addMapControl(map);
}


ready(function () {
    var appElement = document.getElementById('bus_activity');
    console.log(appElement);
    ReactDOM.render(<BusActivity/>,appElement);
    loadMap();

});

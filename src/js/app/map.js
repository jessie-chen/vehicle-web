
import "../../styles/map.scss";
import bmapStyles from './bmap_styles'; 

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
    map.centerAndZoom(new BMap.Point(104.114129, 37.550339), 5);
    
    // var  mapStyle ={ 
    //     features: ["road", "building","water","land"],//隐藏地图上的poi
    //     style : "dark"  //设置地图风格: normal, light, dark
    // }
    // map.setMapStyle(mapStyle);

    map.setMapStyle({
        styleJson: bmapStyles
    });
    
    return map;
}

//地图事件设置函数：
function setMapEvent(map){
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard();//启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl(map){
    //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_ZOOM});
	map.addControl(ctrl_nav);
    //向地图中添加缩略图控件
	// var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
	// map.addControl(ctrl_ove);
    //向地图中添加比例尺控件
	// var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	// map.addControl(ctrl_sca);
}


//////////////////////////////
// init
//////////////////////////////

function loadMap() {
    const map = createMap();
    setMapEvent(map);
    addMapControl(map);
}
loadMap();



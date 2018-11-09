/*
    author:xinglie.lkf@alibaba-inc.com
*/
import Designer from '../designer';
import Props from '../../designer/props';
export default Designer.extend({
    ctor() {
        this.set({
            view: '@./index'
        });
    }
}, {
        type: 'hw',
        title: '文本',
        icon: '&#xe6bc;',
        resize: true,
        resizeX: true,
        getProps(x, y) {
            return {
                x,
                y,
                rotate: 0,
                width: 150,
                height: 30,
                background: '',
                forecolor: '#000000',
                fontsize: 14,
                locked: false
            }
        },
        props: [{
            tip: '@{lang#props.x}',
            key: 'x',
            type: Props["@{number}"],
            scale: true
        }, {
            tip: '@{lang#props.y}',
            key: 'y',
            type: Props["@{number}"],
            scale: true
        }, {
            tip: '@{lang#props.width}',
            key: 'width',
            type: Props["@{number}"],
            scale: true,
            min: '0'
        }, {
            tip: '@{lang#props.height}',
            key: 'height',
            type: Props["@{number}"],
            scale: true,
            min: '0'
        }, {
            tip: '@{lang#props.rotate}',
            key: 'rotate',
            type: Props["@{number}"],
            max: 360,
            min: -360
        }, {
            type: Props["@{spliter}"]
        }, {
            tip: '@{lang#props.background}',
            key: 'background',
            clear: true,
            alpha: true,
            type: Props["@{color}"]
        }, {
            tip: '@{lang#props.forecolor}',
            key: 'forecolor',
            type: Props["@{color}"]
        }, {
            tip: '@{lang#props.font.size}',
            key: 'fontsize',
            type: Props["@{number}"],
            min: '0'
        }, {
            type: Props["@{spliter}"]
        }, {
            tip: '@{lang#props.locked}',
            key: 'locked',
            type: Props["@{boolean}"],
            refresh: true,
            free: true
        }]
    });
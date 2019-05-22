/**
 * create by zhangyupeng on 2017.11
 **/
/*eslint-disable*/
(function (doc, win) {
	// 横屏和 视口拖拽触发的事件。
	const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
	const recalc = () => {
		const docEl = document.documentElement
		// 设备宽度(html的font-size为50)
		const clientWidth = window.screen.width
		if (!clientWidth) return
		docEl.style.fontSize = `${clientWidth / 750 * 100}px`
	}

	if (!doc.addEventListener) return
	win.addEventListener(resizeEvt, recalc, false)
	doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
  
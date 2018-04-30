require('normalize.css/normalize.css');
require('styles/App.scss');


import React from 'react';

// 获取图片相关的数据
var imagesDatas = require('../data/imagesData.json')
// let yeomanImage = require('../images/yeoman.png');

// 利用自执行函数，将图片名称转成图片路径信息
function genImageURL (imagesDatasArr) {
	for(var i =0,j = imagesDatasArr.length; i < j; i++) {
		var singleImageData = imagesDatasArr[i]

		singleImageData.imageURL = require('../images/' + singleImageData[i].fileName)

		imagesDatasArr[i] = singleImageData
	}
	return imagesDatasArr
}
imagesDatas = genImageURL(imagesDatas)

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec">

				</section>
				<nav className="controller-nav">

				</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

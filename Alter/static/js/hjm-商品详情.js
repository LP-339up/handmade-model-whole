// function img() {
	
// }

// 点击切换图片
function tab() {
	var index = 0
	var btn = $(".atavar-btn")
	var positionBox = $(".atavar-posi")
	var atavarLists = $(".atavar-lists")
	var imgList = positionBox.find('.liebiao-img')
	var bigimg = $(".bigg")
	positionBox.css({
		width: imgList.length * 60
	})
	active()

	function active() {
		imgList.click(function() {
			index = $(this).index()
			changeImg()

		})


		btn.last().click(function() {
			if (index < imgList.length - 1) {
				index++
			}
			console.log(index)
			changeImg()
			if ((index + 5) <= imgList.length) {
				positionBox.animate({
					left: -index * 60
				}, 300)
			}
		})
		btn.first().click(function() {
			if (index > 0) {
				index--
			}

			changeImg()
			if (index <= (imgList.length - 5)) {
				positionBox.animate({
					left: -index * 60
				}, 300)
			}
		})


		function changeImg() {
			imgList.eq(index).addClass('active')
			imgList.eq(index).siblings().removeClass('active')
			var img = imgList.eq(index).attr('src')
			bigimg.attr('src', img)
		}

	}
}
$(document).scroll(function() {
	var detai = $('#product-detail').offset().top - 40
	var sppj = $('#sppj').offset().top - 40
	var gmxz = $('#gmxz').offset().top - 40
	var scrollTop = document.documentElement.scrollTop
})

function quantity(limitation) {
	$('.add-left').click(function() {
		if ($('.input1').val() > 1) {
			var quantity = parseInt($('.input1').val()) - 1
			$('.input1').val(quantity)
		}
	})

	$('.add-right').click(function() {
		if ($('.input1').val() < limitation) {
			var quantity = parseInt($('.input1').val()) + 1
			$('.input1').val(quantity)
		} else {
			alert("超出购买限制")
		}
	})
	$('.input1').blur(function() {
		if ($('.input1').val() > limitation) {
			alert("超出购买限制")
			$('.input1').val(1)
		}
	})

}

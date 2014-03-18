$(document).ready(function() {
	

    //dof
    var holder = $('.dof .background');
    var offset = 0;
    var sizePic = 3;

    $('.dof').mousemove(function(e) {

        var y = e.pageY - this.offsetTop;
        var sHeight = holder.outerHeight();

        var y = y - sHeight * offset;
        var sHeight = sHeight - (sHeight * offset * 2);

        if (y >= sHeight)
            y = sHeight;

        var rounded = roundNum((y / sHeight) * (sizePic - 1));
        var hovered = Math.ceil(rounded);

        if (window.oldHovered != rounded) {

            holder.find('*').each(function(index) {
                
                 if (index >= hovered){
                 holder.find('.layer'+index).css('opacity',1);
                 } else {
                 holder.find('.layer'+index).css('opacity',0);
                 }

                if (!$.browser.msie) {
                    var halfOfWay = hovered + 0;
                    var backOpacity = roundNum(hovered - rounded);

                    if (halfOfWay != sizePic) {
                        holder.find('.layer' + halfOfWay).css('opacity', backOpacity);
                    }

                    var maxblur = 6;
                    var centerPos = roundNum(Math.abs(1 - (rounded / (sizePic - 1)) * 2));
                    var blurIt = roundNum(maxblur * centerPos);

                    $('.dof .text-block').attr('style', '-webkit-filter:blur(' + blurIt + 'px);-ms-filter:blur(' + blurIt + 'px);-o-filter:blur(' + blurIt + 'px);filter:blur(' + blurIt + 'px);');
                }
            });
        }
    });

});


/***** FUNCTIONS *****/

//round
function roundNum(num) { num = Math.round(num * 50) / 50; return num; }

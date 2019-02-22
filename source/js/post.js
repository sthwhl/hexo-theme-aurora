;(function(){
    /**  二次处理文章
      *  文章是由hexo的marked渲染
      *  解决 p > img 的图片显示问题
      *  使用一个img-box包装图片
      */
     function handleImg() {
      var imgs = document.querySelectorAll('#post p > img')
      for (var i=0; i<imgs.length; ++i) {
        var text = imgs[i].alt ? imgs[i].alt : ''
        // <span class="img-box"><img src="" alt="">text</span>
        var spanPaNode = document.createElement('span')
        var spanChNode = document.createElement('span')
        spanChNode.text = text
        spanPaNode.setAttribute('class', 'img-box')
        spanPaNode.appendChild(imgs[i].cloneNode(true))
        if (text) {
          spanPaNode.appendChild(spanChNode)
        }
        imgs[i].parentNode.replaceChild(spanPaNode, imgs[i])
      }
    }
    /** 二次处理文章
     *  为h2 - h6 标签添加对应的icon
     */
    function addIcon() {
      var icon = ['icon-fire','icon-gift', 'icon-pagelines', 'icon-pilcrow']
      var h1Node = document.querySelectorAll('.post-body h1')
      var h2Node = document.querySelectorAll('.post-body h2')
      var h3Node = document.querySelectorAll('.post-body h3')
      var h4Node = document.querySelectorAll('.post-body h4')
      var h5Node = document.querySelectorAll('.post-body h5')
      var h6Node = document.querySelectorAll('.post-body h6')
      for (var i=0; i < h1Node.length; ++i) {
        addIcon(h1Node[i], icon[0])
      }
      for (var i=0; i < h2Node.length; ++i) {
        addIcon(h2Node[i], icon[1])
      }
      for (var i=0; i < h3Node.length; ++i) {
        addIcon(h3Node[i], icon[2])
      }
      for (var i=0; i < h4Node.length; ++i) {
        addIcon(h4Node[i], icon[3])
      }
      for (var i=0; i < h5Node.length; ++i) {
        addIcon(h5Node[i], icon[3])
      }
      for (var i=0; i < h6Node.length; ++i) {
        addIcon(h6Node[i], icon[3])
      }
      function addIcon(node, icon) {
        var spanNode = document.createElement('span')
        spanNode.setAttribute(
          'class',
          'icon' + ' ' + icon
        )
        node.insertBefore(spanNode, node.firstChild)
      }
    }

    handleImg()
    addIcon()
})()
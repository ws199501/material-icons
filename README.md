<h3>介绍：</h3>
<div>这是基于material的项目，相对于ant而言样式上更为强大，但是使用起来也比较繁琐。</div>
<div>在使用material的过程中发现material的font icon 没有图库，（也许是我没有找到），我在node_modules里拿出来codepoints文件用python重新编辑成里json格式的data数据在这里显示所有的font icon 方便寻找想要的icon</div>
<img src="https://raw.githubusercontent.com/ws199501/material-icons/master/public/demo.jpeg" alt="效果" />
<h4>一：</h4>
安装环境，这里就不了，把需要的都yarn add来。
<h4>二：</h4>
<div>
    引入：<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    这个项目中是在public里的index.html中操作。
</div>
<div>这里我也说一下material皮肤的用法，它的demo中经常用到 color=“primary” 这样来使用颜色，这就是皮肤的使用，material的组件很复杂，又各种默认效果，各种组件套用，如果不使用color=“primary”的方式选择颜色，直接在外加style会导致各种效果，clink，hover等等都需要设置，这样工作量就会非常庞大。</div>
<img src="https://raw.githubusercontent.com/ws199501/material-icons/master/public/theme.jpeg" alt="theme" />
<div>
   以上palette里是皮肤的设置，overrides是对组件的设置初始化，这里非常鸡肋的一点就是material的组件往往存在最小宽度和最小高度最大宽度，最大高度什么的，用起来就不是那么合心意，我往往会在这里初始化一下，比如常用的Button组件。除了palette，overrides，还可以加各种自己需要的，比如我想要一个在项目里经常用到的样式，一个tag，就在createMuiTheme里写tag:{}，用的时候theme.tag就取到这个样式了。
</div>

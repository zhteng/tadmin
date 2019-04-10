<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:70:"/home/_zteng/tpadmin/public/../application/index/view/index/index.html";i:1523454023;s:60:"/home/_zteng/tpadmin/application/index/view/common/meta.html";i:1523359373;}*/ ?>
<!DOCTYPE>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh-CN"></html>
<head>
	<meta charset="utf-8">
<title><?php echo __('Home'); ?> - <?php echo __('Zteng'); ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="renderer" content="webkit">

<?php if(isset($keywords)): ?>
<meta name="keywords" content="<?php echo $keywords; ?>">
<?php endif; if(isset($description)): ?>
<meta name="description" content="<?php echo $description; ?>">
<?php endif; ?>
<meta name="author" content="FastAdmin">

<link rel="shortcut icon" href="/assets/img/favicon.ico" />
<!-- Loading Bootstrap -->
<link href="/assets/css/frontend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.css?v=<?php echo \think\Config::get('site.version'); ?>" rel="stylesheet">

<!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
<!--[if lt IE 9]>
  <script src="/assets/js/html5shiv.js"></script>
  <script src="/assets/js/respond.min.js"></script>
<![endif]-->
<script type="text/javascript">
    /*var require = {
        config: <?php echo json_encode($config); ?>
    };*/
</script>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="/assets/css/blogs/semantic.min.css">
	<link rel="stylesheet" type="text/css" href="/assets/css/blogs/main.css">
	<link rel="stylesheet" type="text/css" href="/assets/resources/css/main.min.css">
	<link rel="stylesheet" type="text/css" href="/assets/css/blogs/csshake.min.css">

	<style>
		.clock {
			width: 240px;
			height: 70px;
			transform: translate(0%, 200%);
			color: #d96457;
			font-family: "Lato", sans-serif;
			margin-left: 15px;
		}

		.clock div {
			position: relative;
			float: left;
			background: #ffe8e8;
			border-radius: 6px;
			width: 70px;
			height: 70px;
			line-height: 70px;
			text-align: center;
			font-size: 50px;
			margin: 5px 5px;
			font-family: "Lato"
		}
	</style>
</head>

<body>
<div class="parent">
	<div class="ui card box-shadow" style="height: 490px; width: 290px; max-width : 100%; margin-left: 0px;">
		<div class="blurring dimmable image">
			<div class="ui dimmer">
				<div class="content">
					<div class="center">
						<a href="/index/blogs" class="ui inverted button">Blog</a>
					</div>
				</div>
			</div>
			<img src="/assets/img/blogs/me1.jpg"/>
		</div>
		<div class="content">
			<a class="header">Teng Zhang</a>
			<div class="meta">
				<span class="date">PHP Engineer</span>
			</div>
			<div class="description">
				<p><a href="http://love.zhteng.cn/z" target="_blank"/><i class="Heart icon red"></i></a>PHP, MySQL, HTML
					Programming</p>
				<p><a href="http://love.zhteng.cn/h" target="_blank"/><i class="Heart icon red"></i></a>
					也许是程序员中最不会写代码热爱篮球的入门级段子手</p>
			</div>
		</div>
		<!--<div class="extra content center aligned">
			<a href="mailto:991185634@qq.com">
				<i class="Mail icon"></i>
			</a>
			<a href="/">
				<i class="File Pdf Outline icon"></i>
			</a>
			<a href="/">
				<i class="Facebook icon"></i>
			</a>
			<a href="/">
				<i class="Github Square icon"></i>
			</a>
			<a href="/">
				<i class="Linkedin Square icon"></i>
			</a>
		</div>-->
	</div>

	<article class="ui card box-shadow" style="margin-left: 20px; margin-top: 0px; height: 490px;">
		<div class='jAudio--player'>
			<audio></audio>
			<div class='jAudio--ui'>
				<div class='jAudio--thumb'></div>
				<div class='jAudio--status-bar'>
					<div class='jAudio--details'></div>
					<div class='jAudio--volume-bar'></div>
					<div class='jAudio--progress-bar'>
						<div class='jAudio--progress-bar-wrapper'>
							<div class='jAudio--progress-bar-played'>
								<span class='jAudio--progress-bar-pointer'></span>
							</div>
						</div>
					</div>
					<div class='jAudio--time'>
						<span class='jAudio--time-elapsed'>00:00</span>
						<span class='jAudio--time-total'>00:00</span>
					</div>
				</div>
			</div>

			<div class='jAudio--playlist'>
			</div>

			<div class='jAudio--controls'>
				<ul>
					<li>
						<button class='btn' data-action='prev' id='btn-prev'><span></span></button>
					</li>
					<li>
						<button class='btn' data-action='play' id='btn-play'><span></span></button>
					</li>
					<li>
						<button class='btn' data-action='next' id='btn-next'><span></span></button>
					</li>
				</ul>
			</div>
		</div>
	</article>

	<div class='clock'>
		<div class='h shake shake-slow'></div>
		<div class='m shake shake-slow'></div>
		<div class='s shake shake-slow'></div>
	</div>
</div>
<script src="/assets/js/blogs/jquery.min.js"></script>
<script src="/assets/js/blogs/semantic.min.js"></script>
<script src='/assets/resources/js/jaudio.js'></script>
<script src="/assets/js/blogs/time.js"></script>
<script>
    $(function () {
        $('.card .image').dimmer({
            on: 'hover'
        });
    });
</script>
</body>

</html>
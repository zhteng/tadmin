<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:70:"/home/_zteng/tpadmin/public/../application/index/view/blogs/lists.html";i:1523610346;s:60:"/home/_zteng/tpadmin/application/index/view/common/meta.html";i:1523359373;s:60:"/home/_zteng/tpadmin/application/index/view/common/foot.html";i:1523423317;}*/ ?>
<!DOCTYPE html>
<!--[if lte IE 8 ]>
<html class="ie" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US">
<![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh-CN" class="js flexbox flexboxlegacy canvas canvastext no-touch indexeddb hashchange history draganddrop rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage applicationcache sb-init" lang="zh-CN"><!--<![endif]-->
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
	<!-- Meta data -->
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="ZTENG">
	<meta name="keywords" content="ZTENG">

	<link rel="stylesheet" href="/assets/css/blogs/bmain.css" media="screen" type="text/css">
	<link rel="stylesheet" href="/assets/css/blogs/default.css" type="text/css">
	<script src="/assets/js/blogs/jquery-1.js"></script>

	<style>.col-md-8.col-md-offset-2.opening-statement img {
		display: none;
	}</style>

<body id="index" class="lightnav animsition" style="animation-duration: 0.9s; opacity: 1;">
<div class="sb-slidebar sb-right sb-style-overlay sb-momentum-scrolling" style="margin-right: -304px;">
	<div class="sb-close" aria-label="Close Menu" aria-hidden="true">
		<img src="/assets/img/blogs/close.png" alt="Close">
	</div>

	<ul class="sb-menu">
		<li><a href="/" class="animsition-link" title="Home">Home</a></li>
		<li><a href="/archives" class="animsition-link" title="archive">archives</a></li>
		<li>
			<a class="sb-toggle-submenu">Works<span class="sb-caret"></span></a>
			<ul class="sb-submenu">
				<li><a href="/" target="_BLANK" class="animsition-link">TKL (Hexo Theme)</a></li>
				<li><a href="/" target="_BLANK" class="animsition-link">Wooyun Drops</a></li>
			</ul>
		</li>
		<li>
			<a class="sb-toggle-submenu">Categories<span class="sb-caret"></span></a>
			<ul class="sb-submenu">
				<li><a href="/" class="animsition-link">C/Cpp
					<small>(2)</small>
				</a></li>
				<li><a href="/" class="animsition-link">CSS3
					<small>(1)</small>
				</a></li>
			</ul>
		</li>
		<li>
			<a class="sb-toggle-submenu">Links<span class="sb-caret"></span></a>
			<ul class="sb-submenu">
				<li><a href="/" class="animsition-link">Feddy</a></li>
				<li><a href="/" class="animsition-link">FireFire</a></li>
			</ul>
		</li>
	</ul>
	<!-- Lists in Slidebars -->
	<ul class="sb-menu secondary">
		<li><a href="/about.html" class="animsition-link" title="about">About</a></li>
		<li><a href="/atom.xml" class="animsition-link" title="rss">RSS</a></li>
	</ul>
</div>

<div id="sb-site" style="min-height: 728px;">
	<div id="navigation" class="navbar navbar-fixed-top" style="top: 0px;">
		<div class="navbar-inner">
			<div class="container">
				<div class="logo">
					<a href="/" title="Logo" class="animsition-link">
						<img src="/assets/img/blogs/logo.png" alt="Logo" width="35px;">
					</a>
				</div>

				<nav>
					<ul class="nav">
						<li><a href="/" class="animsition-link">ZTENG BLOG</a></li>
						<li class="nolink"><span>Always </span>Creative.</li>
						<li class="nolink"><span>Welcome!</span></li>
					</ul>
				</nav>
			</div>

			<div class="learnmore sb-toggle-right">More</div>
			<button type="button" class="navbar-toggle menu-icon sb-toggle-right" title="More">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar before"></span>
				<span class="icon-bar main"></span>
				<span class="icon-bar after"></span>
			</button>
		</div>
	</div>

	<!-- ============================ Header & Logo bar =========================== -->
	<section id="intro">
		<div class="container">
			<div class="row col-md-offset-2">
				<div class="col-md-8">
					<span class="post-meta"><time datetime="2016-04-05T15:49:39.000Z" itemprop="datePublished"><?php echo date("Y-m-d",$list[0]['createtime']); ?></time>|<?php echo $list[0]['keywords']; ?></span>
					<h1><?php echo $list[0]['title']; ?></h1>

				</div>
			</div>
			<div class="col-md-8 col-md-offset-2">
				<p><?php echo $list[0]['content']; ?></p>
				<div class="clearfix"></div>
				<hr class="nogutter">
			</div>

			<nav class="m-pagination col-md-8 col-md-offset-2 col-sm-24" role="pagination">
				<?php
					if (!empty($pn['prev'])) {
				?>
				<a class="pull-left" href="/index/blogs/lists/ids/<?php echo $pn['prev']['id']; ?>" style="float: left;">
					← <?php echo (mb_substr($pn['prev']['title'],0,25,'utf-8' ) ?:  ''); ?>
				</a>
				<?php } 
					if (!empty($pn['next'])) {
				?>
				<a class="pull-right" href="/index/blogs/lists/ids/<?php echo $pn['next']['id']; ?>" style="float: left;">
					<?php echo (mb_substr($pn['next']['title'],0,25,'utf-8' ) ?:  ''); ?> →
				</a>
				<?php } ?>
			</nav>
		</div>
	</section>

	<section id="statement">
	<div class="container text-center wow fadeInUp" data-wow-delay="0.5s"
		 style="visibility: hidden; animation-delay: 0.5s; animation-name: none;">
		<p>✎﹏ 若如初相见，若如初相恋 ღ</p>
	</div>
</section>
<!-- ============================ Footer =========================== -->
<footer>
	<div class="container">
		<div class="copy">
			<p>©
				<script>new Date().getFullYear() > 2010 && document.write("" + new Date().getFullYear());</script>
				- 2018, Content By Zteng. All Rights Reserved.
			</p>
			<p>Theme By <a href="/" style="color: #767D84">Zteng</a></p>
		</div>
		<div class="social">
			<ul>
				<li><a href="/" title="Sina-Weibo" target="_blank"><i
						class="icon-sina-weibo"></i></a>&nbsp;
				</li>
			</ul>
		</div>
		<div class="clearfix"></div>
	</div>
</footer>

	<!-- Load our scripts -->
	<!-- Resizable 'on-demand' full-height hero -->
	<script type="text/javascript">
        var resizeHero = function () {
            var hero = $(".cover,.heightblock"),
                window1 = $(window);
            hero.css({
                "height": window1.height()
            });
        };
        resizeHero();
        $(window).resize(function () {
            resizeHero();
        });
	</script>
	<script src="/assets/js/blogs/plugins.js"></script>
	<!-- Bootstrap core and concatenated plugins always load here -->
	<script src="/assets/js/blogs/scripts.js"></script><!-- Theme scripts -->
	<link rel="stylesheet" href="/assets/css/blogs/jquery.css" media="screen" type="text/css">
	<script src="/assets/js/blogs/jquery.js"></script>
	<script type="text/javascript">
        $('#intro').find('img').each(function () {
            var alt = this.alt;

            if (alt) {
                $(this).after('<span class="caption" style="display:none">' + alt + '</span>');
            }

            $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox" rel="gallery" />');
        });
        (function ($) {
            $('.fancybox').fancybox();
        })(jQuery);
	</script>
</div>
</body>
</html>
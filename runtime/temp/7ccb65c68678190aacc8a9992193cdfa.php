<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:70:"/home/_zteng/tpadmin/public/../application/index/view/blogs/index.html";i:1523609458;s:60:"/home/_zteng/tpadmin/application/index/view/common/meta.html";i:1523359373;s:60:"/home/_zteng/tpadmin/application/index/view/common/foot.html";i:1523423317;}*/ ?>
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
	<meta name="generator" content="ZTENG BLOG">
	<meta name="author" content="ZTENG">
	<meta name="description" content="Always Creative.">
	<meta name="keywords" content="ZTENG,BLOG">

	<link rel="Shortcut Icon" href="/assets/img/favicon.ico" type="image/ico">
	<link rel="alternate" href="/atom.xml" title="ZTENG BLOG" type="application/atom+xml">
	<link rel="stylesheet" href="/assets/css/blogs/bmain.css" media="screen" type="text/css">
	<link rel="stylesheet" href="/assets/css/blogs/default.css" type="text/css">

	<script src="/assets/js/blogs/jquery-1.js"></script>
	<script>window.jQuery || document.write('<script src="/assets/js/blogs/jquery-1.11.1.min.js"><\/script>')</script>
	<link rel="alternate" type="application/atom+xml" title="Atom 0.3" href="/atom.xml">
	<style>
		.col-md-8.col-md-offset-2.opening-statement img {
			display: none;
		}
	</style>

</head>

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

	<section id="hero" class="scrollme">
		<div class="container-fluid element-img" style="background: url('/assets/img/blogs/bg1.png') no-repeat center center fixed;background-size: cover; background-position: 0 0;">
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 vertical-align cover boost text-center"
					 style="height: 728px;">
					<div class="center-me animateme" data-when="exit" data-from="0" data-to="0.6" data-opacity="0"
						 data-translatey="100">
						<div>
							<h2></h2>
							<p></p>
							<h2></h2>
							<p></p>
						</div>
					</div>
				</div>
				<!-- // .col-md-12 -->
			</div>
			<div class="herofade beige-dk" style="opacity: 0;"></div>
		</div>
	</section>

	<div class="heightblock" style="height: 728px;"></div>

	<section id="intro">
		<div class="container">
			<div class="row">
				<?php foreach($row['rows'] as $vo): ?>
				<div class="col-md-8 col-md-offset-2 opening-statement">
					<div class="col-md-4">
						<h3><a href="/index/blogs/lists/ids/<?php echo $vo['id']; ?>" target="_blank"><?php echo $vo['title']; ?></a></h3>
						<span>
                            <span class="post-meta">
                                <time datetime="2018-01-06T06:00:07.000Z" itemprop="datePublished"><?php echo date("Y-m-d",$vo['createtime']); ?></time>|
                                <?php echo $vo['keywords']; ?>
                            </span>
                        </span>
					</div>
					<div class="col-md-8">
						<p><?php echo mb_substr($vo['content'],0,300,'utf-8'); ?><p>
						<p class="pull-right readMore">
							<a href="/index/blogs/lists/ids/<?php echo $vo['id']; ?>" target="_blank">Read More...</a>
						</p>
					</div>
					<div class="clearfix"></div>
					<hr class="nogutter">
				</div>
				<?php endforeach; ?>
			</div>

			<aside id="sidebar" >
				<div class="widget-wrap">
					<div id="profile" class="widget">
						<div class="base-info">
							<a href="https://weibo.com/534072785"><img id="avatar" src="/assets/img/blogs/avatar.png"></a>
							<h2 id="name">ZTENG</h2>
							<h3 id="title">Developer</h3>
						</div>
						<div class="article-info">
							<div class="article-info-block">
								<?php echo $row['total']; ?>
								<span>文章</span>
							</div>
							<div class="article-info-block">
								0
								<span>标签</span>
							</div>
						</div>

						<div class="social-links">
							<table>
								<tbody>
								<tr>
									<td>
										<a href="http://github.com/tracy-e" target="_blank" title="github" class="tooltip">
											<i class="fa fa-github"></i>
										</a>
									</td>
									<td>
										<a href="https://twitter.com/tracyyih" target="_blank" title="twitter" class="tooltip">
											<i class="fa fa-twitter"></i>
										</a>
									</td>
									<td>
										<a href="http://weibo.com/534072785" target="_blank" title="weibo" class="tooltip">
											<i class="fa fa-weibo"></i>
										</a>
									</td>
									<td>
										<a href="http://esoftmobile.com/atom.xml" target="_blank" title="rss" class="tooltip">
											<i class="fa fa-rss"></i>
										</a>
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div class="widget-wrap">
					<h3 class="widget-title">最新文章</h3>
					<div class="widget">
						<ul id="recent-post" class="">
							<?php foreach($row['nrows'] as $nvo): ?>
							<li>
								<div class="item-thumbnail">
									<a href="/index/blogs/lists/ids/<?php echo $vo['id']; ?>" class="thumbnail" target="_blank">
										<!--<span class="thumbnail-image thumbnail-none"></span>-->
										<img src="<?php echo $nvo['image']; ?>" />
									</a>
								</div>

								<div class="item-inner">
									<p class="item-category"></p>
									<p class="item-title"><a href="/index/blogs/lists/ids/<?php echo $vo['id']; ?>" class="title"><?php echo mb_substr($nvo['title'],0,10,'utf-8'); ?></a></p>
									<p class="item-date">
										<time datetime="" itemprop="datePublished"><?php echo date("Y-m-d",$nvo['createtime']); ?></time>
									</p>
								</div>
							</li>
							<?php endforeach; ?>
						</ul>
					</div>
				</div>

				<div class="widget-wrap">
					<h3 class="widget-title">标签云</h3>
					<div class="widget tagcloud">
						<a href="/" style="font-size: 11.43px;">Effective Objective-C</a>
						<a href="/" style="font-size: 10px;">正则表达式</a>
					</div>
				</div>
			</aside>

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

	<!-- ============================ END Footer =========================== -->
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
	<script src="/assets/js/blogs/plugins.js"></script><!-- Bootstrap core and concatenated plugins always load here -->
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

	<!-- Initiate flexslider plugin -->
	<script type="text/javascript">
	</script>
</div>
</body>
</html>

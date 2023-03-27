# kwon
Front-end PORTFOLIO

1. 보내기 받기가 기본
2. 보내고 받을 때 개인/비밀 정보들은 암호화(2중으로 할 것), 키값 숨기기
3. 두개의 서버로 http 통신 해보기
4. 두개의 서버로 https 통신 해보기


<!DOCTYPE html>
<html lang="ko">
<head>
	<title>여행이지</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no, user-scalable=no">
	<link rel="shortcut icon" href="">
	<!-- <link rel="stylesheet" href="http://project.finenuts.co.kr/2022/krt/css/page.css" type="text/css"> -->
	<script type="text/javascript" src="http://project.finenuts.co.kr/2022/krt/js/jquery.1.11.0.min.js"></script>
	<script type="text/javascript" src="http://project.finenuts.co.kr/2022/krt/js/jquery.mCustomScrollbar.min.js"></script>
	<script type="text/javascript" src="http://project.finenuts.co.kr/2022/krt/js/common.js"></script>
	<script type="text/javascript" src="http://project.finenuts.co.kr/2022/krt/js/jquery.modal.js"></script>
	<script type="text/javascript" src="http://project.finenuts.co.kr/2022/krt/js/jquery.select.js"></script>
</head>
<body>
<style>
	.blind{font-size:0;line-height:0;height:0;width:0;overflow:hidden;text-indent:-9999px}
	.pc-blind{display:none !important}html,body{height:100%}body{position:relative;background-color:#fff;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:none;-moz-osx-font-smoothing:grayscale;color:#1c1c1c}body:before{position:fixed;left:0;top:0;width:100%;height:0;content:''}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,form,fieldset,p,button,iframe,th,td,a,select,input,textarea{margin:0;padding:0;font-family:'NotoSansCJKkr',Helvetica,sans-serif;font-weight:400;line-height:1.4;font-size:14px;letter-spacing:-.42px;box-sizing:border-box}article,aside,details,figcaption,figure,footer,header,nav,section,summary,main{display:block;margin:0;padding:0}img,fieldset,iframe,button{border:0}section{box-sizing:border-box}li{list-style:none}button{font-family:'NotoSansCJKkr';color:#1c1c1c;background:#fff;outline:none;cursor:pointer}table{border-collapse:collapse;border-spacing:0}legend,caption,hr{display:none}
	select,input,textarea{font-family:'NotoSansCJKkr';color:#1c1c1c;border-radius:0;border:0;-webkit-appearance:none;outline:none}i,em,u,cite{font-style:normal}s{text-decoration-line:none}strong{font-weight:700}img{border:0;vertical-align:middle}a{color:#1c1c1c;text-decoration:none;outline-offset:-1px;-webkit-tap-highlight-color:rgba(0,0,0,0)}address{font-style:normal}textarea{overflow-y:auto;resize:none;display:block}input::-webkit-input-placeholder{color:#ccc !important}input:-ms-input-placeholder{color:#ccc !important}*{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif !important}body,.wrap{min-width:1266px;width:100%}
	.wrap.mo{min-width:unset}body.mo{min-width:unset}
	.cont-header .sub-title.center{text-align:center}
	.cont-header .sub-title.main{display:none}
	.cont-header .sub-tit .func_r,.cont-header [class*=btn-]{font-size:0;line-height:0;display:block;width:60px;height:55px;text-indent:-9999px}
	.cont-header .btn-cont-prev{position:absolute;left:0;top:0;background:url('http://project.finenuts.co.kr/2022/krt/images/icon_arrow_prev.svg') 50% 50%/29px no-repeat}
	.cont-header .btn-cont-prev{display:none}
	.header{padding:0 50px;width:auto;z-index:10;position:relative;transition:all .3s ease-out}body,.wrap{min-width:1266px;width:100%}
	.wrap.mo{min-width:unset}body.mo{min-width:unset}
	.header{width:100%;height:100px;border-bottom:1px solid #e5e5e5;display:flex;align-items:center;justify-content:center;box-sizing:border-box}
	.wrap.main .header{border-color:rgba(255,255,255,.2)}
	.header .inner{display:flex;justify-content:space-between;width:100%;height:100px;position:relative}
	.contents{margin:0 auto;padding:70px 0 110px;min-height:400px;box-sizing:border-box}
	.title-5{font-size:30px;line-height:1.27;font-weight:700;letter-spacing:-1.5px}
	.msg-error{font-size:14px;margin-top:8px;color:#e43d30}
	.msg-success{font-size:14px;margin-top:8px;color:#006f80}
	.msg-txt{font-size:14px;margin-top:8px;color:#999}[class*=msg-]+[class*=msg-]{margin-top:6px}
	.inp-base{width:100%;font-size:15px;font-weight:400;line-height:20px;outline:none;border:1px solid #e5e5e5;border-radius:2px;padding:12px 20px;min-height:50px}
	.inp-base:hover,.inp-base:focus,.inp-base.selected{padding:11px 19px;border:2px solid #1c1c1c}
	.inp-base[readonly],.inp-base[disabled]{padding:12px 20px;background:#f7f7f7;border:1px solid #e5e5e5}
	.inp-base[disabled]{color:#ccc}
	.inp-base.success,.inp-base.error{background-position:calc(100% - 15px) 50%;background-repeat:no-repeat;background-size:20px auto}
	.inp-base.success:hover,.inp-base.success:focus,.inp-base.success.selected{background-position:calc(100% - 14px) 50%}
	.inp-base.success{background-image:url('http://project.finenuts.co.kr/2022/krt/images/icon_success.svg')}
	.inp-base.error{padding:13px 19px;border:2px solid #e53e30}
	.inp-base[type=text].error,.inp-base[type=password].error{padding-right:35px;background-image:url('http://project.finenuts.co.kr/2022/krt/images/icon_error.svg')}
	.form-wrap{max-width:640px;margin:0 auto;color:#1c1c1c;padding-top:65px}
	.form-wrap.mg-none{padding-top:0}
	.form-wrap.full{max-width:100%}
	.form-wrap .form-inp{padding-top:20px}
	.form-wrap .form-inp dl+dl,.form-wrap .form-inp dd+dd{margin-top:10px}
	.form-wrap [class*=tab-]+.form-box{padding-top:40px}
	.form-wrap .form-box+.form-box{padding-top:40px}
	.cont-header .sub-title{background:#fff;padding:0 60px;height:55px;display:flex;align-items:center;justify-content:center;position:relative;z-index:9}
	.cont-header .sub-title .func_r{position:absolute;right:0;top:0;width:auto;height:55px;padding-right:20px;display:flex;align-items:center}
	.cont-header .sub-title .func_r>*+*{margin-left:10px}
	.cont-header .sub-title.main,.cont-header .sub-title.pc-blind{display:flex !important}
	.cont-header [class*=title-]{font-size:18px;font-weight:400;line-height:1.2;letter-spacing:-.54px}
	.cont-header .btn-d-home,.cont-header .btn-d-share{width:30px;height:30px}
	.cont-header .btn-d-home{background:url('http://project.finenuts.co.kr/2022/krt/images/icon_home.svg') 50% 64%/17px auto no-repeat}
	.cont-header .btn-d-share{background:url('http://project.finenuts.co.kr/2022/krt/images/icon_share.svg') 50% 50%/18px auto no-repeat}
	.cont-header [class*=txt-]{display:none}
	.cont-body{padding:40px 20px 50px;overflow:hidden}
	.cont-header.fix .cont-body.my-page{padding-top:170px}
	.cont-body.mo{padding-bottom:100px}
	.inp-check,.inp-radio{position:relative;display:inline-block;vertical-align:top}
	.inp-check.none>.label,.inp-radio.none>.label{min-width:22px;min-height:22px;padding:0}
	.inp-check.none>.label:before,.inp-radio.none>.label:before{margin-right:0 !important}
	.inp-check+.inp-check,.inp-radio+.inp-radio{margin-left:20px}
	.inp-check>input,.inp-radio>input{position:absolute;left:-999999px;width:0;height:0;opacity:.0001%}
	.inp-check>.label,.inp-radio>.label{position:relative;font-size:15px;font-weight:400;letter-spacing:-.45px;display:flex;line-height:22px}
	.inp-check>.label:before,.inp-radio>.label:before{content:'';width:22px;height:22px;margin-right:10px;display:inline-block;vertical-align:middle;box-sizing:border-box}
	.inp-check>input:disabled+.label,.inp-radio>input:disabled+.label{pointer-events:none}
	.inp-check>.label:before{border:1px solid #ccc;border-radius:2px;background:#fff url('http://project.finenuts.co.kr/2022/krt/images/icon_check_01_off.svg') 55% 50%/14px 14px no-repeat}
	.inp-check>.label:hover:before{border-color:#1c1c1c;background-image:url('http://project.finenuts.co.kr/2022/krt/images/icon_check_01_hover.svg')}
	.inp-check>input:checked+.label:before{background-color:#1c1c1c;background-image:url('http://project.finenuts.co.kr/2022/krt/images/icon_check_01_select.svg');border-color:#1c1c1c;transition:background-color .25s cubic-bezier(0,.0,.2,1)}
	.inp-check>input:disabled+.label:before{background-color:#f7f7f7;background-image:url('http://project.finenuts.co.kr/2022/krt/images/icon_check_01_disable.svg');border-color:#e5e5e5}
	.inp-check>input.checked+.label:before{background-color:#1c1c1c;background-image:url('http://project.finenuts.co.kr/2022/krt/images/icon_check_01_select.svg');border-color:#1c1c1c;transition:background-color .25s cubic-bezier(0,.0,.2,1)}
	.inp-check.error .label:before{background-color:#fff !important;background-image:url('http://project.finenuts.co.kr/2022/krt/images/icon_check_01_incorrect.svg') !important;border-color:#e53e30 !important}[class*=btn-type-]{width:100%;display:flex;align-items:center;justify-content:center;vertical-align:middle;text-align:center;padding:10px 30px;font-weight:500;font-size:15px;line-height:1.2;border-radius:2px;text-decoration:none;box-sizing:border-box;letter-spacing:-.6px;min-height:50px;background:#fff}[class*=btn-type-]:hover,[class*=btn-type-]:focus{border-color:#666}[class*=btn-type-].color--black{background:#1c1c1c !important;border:0 !important;color:#fff !important}[class*=btn-type-].color--black:hover{background-color:#2c2c2c !important}
	[class*=btn-type-].color--red{background:#e43d30 !important;border:0 !important;color:#fff !important}[class*=btn-type-]:disabled,[class*=btn-type-].disabled{opacity:.4;pointer-events:none}
	.login .tab-nav{padding:0 0 10px}
	.login .reserve-box{padding:12px 0 20px}
	.login .form-btns{margin-top:17px}
	.login .form-btns .btn-login{margin-top:48px}
	.login .form-btns .btn-login+.btn-login{margin-top:15px}
	.login .btn-reserve{margin-top:40px}
	.login .sns-login{margin-top:40px}
	.login .sign-up{margin-left:25px;font-weight:700}
	.login .sign-up:before{display:none}
	.login .find-id dl{margin-top:20px}
	.login .certified .panel-box{margin-top:40px}
	.login .certified .panel{position:relative;display:flex;align-items:center;flex-direction:column;flex:1;padding-top:5px}
	.login .certified .panel:before{content:'';display:inline-block;width:65px;height:53px;background-size:100% auto;background-position:50% 50%;background-repeat:no-repeat}
	.login .certified .phone:before{background-image:url('http://project.finenuts.co.kr/2022/krt/images/icon_phone_02.svg')}
	.login .certified .member:before{background-image:url('http://project.finenuts.co.kr/2022/krt/images/icon_member.svg')}
	.login .certified .panel:nth-child(1){border-right:1px solid #ccc}
	.login .certified .panel-box.pw .panel:nth-child(1){border-right:0}
	.login .certified .panel span{font-size:16px;line-height:1.47;letter-spacing:-.75px;color:#000;margin-top:20px}
	.login .etc-txt{margin-top:55px}
	.login .bg-box{margin-top:80px}
	.sns-login .btn-sns-login{display:flex;flex-direction:column;align-items:center;text-align:center}
	.sns-login .btn-sns-login:before{content:'';width:56px;height:56px;display:inline-block;background-size:100% auto;background-repeat:no-repeat;background-position:50% 50%}
	.sns-login .btn-sns-login.naver:before{background-image:url('http://project.finenuts.co.kr/2022/krt/images/icon_login_naver.svg')}
	.sns-login .btn-sns-login.kakao:before{background-image:url('http://project.finenuts.co.kr/2022/krt/images/icon_login_kakao.svg')}
	.sns-login .btn-sns-login.apple:before{background-image:url('http://project.finenuts.co.kr/2022/krt/images/icon_login_apple.svg')}
	.sns-login .btn-sns-login em{font-size:15px;font-weight:500;margin-top:10px;letter-spacing:-.6px}
	.list_inline{display:flex;align-items:center}
	.list_inline>*{font-size:15px;color:#000;letter-spacing:-.45px}
	.list_inline>*+*:before{content:'';width:3px;height:3px;display:inline-block;vertical-align:middle;background:url('http://project.finenuts.co.kr/2022/krt/images/icon_dot.svg') 50% 50%/3px no-repeat;margin:0 10px}
	.panel-box{display:flex;align-items:center;justify-content:space-between}
	.panel-box.default{justify-content:start}
	.panel-box.center{justify-content:center}
	.panel-box.column{flex-direction:column;justify-content:center}
	.sns-login .btn-sns-login+.btn-sns-login{margin-left:25px}
	.footer{width:auto;margin-left:220px;justify-content:flex-start;align-items:flex-start;flex-direction:column;height:300px;margin-top:74px;position:relative}
	@media (max-width: 480px) {
		:root {--vh: 100%;}
		html,body,.wrap {min-width:100%; height: calc(var(--vh, 1vh) * 100);}
		.wrap .header.d-hide{height:0;overflow:hidden}
		.contents{width:100%;padding:0}
		.footer{min-width:100%}
		.footer{height:auto;margin-left:0;padding-bottom:105px;border-top:1px solid #1c1c1c}
		.footer.f-space{padding-bottom:90px}
		.cont-body.login{padding-top:30px}
		.form-wrap{padding-top:0}
		.form-wrap [class*=tab-]+.form-box{padding-top:28px}
		.form-box .title-6{font-size:18px;font-weight:700}
		.toast-msg .msg{font-size:14px;min-width:calc(100% - 40px);min-height:60px;margin:0 20px;border-radius:6px}
		.login .tab-nav{padding:0}
		.login .form-btns{position:relative;padding-bottom:45px}
		.login .list_inline{position:absolute;left:0;bottom:0;width:100%;justify-content:center}
		.login .list_inline>*{font-size:13px;color:#000;letter-spacing:-.85px}
		.login .list_inline>*+*:before{content:'';width:1px;height:10px;display:inline-block;vertical-align:middle;background:#ccc;margin:0 16px}
		.login .form-btns .btn-login{margin-top:20px}
		.login .sign-up{margin:0}
		.login .sns-login{margin-top:30px}
		.login .sns-login em{width:0;height:0;font-size:0;line-height:0;text-indent:-9999px}
		.sns-login .btn-sns-login:before{width:50px;height:50px}
		.cont-header{background:#fff}
		.form-wrap{padding-top:0}
		.cont-body.login{padding-top:30px}
		.cont-body{padding:40px 20px 50px;overflow:hidden}
		.cont-header [class*=txt-]{display:none}
		.cont-header.fix .cont-body.my-page{padding-top:170px}
		.cont-body.mo{padding-bottom:100px}
	}
</style>

<div class="wrap">
	<header class="header">GNG</header>
	<main class="contents">
		<div class="cont-header">
			<div class="sub-title center">
				<h2 class="title-5">로그인</h2>
				<button class="btn-cont-prev">이전</button>
			</div>
		</div><!-- //cont-header -->
		<div class="cont-body login">
			<div class="form-wrap">
				<form>
					<div class="form-inp">
						<dl>
							<dt class="blind">아이디</dt>
							<dd><input type="text" class="inp-base" placeholder="아이디를 입력하세요"></dd>
							<dd>
								<input type="text" class="inp-base error" placeholder="아이디를 입력하세요" value="가">
								<p class="msg-error">아이디를 입력하세요.</p>
							</dd>
						</dl>
						<dl>
							<dt class="blind">비밀번호</dt>
							<dd><input type="password" class="inp-base" placeholder="비밀번호를 입력하세요"></dd>
							<dd>
								<input type="password" class="inp-base error" placeholder="비밀번호를 입력하세요" value="가">
								<p class="msg-error">비밀번호를 입력하세요.</p>
							</dd>
						</dl>
					</div><!-- // form-inp -->
					<div class="form-btns">
						<div class="panel-box">
							<div><!-- 20220317 자동 로그인 추가 -->
								<label class="inp-check" for="obj_check11">
									<input type="checkbox" id="obj_check11">
									<span class="label">자동 로그인</span>
								</label>
								<label class="inp-check" for="obj_check12">
									<input type="checkbox" id="obj_check12">
									<span class="label">아이디 저장</span>
								</label>
							</div><!-- //20220317 자동 로그인 추가 -->
							<div class="list_inline">
								<a href="#">아이디 찾기</a>
								<a href="#">비밀번호 찾기</a>
								<a href="#" class="sign-up">회원가입</a>
							</div>
						</div>
						<button class="btn-type-1 btn-login color--black">로그인</button>
					</div><!--// form-btns -->
				</form>

				<div class="panel-box center sns-login">
					<a href="#" class="btn-sns-login naver"><em>네이버 로그인</em></a>
					<a href="#" class="btn-sns-login kakao"><em>카카오 로그인</em></a>
					<a href="#" class="btn-sns-login apple"><em>애플 로그인</em></a>
				</div><!-- sns-login-->

			</div><!-- //form-wrap -->
		</div>
	</main>
	<footer class="footer">Footer</footer>
</div>

</body>
</html>

<template>
	<div class="resume">
		<div class="banner">
			<div class="lastname">Davis</div>
			<div class="firstname">Tai</div>
			<p>Front End Engineer</p>
		</div>
		<div class="left-side">
			<div class="avatar">
				<img src="@/assets/img/myavatar.jpg" alt="davis tai avatar" />
			</div>
			<div class="contact">
				<h3>CONTACT</h3>
				<ul>
					<li><i class="fas fa-phone"></i><span>0928-427-552</span></li>
					<li><i class="fas fa-envelope"></i><span>taichiayin@livemail.tw</span></li>
					<li><i class="fas fa-home"></i><span>New Taipei City</span></li>
					<li><i class="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/tai-chiaying-8106b3145/">Tai ChiaYing</a></li>
					<li><i class="fab fa-github-square"></i><a href="https://github.com/taichiayin/myfirstrep.git">myCV</a></li>
				</ul>
			</div>
			<div class="aboutme">
				<h3>ABOUT ME</h3>
				<p>Accountability, Logicality, Teamwork, Good communication and coordination capabilities</p>
			</div>
		</div>
		<div class="right-side">
			<div class="detail-container">
				<div class="detail-left">
					<h3>WORK EXPERIENCE</h3>
					<div class="workexp">
						<div class="item first">
							<div class="years">2013</div>
							<div class="job">
								<div class="jobtitle">Dimerco Data System Corp / System Analyst, RD</div>
								<div class="jobcontext">
									<ul>
										<li>- Data structure analyst</li>
										<li>- System ananlyst, data interchange with banking EAI、MainFrame by Socket and Message Queue</li>
										<li>- Established real estate values trust service in Bank, BOT、CHB、UB etc...</li>
										<li>- Established realtime response message service</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="item secpnd">
							<div class="years">2017</div>
							<div class="job">
								<div class="jobtitle">Lanner Electronics Inc. / Senior Software Engineer, IT</div>
								<div class="jobcontext">
									<ul>
										<li>- Developed internal system (BPM, Business Process Management), integration with SAP(ERP/HR ) system</li>
										<li>- Established RMA system</li>
										<li>- B2B Solution by WebMethod</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="item third">
							<div class="years">2018</div>
							<div class="job">
								<div class="jobtitle">Tymphany Corporation / Senior Software Engineer, IT</div>
								<div class="jobcontext">
									<ul>
										<li>- Developed internal system (BPM, Business Process Management)</li>
										<li>- Integration ERP/HRM inforecord from SAP</li>
										<li>- Make convenient business process MRO</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="item forth">
							<div class="years">Present</div>
							<div class="job">
								<div class="jobtitle">Solar Tech Inc. / Front End Engineer, RD</div>
								<div class="jobcontext">
									<ul>
										<li>- Stream video</li>
										<li>- Chat room</li>
										<li>- IM</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="education">
					<h3>EDUCATION</h3>
					<p>Tamkang University | Bachelor's degree</p>
					<p>Computer Science and Information Engineering，CSIE</p>
				</div>
				<div class="skills">
					<h3>Skills</h3>
					<div class="skills-wrap">
						<div class="skill-item html">
							<div class="circle"></div>
							<div class="mask-circle">
								<div class="skillname">HTML</div>
							</div>
						</div>
						<div class="skill-item css">
							<div class="circle"></div>
							<div class="mask-circle">
								<div class="skillname">CSS</div>
							</div>
						</div>
						<div class="skill-item js">
							<div class="circle"></div>
							<div class="mask-circle">
								<div class="skillname">JS</div>
							</div>
						</div>
						<div class="skill-item vue">
							<div class="circle"></div>
							<div class="mask-circle">
								<div class="skillname">VueJS</div>
							</div>
						</div>
					</div>
				</div>
				<div class="detail-right"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.resume {
	width: 100%;
	max-width: 1440px;
	height: calc(100vh - 50px);
	padding-top: 50px;
	display: flex;
	margin: auto;
	color: #555;
	position: relative;

	.left-side {
		min-width: 220px;
		width: 20%;
		margin-left: 20px;
		display: flex;
		flex-direction: column;
		background-color: #edece1;
	}

	.avatar {
		padding: 10px;
		margin: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* flex-grow: 1; */
	}

	.avatar img {
		width: 200px;
		height: 200px;
		object-fit: cover;
		border-radius: 50%;
		box-shadow: 5px 5px 5px #888;
		z-index: 1;
	}

	.contact {
		padding: 10px;
		margin: 10px 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* flex-grow: 2; */
	}

	.contact ul {
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.contact ul li {
		margin: 5px;
	}
	.contact ul li i {
		margin: 0 5px 0 0;
	}

	.contact ul li a {
		text-decoration: none;
		color: #555;
	}

	.aboutme {
		padding: 10px;
		margin: 10px 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* flex-grow: 2; */
	}
	.aboutme h3 {
		padding: 10px 0;
	}

	.aboutme p {
		padding: 0 10px;
	}

	.banner {
		width: 100%;
		height: 90px;
		top: 40px;
		left: 0;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		background-color: #f7f6f1;
		position: absolute;
	}

	.banner .lastname {
		margin-left: 320px;
		font-size: 72px;
		font-weight: 300;
		text-align: center;
		color: #00b0f0;
		font-family: 'Monoton', cursive;
	}

	.banner .firstname {
		margin: 0 20px 0 20px;
		padding-right: 20px;
		font-size: 72px;
		font-weight: 900;
		color: #00b0f0;
		font-family: 'Mitr', sans-serif;
		text-align: center;
		position: relative;
	}
	.banner .firstname::after {
		content: '';
		position: absolute;
		width: 5px;
		height: 80px;
		top: -6px;
		right: 0;
		bottom: 0;
		background-color: #ddd;
	}
	.banner p {
		/* padding: 0 30px; */
		font-size: 36px;
		font-weight: 100;
	}

	.right-side {
		width: 80%;
		margin-top: 80px;
		display: flex;
		flex-direction: column;
	}

	.detail-container {
		padding: 10px;
	}

	.detail-container .detail-left {
		width: 80%;
		/* height: 100%; */
		/* background-color: #aaf; */
	}

	.detail-container .detail-left h3 {
		font-size: 36px;
	}

	.detail-container .detail-right {
		width: 10%;
	}

	.workexp .item {
		width: 100%;
		display: flex;
	}

	.workexp .item .years {
		width: 10%;
		font-size: 18px;
		font-weight: 500;
		text-align: center;
		position: relative;
		/* border: 1px solid #000; */
	}

	.workexp .item:not(:last-child) .years::after {
		content: '';
		width: 0px;
		height: 100%;
		border-right: 2px dotted #999;
		top: 15px;
		right: 0;
		/* background-color: #999; */
		position: absolute;
	}

	.workexp .item .years::before {
		content: '';
		width: 10px;
		height: 10px;
		border-radius: 50%;
		top: 10px;
		right: -4px;
		background-color: #666;
		position: absolute;
		z-index: 1;
	}

	.workexp .item .job {
		width: 90%;
		margin-left: 15px;
	}

	.jobtitle {
		font-size: 18px;
		font-weight: 900;
	}

	.jobcontext {
		padding: 5px;
	}

	.jobcontext ul li {
		font-size: 16;
		font-weight: 100;
	}

	.education {
		padding: 10px;
	}

	.education h3 {
		font-size: 36px;
	}

	.education p {
		font-size: 18px;
		font-weight: 100;
	}

	.skills {
		padding: 10px;
	}

	.skills h3 {
		font-size: 36px;
	}

	.skills-wrap {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.skill-item {
		position: relative;
	}

	.circle {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background-image: linear-gradient(90deg, #aaa 50%, #666 0);
		position: relative;
	}

	.circle::after {
		content: '';
		width: 100%;
		height: 100%;
		border-radius: 50%;
		/* background-image: linear-gradient(90deg, transparent 50%, #aaa 0); */
		position: absolute;
		animation: spin 3s linear, spinleft 3s step-end;
		animation-fill-mode: forwards;
	}

	.mask-circle {
		width: 100px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		font-size: 26px;
		background-color: #fff;
		position: absolute;
		top: 50px;
		left: 0;
		right: 0;
		margin: auto;
		z-index: 2;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(270deg);
		}
	}
	/* 
@keyframes spinleft {
    50% {
        background-image: linear-gradient(90deg, #666 50%, transparent 0);
    }
    100%{
        background-image: linear-gradient(90deg, #666 50%, transparent 0);
    }
} */

	.html .circle {
		background-image: linear-gradient(90deg, #f16524 50%, #e54c21 0);
	}

	.css .circle {
		background-image: linear-gradient(90deg, #28a4d9 50%, #016db5 0);
	}

	.js .circle {
		background-image: linear-gradient(90deg, #f8d824 50%, #e3c431 0);
	}

	.vue .circle {
		background-image: linear-gradient(90deg, #42b983 50%, #2c3e50 0);
	}

	.html .circle::after {
		background-image: linear-gradient(90deg, transparent 50%, #f16524 0);
		animation: spinhtml 3s linear, spinlefthtml 3s step-end;
		animation-fill-mode: forwards;
	}

	.css .circle::after {
		background-image: linear-gradient(90deg, transparent 50%, #28a4d9 0);
		animation: spincss 3s linear, spinleftcss 3s step-end;
		animation-fill-mode: forwards;
	}

	.js .circle::after {
		background-image: linear-gradient(90deg, transparent 50%, #f8d824 0);
		animation: spinjs 3s linear, spinleftjs 3s step-end;
		animation-fill-mode: forwards;
	}

	.vue .circle::after {
		background-image: linear-gradient(90deg, transparent 50%, #42b983 0);
		animation: spinvue 3s linear, spinleftvue 3s step-end;
		animation-fill-mode: forwards;
	}

	.htmltest {
		width: 200px;
		height: 200px;
	}
	svg {
		width: 200px;
		height: 200px;
		transform: rotate(-90deg);
	}
	.htmltest {
		position: relative;
	}
	.skill-text {
		width: 100px;
		height: 100px;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;

		position: absolute;
		text-align: center;
		font-size: 30px;
		line-height: 100px;
	}
	.outer {
		animation: fillup 1.5s linear;
		animation-fill-mode: forwards;
	}

	@keyframes spinhtml {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(275deg);
		}
	}

	@keyframes spincss {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(220deg);
		}
	}

	@keyframes spinjs {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(280deg);
		}
	}

	@keyframes spinvue {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(260deg);
		}
	}

	@keyframes spinlefthtml {
		50% {
			background-image: linear-gradient(90deg, #e54c21 50%, transparent 0);
		}
		100% {
			background-image: linear-gradient(90deg, #e54c21 50%, transparent 0);
		}
	}

	@keyframes spinleftcss {
		50% {
			background-image: linear-gradient(90deg, #016db5 50%, transparent 0);
		}
		100% {
			background-image: linear-gradient(90deg, #016db5 50%, transparent 0);
		}
	}

	@keyframes spinleftjs {
		50% {
			background-image: linear-gradient(90deg, #e3c431 50%, transparent 0);
		}
		100% {
			background-image: linear-gradient(90deg, #e3c431 50%, transparent 0);
		}
	}

	@keyframes spinleftvue {
		50% {
			background-image: linear-gradient(90deg, #2c3e50 50%, transparent 0);
		}
		100% {
			background-image: linear-gradient(90deg, #2c3e50 50%, transparent 0);
		}
	}

	@keyframes fillup {
		to {
			stroke-dasharray: 390 505;
		}
	}
}
</style>

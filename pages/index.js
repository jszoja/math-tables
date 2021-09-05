import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
    {/*<!-- Required meta tags -->*/}
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  
    {/* <!-- Bootstrap CSS --> */}
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
  
    <script src="https://kit.fontawesome.com/1b301a96ca.js" crossorigin="anonymous"></script>
  
  
    <title>Maths addition tables</title>
  </Head>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
			aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
			<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarAdding" role="button" data-toggle="dropdown"
						aria-haspopup="true" aria-expanded="false">
						Adding(+)
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarAdding">
						<a class="dropdown-item" href="?mode=half-level">1-5 levels</a>
						<a class="dropdown-item" href="?mode=full-level">1-10 levels</a>
						<a class="dropdown-item" href="?mode=roblox-challenge">Roblox Challenge!</a>
					</div>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarSubstracting" role="button"
						data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Substracting(-)
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarSubstracting">
						<a class="dropdown-item" href="?mode=full-minus">1-10 levels</a>
						<a class="dropdown-item" href="?mode=ten-minus">10</a>
					</div>

				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarMultiply" role="button"
						data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Multiply(x)
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarMultiply">
						<a class="dropdown-item" href="?mode=full-multiply">1-10 levels</a>
						<a class="dropdown-item" href="?mode=half-multiply">1-5 levels</a>
						<a class="dropdown-item" href="?mode=challenge-multiply">Roblox Challenge</a>
					</div>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarSettings" role="button"
						data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Settings
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarSettings">
						<form class="px-4 py-3">
							<div class="form-group">
								<label for="formControlRange">Answer Time [1000-6000ms]:</label>
								<input type="range" class="form-control-range" id="formControlRange" min="1000"
									max="6000" step="100"/>
								<p class="formControlRangeValue"></p>
							</div>
						</form>
					</div>
				</li>
				<li class="nav-item">
					<a class="nav-link btn btn-danger" id="resetProgress" href="javascript:void();">Reset progress</a>
				</li>
			</ul>
		</div>
	</nav>
	<div class="site">

		<div class="container ">
			<div class="row question">
				<div id="question" class="col-9 col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-8">
					2 + 2 = ?
				</div>

				<div id="feedback" class="col-3 col-md-3 col-sm-3 col-lg-2">
					<div class="alert alert-success" role="alert">
						<svg width="100%" height="100%" viewBox="0 0 16 16" class="bi bi-emoji-smile"
							fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
								d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
							<path fill-rule="evenodd"
								d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z" />
							<path
								d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
						</svg>
						<svg width="100%" height="100%" viewBox="0 0 16 16" class="bi bi-award-fill" fill="currentColor"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
							<path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
						</svg>
					</div>
					<div class="alert alert-danger" role="alert">
						<svg width="100%" height="100%" viewBox="0 0 16 16" class="bi bi-emoji-frown"
							fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
								d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
							<path fill-rule="evenodd"
								d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683z" />
							<path
								d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
						</svg>
					</div>
				</div>
			</div>
			<div class="row ">
				<div class="col-md-4 offset-md-3 col-sm-12">
					<div class="progress">
						<div class="progress-bar progress-bar-striped" role="progressbar" style={{width: 0+"%"}}
							aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
					</div>
				</div>
			</div>
			<div class="row ">
				<div class="col-lg-7 offset-lg-2 col-md-9 offset-md-1 col-sm-12">
					<p id="levelLabel" class="label">You are at level %s</p>
					<p class="level">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
					</p>
				</div>
			</div>
			<div class="row ">
				<div class="col-md-6 offset-md-3 col-3 col-sm-8">
					<form>
						<div class="form-group">
							<label for="inResult">Type the result</label>
							<input type="number" class="form-control col-lg-3 col-md-4 col-sm-3" id="inResult"
								maxlength="2"/>
						</div>
					</form>
				</div>
			</div>
			<div class="row correct">
				<div class="col-md-6 offset-md-3">
					<p id="correctInRowLabel" class="label">You need %d correct answers in row to pass the level.</p>
					<p></p>
				</div>
			</div>
			<div class="row correctInLevel d-none">
				<div class="col-md-6 offset-md-3">
					<p id="correctInLevelLabel" class="label">You need %d correct answers in level to pass it.</p>
					<p></p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 offset-md-3">
					<p>Questions: <span id="questionsNo">0</span></p>
					<p>Correct: <span id="correctNo">0</span></p>
					<p>Correct in row: <span id="correctInRowNo">0</span></p>
				</div>
			</div>
		</div>
		<footer class="container-fluid text-center">
			<p>Maths for kids on <a href="https://github.com/jszoja/math-tables" target="_blank">jszoja/math-tables</a>
				| v<span id="appVersion">1.8</span></p>
		</footer>
	</div>

	{/* <!-- Modal dialogs --> */}
	<div id="modalPassedLevel" class="modal" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Well done!</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="alert alert-success" role="alert">
						<p>Aww yeah, you successfully passed the maths table in that level!.</p>
						<p>Do you want to try the next level?</p>
						<p><a id="nextLevelBtn" href="javascript:void();" class="btn btn-primary">Next Level</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="modalPassedRobloxChallenge" class="modal" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Well done!</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="alert alert-success" role="alert">
						<p>Aww yeah, you successfully passed the Roblox Challenge!.</p>
						<p>You have been awarded 400 Robux!!!</p>
						<p><img
								src="data:image/jpeg;base64,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"/>
							<svg style={{fontSize: 200+"px", marginLeft: 40+"px"}} width="1em" height="1em"
								viewBox="0 0 16 16" class="bi bi-patch-check-fll" fill="currentColor"
								xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
									d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984a.5.5 0 0 0-.708-.708L7 8.793 5.854 7.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
							</svg>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	{/* <!-- Toasts --> */}
	<div id="toastLevelCompleted" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
		<div class="toast-header">
			<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-award-fill" fill="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
				<path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
			</svg>
			<strong class="mr-auto">Way to go!</strong>
			<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<div class="toast-body">
			Level completed in %ds
		</div>
	</div>
	<div id="toastOnFire" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
		<div class="toast-header">
			<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-award-fill" fill="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
				<path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
			</svg>
			<strong class="mr-auto">You are on fire!</strong>
			<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<div class="toast-body">
			You got 3 answers with gold speed!
		</div>
	</div>
  </>
  )
}

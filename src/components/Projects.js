import EularImg from '../assets/EularImg.png'
import EularCardBg from '../assets/EularCardBg.png'
import EularHoverImg from '../assets/EularHoverImg.png'

const Projects = () => {
	return (
		<div className="projects" id="projects">
			<div className="container">
				<h1>PROJECTS</h1>

				<div className="content">
					<div className="projects_row">
						<div className="project">
							<img className="eular_img" src={EularImg} alt="EularImage" />

							<img className="eular_card_bg" src={EularCardBg} alt="EularCardBg" />
							<img className="eular_hover_img" src={EularHoverImg} alt="EularHoverImg" />

							<div className="eular_content">
								<h6>Euler.finance</h6>
								<p>UI/UX Website App Design</p>
							</div>
						</div>

						<div className="project">
							<img className="eular_img" src={EularImg} alt="EularImage" />

							<img className="eular_card_bg" src={EularCardBg} alt="EularCardBg" />
							<img className="eular_hover_img" src={EularHoverImg} alt="EularHoverImg" />

							<div className="eular_content">
								<h6>Euler.finance</h6>
								<p>UI/UX Website App Design</p>
							</div>
						</div>

						<div className="project">
							<img className="eular_img" src={EularImg} alt="EularImage" />

							<img className="eular_card_bg" src={EularCardBg} alt="EularCardBg" />
							<img className="eular_hover_img" src={EularHoverImg} alt="EularHoverImg" />

							<div className="eular_content">
								<h6>Euler.finance</h6>
								<p>UI/UX Website App Design</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects

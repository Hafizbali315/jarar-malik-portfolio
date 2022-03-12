import { useEffect, useState } from 'react'

import EularImg from '../assets/EularImg.png'
import EularCardBg from '../assets/EularCardBg.png'
import EularHoverImg from '../assets/EularHoverImg.png'
import ProjectImg from '../assets/ProjectImg.png'
import ProjectsRingImg from '../assets/ProjectsRingImg.png'

const Projects = () => {
	const [showProjectDetails, setShowProjectDetails] = useState(false)
	const [projectDetails, setProjectDetails] = useState()

	useEffect(() => {
		console.log(projectDetails)
	}, [projectDetails])

	const ProjectsDetails = [
		{
			id: 0,
			name: 'Project Name',
			tag: 'UI/UX Website App Design',
			link: 'Euler.finance',
			hoverImg: EularHoverImg,
			detail:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
			img: ProjectImg,
		},
		{
			id: 1,
			name: 'Project Name',
			tag: 'UI/UX Website App Design',
			link: 'Euler.finance',
			hoverImg: EularHoverImg,
			detail:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
			img: ProjectImg,
		},
		{
			id: 2,
			name: 'Project Name',
			tag: 'UI/UX Website App Design',
			link: 'Euler.finance',
			hoverImg: EularHoverImg,
			detail:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
			img: ProjectImg,
		},
	]

	return (
		<div className="projects">
			<div className="ring_img_sm">
				<img src={ProjectsRingImg} alt="ProjectsRingImg" />
			</div>

			<div className="ring_img_lg">
				<img src={ProjectsRingImg} alt="ProjectsRingImg" />
			</div>

			<div className="container">
				<h1>PROJECTS</h1>

				<div className="content">
					<div className="projects_row">
						{ProjectsDetails.map((project) => (
							<div
								className="project"
								key={project.id}
								onClick={() => {
									setShowProjectDetails(true)
									setProjectDetails(project)
								}}
							>
								<img className="eular_img" src={EularImg} alt="EularImage" />

								<img className="eular_card_bg" src={EularCardBg} alt="EularCardBg" />
								<img className="eular_hover_img" src={EularHoverImg} alt="EularHoverImg" />

								<div className="eular_content">
									<h6>{project.link}</h6>
									<p>{project.tag}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{showProjectDetails && projectDetails && (
				<div className="popup">
					<div className="container">
						<div className="project_details">
							<h1>{projectDetails.name}</h1>
							<p>{projectDetails.detail}</p>

							<img src={projectDetails.img} alt="ProjectImg" />

							<span onClick={() => setProjectDetails(false)}> X </span>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Projects

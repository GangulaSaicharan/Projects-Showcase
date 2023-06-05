import './index.css'

const ProjectCard = props => {
  const {projectCardDetails} = props
  const {name, imageUrl} = projectCardDetails

  return (
    <li className="project-card-list-item">
      <img className="project-card-image" src={imageUrl} alt={name} />
      <p className="project-card-name">{name}</p>
    </li>
  )
}

export default ProjectCard

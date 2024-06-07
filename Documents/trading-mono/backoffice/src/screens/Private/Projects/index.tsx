import { Breadcrumbs, Button, Copy, CopyLinkButton, Loader, Menus, ProjectCard, Subtitle, TaskCard, Title } from "@/components"
import { Container, Modal } from "@/containers"
import styles from './Projects.module.css'
import { Eye, Trash, Trash2 } from "react-feather"
import { useDeleteIssue, useDeleteProject, useIssueById, useIssuesByProjectId, useProjects } from "@/hooks"
import { useState } from "react"
import CreateIssue from "../Issues/Create"
import IssueDetails from "../Kanban/IssueDetails"
import { useNavigate, useParams } from "react-router-dom"
import CreateProject from "./Create"
import { getRandomColor } from "@/utilities"

const Projects = () => {
  const { isLoading, projects } = useProjects();
  const { issues } = useIssuesByProjectId();
  const { deleteProject } = useDeleteProject();

  const [projectSelected, setProjectSelected] = useState({
    uuid: "",
    client: "",
    start_date: new Date(),
    target_date: new Date(),
    progress: -1,
    members: [],
    description: "",
    name: ""
  });

  const { issueId } = useParams();
  const { issue } = useIssueById();

  const navigate = useNavigate();

  const { isDeleting, deleteIssue } = useDeleteIssue();
  const handleDeleteIssue = () => {
    deleteIssue(issue.uuid, {
      onSuccess: () => {
        navigate('/projects');
      }
    });
  };
  if (isLoading) return <Loader />

  return (
    <Modal>

      <Menus>

        <Container>
          <Breadcrumbs items={['Home', 'Projects', 'Overview']} />
          <div className={styles.projects_header}>
            <Title text="Projects" />
            <CreateProject />

          </div>

          <div className={styles.container}>
            <div className={styles.projects}>
              <Subtitle text={`Active projects (${projects?.count})`} />
              <div>
                {projects?.items.map((project) => (
                  <ProjectCard key={project.uuid} issues={issues} setProject={setProjectSelected} project_selected={projectSelected.uuid} {...project} />
                ))}
              </div>

            </div>
            {projectSelected.uuid ? (
              <div className={styles.overview}>
                <div className={styles.overview_header}>
                  <div>
                    <h2>Project {projectSelected.name}</h2>
                    <Copy text={projectSelected.description} />
                  </div>
                  <div style={{
                    display: 'flex'
                  }}>
                    <CreateIssue />

                    <Menus.Menu>
                      <Menus.Toggle id="4353fde-dfr34d3" />

                      <Menus.List id="4353fde-dfr34d3">
                        <Menus.Button onClick={() => navigate(`/projects/${projectSelected.uuid}?project=${projectSelected.uuid}`)}><Eye size={16} /> Open</Menus.Button>
                        {/* <Menus.Button><Edit2 size={16} /> Edit</Menus.Button> */}
                        <Menus.Button onClick={() => deleteProject(projectSelected.uuid)} ><Trash size={16} /> Delete</Menus.Button>
                      </Menus.List>
                    </Menus.Menu>
                  </div>

                </div>

                <ul className={styles.info_list}>
                  <li><p>Client</p> <span>{projectSelected.client}</span></li>
                  <li><p>Start date</p> <span>{projectSelected.start_date.toString().slice(0, 10)}</span></li>
                  <li><p>Target date</p> <span>{projectSelected.target_date.toString().slice(0, 10)}</span></li>
                  <li><p>Members</p> <span>
                    <div className={styles.assigness_card}>
                      {projectSelected.members?.map((assignee: any) => (
                        <span key={assignee._id}>
                          {assignee.photo ? (
                            <div className={styles.assigne_picture}>
                              <img src={assignee.photo} alt="" />
                            </div>
                          ) : (
                            <span className={styles.character} style={{
                              backgroundColor: getRandomColor()
                            }}> <p>{assignee.name.charAt(0)}</p> <p>{assignee.lastname.charAt(0)}</p></span>
                          )}
                        </span>
                      ))}
                    </div>
                  </span></li>
                </ul>

                <div style={{
                  display:'flex',
                  alignItems: 'center',
                  justifyContent:'space-between'
                }}>
                  <h2 className={styles.task_title}>Tasks ({issues?.items?.length})</h2>
                  <Button size='sm' onClick={() => navigate(`/projects/${projectSelected.uuid}?project=${projectSelected.uuid}`)}><Eye size={16} />See all tasks of project</Button>
                </div>

                <div className={styles.tasks_list}>
                  {issues?.items?.slice(0, 3).map((issue: any) => (
                    <TaskCard key={issue.uuid} {...issue} />
                  ))}
                </div>
                <div className={styles.progress_container}>
                  <Subtitle text="Progress" />
                  <h2 className={styles.pregress_title}>{projectSelected.progress}%</h2>
                  <div className={styles.progress_bar}>
                    <div style={{
                      width: `${projectSelected.progress}%`
                    }} className={styles.progress}></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.empty}>
                <img src="/empty_project.png" alt="" />
                <Copy text="Select project to see it's details" />
              </div>
            )}
          </div>
        </Container>
        <Modal.Window
          name={issueId}
          title='Issue Details'
          element={`${issue?.type}-${issue?.code}`}
          options={
            <div style={{
              display: 'flex',
              gap: 10,
              alignItems: 'center'
            }}>
              <CopyLinkButton />
              {isDeleting ? <Loader /> : (

                <button className={styles.delete_button} onClick={handleDeleteIssue}>
                  <Trash2 size={20} />
                </button>
              )}

            </div>
          } >

          <IssueDetails />
        </Modal.Window>
      </Menus>
    </Modal>

  )
}

export default Projects
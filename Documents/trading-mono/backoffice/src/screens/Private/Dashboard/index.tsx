import { Container } from '@/containers'
import styles from './Dashboard.module.css'
import { Loader, Subtitle, Title } from '@/components'
import { useCollaborators, useGreeting, useProjects, useUser } from '@/hooks'

const Dashboard = () => {
    const {isLoading, collaborators} =  useCollaborators();
    const { projects} = useProjects();
    const { user } = useUser();
    const { message } = useGreeting();
  return (
    <>
        <div className={styles.background} />
        <Container>
            <div className={styles.header}>
                <div>
                    <Title text={`${message}, ${user.name}`} />
                </div>
            </div>

            <div className={styles.info}>
                <div>
                    <Subtitle text='Total Balance' />
                </div>
                <div>
                    <Subtitle text='Total Net Earning' />
                </div>
                <div>
                    <Subtitle text='Total Spending' />
                </div>
                <div>
                <Subtitle text='Helebba Users' />
                </div>
                <div>
                <Subtitle text='Projects' />
                <h3>{projects?.count}</h3>
                </div>

            </div>
            <div className={styles.container}>

            <div className={styles.card}>
                <Subtitle text='Active Projects' />
                <table className={styles.table}>
                    <thead className={styles.header}>
                        <tr>
                            <th>Project Name</th>
                            <th>Project Lead</th>
                            <th>Progress</th>
                            <th>Client</th>
                            <th>State</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects?.items.map((project: any) => (

                        <tr key={project.uuid}>
                            <td>{project.name}</td>
                            <td>{project.lead.name}  {project.lead.lastname}</td>
                            <td>{project.progress}%</td>
                            <td>{project.client}</td>
                            <td>In Progress</td>
                            <td>{project.target_date.toString().slice(0,10)}</td>
                        </tr>
                        ))}

                    </tbody>
                </table>
            </div>
 
            
            <div className={`${styles.card} ${styles.points}`}>
                <Subtitle text='Points' />
                {isLoading ? <Loader small /> : (
                    
                <table className={styles.table}>
                    <thead className={styles.header}>
                        <tr>
                        <th>#</th>
                            <th>Name</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {collaborators?.items.sort((a:any, b:any) => b.points - a.points).slice(0, 10).map((collaborator:{ uuid: string, name: string, points: number, location: {icon: string}}, index: number) => (
                            <tr key={collaborator.uuid}>
                                <td>{index + 1}</td>
                            <td style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10
                            }} ><img style={{
                                width: 20
                            }} src={collaborator.location.icon} alt="" /> {collaborator.name}</td>
                            <td>{collaborator.points}</td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
                )}

            </div>
            {/* <div className={`${styles.card} ${styles.overview}`}>
                <Subtitle text='Balance Overview' />
            </div> */}
            </div>

        </Container>
    </>
  )
}

export default Dashboard
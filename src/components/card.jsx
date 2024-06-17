const user_details=[
        {
            "name": "Amanda",
            "city": "Boston",
            "description": "Full-Stack Developer",
            "skills": ["React", "Node.js", "MongoDB", "GraphQL", "Docker", "AWS", "JavaScript", "TypeScript", "Git"],
            "status": true
        },
        {
            "name": "Rajesh",
            "city": "Mumbai",
            "description": "Data Scientist",
            "skills": ["Python", "R", "SQL", "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
            "status": false
        },
        {
            "name": "Emily",
            "city": "London",
            "description": "UI/UX Designer",
            "skills": ["Sketch", "Figma", "Adobe XD", "InVision", "HTML", "CSS", "JavaScript", "User Research", "Wireframing"],
            "status": true
        },
        {
            "name": "Hiroshi",
            "city": "Tokyo",
            "description": "Software Engineer",
            "skills": ["Java", "Spring Boot", "Kotlin", "MySQL", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes"],
            "status": false
        },
        {
            "name": "Clara",
            "city": "Berlin",
            "description": "DevOps Engineer",
            "skills": ["Jenkins", "Terraform", "Kubernetes", "AWS", "Azure", "Linux", "Bash", "Python", "Ansible"],
            "status": true
        },
        {
            "name": "Miguel",
            "city": "São Paulo",
            "description": "Mobile App Developer",
            "skills": ["Swift", "Objective-C", "Kotlin", "Java", "React Native", "Flutter", "Firebase", "Git", "SQLite"],
            "status": false
        },
        {
            "name": "Amina",
            "city": "Nairobi",
            "description": "Cybersecurity Specialist",
            "skills": ["Network Security", "Penetration Testing", "Python", "C++", "Cryptography", "Firewalls", "SIEM", "Incident Response", "Ethical Hacking"]
        },
        {
            "name": "Luca",
            "city": "Rome",
            "description": "Database Administrator",
            "skills": ["Oracle", "MySQL", "PostgreSQL", "MongoDB", "SQL", "PL/SQL", "Database Security", "Backup and Recovery", "Data Modeling"]
        },
        {
            "name": "Sofia",
            "city": "Barcelona",
            "description": "Machine Learning Engineer",
            "skills": ["Python", "TensorFlow", "Keras", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "SQL", "Deep Learning"]
        },
        {
            "name": "Michael",
            "city": "New York",
            "description": "Backend Developer",
            "skills": ["Node.js", "Express.js", "MongoDB", "GraphQL", "Docker", "Kubernetes", "AWS", "Microservices", "TypeScript"]
        }
    ]


function User(props)
{
    return (<>
            <div className="card-container">
                <span className={props.status? "pro online":"pro offline"}>{props.status?"ONLINE":"OFFLINE"}</span>
                <img src="assets/vijay.jpg" className="img" alt="Yours..."/>
                <h3>{props.name}</h3>
                <h3>{props.city}</h3>
                <p>{props.description}</p>
                <div className="buttons">
                    <button className="primary">Message</button>
                    <button className="primary outline">Following</button>
                </div>
                <div className="skills">
                    <h6>Skills</h6>
                    <ul>
                        {/* {props.skills} */}
                        {props.skills.map((skill,index)=>
                        (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
    </>)
}


export const Card=()=>
    {
        return (<>

                {user_details.map((user,index)=>(
                    <User name={user.name}
                          city={user.city}
                          description={user.description}
                          skills={user.skills}
                          satus={user.status}
                    />
                ))}
        </>);
    }


    // <User name="kishore" city="Uthangarai / Krishnagiri" description="Front-End" skills={["HTML","CSS","JS","PHP","MYSQL","JAVA","PYTHON","C","GIT AND GITHUB"]}
    //                 status={false}/>
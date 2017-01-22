import datetime

from krull.core import build_app

from app.app import configs
from app.database import start_database_session

current_app = build_app(configs, db_factory=start_database_session)

from app.models.user import User
from app.models.work_experience import WorkExperience
from app.models.education import Education
from app.models.projects import Projects

current_app.db.Base.metadata.create_all()

me = User(
    name="Matthew R. Whitt",
    password="gibberish",
    address="1520 S Hayworth Ave, #308, Los Angeles, CA 90035",
    email="mwhitt.w@gmail.com",
    phone_number="347-941-9392"
)

work_experiences = [
    WorkExperience(
        user=me,
        company="Beginning with Children",
        title="Junior Developer / Data Analyst",
        description="""Designed and maintained a wordpress website for a personal webcomic that I wrote, inked, and colored for over two years. I designed and implemented the website design from start to finish, using photoshop and wordpress, and administrated updates via the admin dashboard on a daily basis. I also created a custom wordpress theme for the site using basic web technologies such as HTML, CSS, and JavaScript, with some minor PHP.""",
        start_date=datetime.date(2012, 3, 1),
        end_date=datetime.date(2013, 10, 31)
    ),
    WorkExperience(
        user=me,
        company="Beginning with Children",
        title="Software Engineer / Data Analyst",
        description="""Developed in-house Django applications to fill in various data management and reporting gaps Re-designed and re-architected the Beginning with Children website, porting from php/mysql to django/jquery. Deployed and maintained an in-house Postgres database, merging multiple data sources using Python Led a series of professional development sessions for data team to improve code quality""",
        start_date=datetime.date(2013, 11, 1),
        end_date=datetime.date(2015, 10, 1)
    ),
    WorkExperience(
        user=me,
        company="Apploi",
        title="Full Stack Engineer",
        description="""Worked on an Agile microservice team to re-engineer various features of our legacy monolithic stack (from grails/jquery to python/angularjs). Collaborated with my to team to design and engineer a flexible microservices architecture using heroku pipelines, ironMQ, websockets, and micro-apps (django, flask, tornado, and angularjs). Worked within a continuous integration dev environment, (pytest + factory boy, github, travis, heroku pipeline). Owned the development of various API integrations with applicant tracking systems and job boards. Built a hybrid mobile applicant review app for ios and android using Angular 2 and Ionic 2. Improved search quality and snappiness through the implementation of elasticsearch. Used segment to instrument event and session tracking, as well as on the fly app integration, throughout all of our front-end web apps. Engaged in peer code-reviews and pair programming, always striving to write terse (but readable), heavily tested code.""",
        start_date=datetime.date(2015, 10, 1),
        end_date=datetime.date(2016, 10, 31)
    ),
    WorkExperience(
        user=me,
        company="The Walt Disney Studios",
        title="Frontend Developer",
        start_date=datetime.date(2016, 8, 23)
    ),
]

education = Education(
    user=me,
    school="Marymount Manhattan College",
    degree="Bachelor of Arts (B.A.)",
    major="International Studies",
    gpa=3.5,
    start_date=datetime.date(2007, 8, 1),
    end_date=datetime.date(2011, 5, 15)
)

projects = [
    Projects(
        user=me,
        name="Apploi for Hiring Managers - (Android)",
        role="Lead Engineer",
        project_type="professional",
        description="""Ionic2 Hybrid App for Hiring Managers to quickly review candidates.""",
        release_date=datetime.date(2016, 6, 1),
        link="https://play.google.com/store/apps/details?id=com.ionicframework.trumobe215950&hl=en" 
    ),
    Projects(
        user=me,
        name="Apploi for Hiring Managers - (iOS)",
        role="Lead Engineer",
        project_type="professional",
        description="""Ionic2 Hybrid App for Hiring Managers to quickly review candidates.""",
        release_date=datetime.date(2016, 6, 1),
        link="https://fnd.io/#/us/ios-universal-app/1132659182-apploi-for-hiring-managers-by-apploi-cor" 
    ),
    Projects(
        user=me,
        name="Apploi Search",
        role="Engineer",
        project_type="professional",
        description="""Job board and quick capture application process for retail jobseekers. Fully architected and implemented elasticsearch, and in general provided fullstack contributions, on the angular frontend and python flask backend.""",
        release_date=datetime.date(2016, 3, 1),
        link="https://jobs.apploi.com/" 
    ),
    Projects(
        user=me,
        name="Beginning with Children Website",
        role="Lead Engineer",
        project_type="professional",
        description="""Public facing website and donation entry for BwC""",
        release_date=datetime.date(2015, 1, 1),
        link="http://www.beginningwithchildren.com" 
    ),
    Projects(
        user=me,
        name="Krull",
        role="Sole Engineer",
        project_type="personal",
        description="""This is a lightweight microframework for building restful APIs""",
        release_date=datetime.date(2016, 7, 1),
        link="https://github.com/mattrwh/krull" 
    ),
    Projects(
        user=me,
        name="Injectables",
        role="Engineer",
        project_type="personal",
        description="""https://github.com/mattrwh/injectables""",
        release_date=datetime.date(2016, 6, 1),
        link="https://github.com/mattrwh/injectables" 
    )
]

session = current_app.db.session

session.add(me)
session.add(education)

for we in work_experiences:
    session.add(we)

for project in projects:
    session.add(project)

session.commit()

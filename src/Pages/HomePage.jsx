import ListOfTrainers from "../components/ListOfTrainers"
import CreateTrainerForm from "../Pages/CreateTrainerForm"
import ListOfClasses from "../components/ListOfClasses"
import ListOfMembers from "../components/ListOfMembers"
import Header from "../components/Header"
// import ViewMember from "../Pages/ViewMemeber"

export default function HomePage(props) {

    const { trainers, setTrainers, classes, members, setMemberToView, memberToView } = props


    return (
        <>
            <div className="grid-container">

                <aside className="left-aside">
                    <ListOfTrainers trainers={trainers} />
                    <CreateTrainerForm trainers={trainers} setTrainers={setTrainers} />
                </aside>

                <main className="main">
                    <ListOfClasses classes={classes} />
                </main>

                <aside className="right-aside">
                    <ListOfMembers members={members} setMemberToView={setMemberToView} />
                    {/* <ViewMember memberToView={memberToView} /> */}

                </aside>
            </div>
        </>
    )
}
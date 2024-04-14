
import Profile from '../Components/CustomComp/Profile'
import Card from "../Components/CustomComp/Card"
import PostTable from '../Components/CustomComp/PostTable'
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getMypost, getunlockedTuition } from '../Service/Tuitionservice';
import { getunlockedTeacher } from '../Service/TeacherService';
import { getUserinfo } from '../Service/Userservice';
import TuitionUnlockTable from '../Components/CustomComp/TuitionUnlockTable';
import TeacherUnlockTable from '../Components/CustomComp/TeacherUnlockTable';

async function page() {
    const session = await getServerSession(authOptions);
    if (session === null) {
        redirect("/login");
    }
    const token = session.access_token
    const postedTuition = await getMypost(token)
    const unlockedTuition = await getunlockedTuition(token)
    const unlockedTeacher = await getunlockedTeacher(token)
    const userData = await getUserinfo(token)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Profile
                            userInfo={userData}
                        ></Profile>
                    </div>
                    <div className="col">
                        <Card
                            heading="Credit Point"
                            data={userData.credit_points}
                        ></Card>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <PostTable
                            tuitionList={postedTuition}
                        ></PostTable>
                    </div>
                    <div className="col-12">
                        <TuitionUnlockTable
                            tuitionList={unlockedTuition}
                        ></TuitionUnlockTable>
                    </div>
                    <div className="col-12">
                        <TeacherUnlockTable
                            teacherList={unlockedTeacher}
                        ></TeacherUnlockTable>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page

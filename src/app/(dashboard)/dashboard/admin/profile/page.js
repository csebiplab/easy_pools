import MyProfile from "@/components/__dashboard/MyProfile";
import getCurrentUser from "@/libs/session";

const MyProfilePage = async () => {
    const user = await getCurrentUser();
    return (
        <div className="mt-10">
            <div className="flex justify-center">
                <div className="w-2/5 bg-gray-900 text-white shadow-2xl border border-blue-400 px-8 py-6">
                    <MyProfile user={user} />
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;

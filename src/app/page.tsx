import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession();
  return (
    <div>
      getServerSession Result
      {session?.user?.name ? (
        <div>
          {session.user.name} -
          <Image
            src={session.user.image || ""}
            alt="user image"
            width={100}
            height={100}
          />
        </div>
      ) : (
        <div> not logged in</div>
      )}
    </div>
  );
}

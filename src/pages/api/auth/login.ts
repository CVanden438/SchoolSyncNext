import bcrypt from "bcrypt";
import { prisma } from "../../../server/db";

interface IUserData {
  id: string;
  email: string;
  password: string;
  role: string;
  userName: string;
}
const loginUser = async (credentials: Record<never, string> | undefined) => {
  const { email, password, role } = credentials as {
    email: string;
    password: string;
    role: "STUDENT" | "TEACHER";
  };
  let userData: IUserData | null;
  if (role === "STUDENT") {
    userData = await prisma.student.findFirst({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
        role: true,
        userName: true,
      },
    });
  } else {
    userData = await prisma.teacher.findFirst({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
        role: true,
        userName: true,
      },
    });
  }
  if (!userData) {
    throw new Error("Invalid Credentials");
  }
  bcrypt.compare(password, userData.password, function (err, result) {
    if (err) {
      throw new Error(err.message);
    }
  });
  //renaming userName to user
  const user = {
    id: userData.id,
    name: userData.userName,
    role: userData.role,
    email: userData.email,
  };
  return user;
};

export default loginUser;

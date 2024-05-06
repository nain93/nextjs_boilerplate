import db from "@/db";

export async function checkSignInToken(token: string) {
  const user = await db.user.findUnique({
    where: {
      username: "test",
      // AuthToken: {
      //   some: {
      //     token,
      //   },
      // },
    },
    select: {
      id: true,
    },
  });
}

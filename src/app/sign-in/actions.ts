"use server";

import db from "@/db";
import getSession from "@/utils/session";

export async function createUser({ provider }: { provider: string }) {
  const cookie = await getSession();

  const user = await db.authToken.findUnique({
    where: {
      token: cookie.id,
    },
    select: {
      id: true,
    },
  });
  /// 유저가 존재하면 리턴
  if (user) return;

  /// 없으면 유저 생성
  await db.authToken.create({
    data: {
      token: cookie.id,
      provider,
      user: {},
    },
  });
}

import { NextResponse } from "next/server";

export async function GET() {
  const LEETCODE_USERNAME = "kamalcbe86";
  const query = `
    query userProblemsSolved($username: String!) {
      matchedUser(username: $username) {
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { username: LEETCODE_USERNAME },
      }),
    });

    const data = await response.json();
    // Get the "All" difficulty count
    const totalSolved =
      data.data.matchedUser.submitStatsGlobal.acSubmissionNum.find(
        (item) => item.difficulty === "All"
      ).count;

    return NextResponse.json({ totalSolved });
  } catch (error) {
    return NextResponse.json({ totalSolved: 0 }, { status: 500 });
  }
}

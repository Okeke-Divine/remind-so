import prisma from "@/db";
import { generateRandomHash, slugify } from "@/utils/helper";
import { badRequest, internalServerError, resourceCreated } from "@/utils/prebuiltApiResponse";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { fullname, email, password } = body;

    // Validate input fields
    if (!fullname || !email || !password) {
      return badRequest("All fields are required");
    }

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return badRequest("Email is already in use");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const newUser = await prisma.user.create({
      data: {
        fullname,
        email,
        password: hashedPassword,
      },
    });

    // Extract the first name from the full name (split by first space)
    const firstName = fullname.split(" ")[0];

    // Generate the team name and slug
    const teamName = `${firstName}'s Team`;
    const slug = slugify(`${firstName}s-team-${generateRandomHash()}`);

    // Create the team for the user
    const newTeam = await prisma.team.create({
      data: {
        name: teamName,
        slug: slug,
        createdBy: newUser.id,
        teamUsers: {
          create: {
            userId: newUser.id,
          },
        },
      },
    });

    // Respond with success and return the user and team info
    return resourceCreated({ user: newUser, team: newTeam });
  } catch (error) {
    console.error("Error registering user:", error);
    return internalServerError(error);
  }
};

import prisma from "@/db";
import { badRequest, internalServerError, resourceCreated } from "@/utils/prebuiltApiResponse"

export const POST = async (req) => {
    try {
        const data = await req.json();
        const { fName, email } = data;

        if (!fName || !email) {
            return badRequest("All fields are required")
        }

        const checkEmail = await prisma.waitList.findFirst({
            where: {
                email
            }
        });
        if (checkEmail) {
            return resourceCreated({});
        }

        const insert = await prisma.waitList.create({
            data: {
                email,
                firstname: fName
            }
        })

        if (insert) {
            return resourceCreated({});
        } else {
            return badRequest("Could not add user to waitlist")
        }

    } catch (e) {
        return internalServerError(e)
    }
}
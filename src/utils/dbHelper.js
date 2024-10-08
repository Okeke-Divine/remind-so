import prisma from "@/app/db";

export const verifyResetToken = async (token) => {
    try {
        const tokenRecord = await prisma.passwordResetToken.findUnique({
            where: {
                token: token,
            },
        });

        if (!tokenRecord) {
            return { valid: false, message: 'Invalid or expired reset link.' };
        }

        // Check if token is expired (5 minutes from creation time)
        const expirationTime = new Date(tokenRecord.createdAt);
        expirationTime.setMinutes(expirationTime.getMinutes() + 5);
        const now = new Date();

        if (now > expirationTime) {
            await deleteToken(token)
            return { valid: false, message: 'Reset link has expired.' };
        }

        // Token is valid
        return { valid: true, userId: tokenRecord.userId }; // Optionally return userId or other relevant data
    } catch (error) {
        _console_log('Error verifying reset token:', error);
        return { valid: false, message: 'Reset link has expired.' };
        // throw new Error('Error verifying reset token');
    }
};

export async function deleteToken(token) {
    return await prisma.passwordResetToken.delete({ where: { token } })
}

export async function retrieveUserConfig(name, { id_type, id_value }) {
    try {
        let userConfigValue = null;

        // Validate id_type
        const validIdTypes = ["id", "username", "email"]; // Add more if needed
        if (!validIdTypes.includes(id_type)) {
            throw new Error("Invalid id_type provided");
        }

        // Dynamically construct the query based on id_type
        const whereCondition = { [id_type]: id_value };
        const user = await prisma.user.findUnique({
            where: whereCondition,
            include: { userConfig: true },
        });

        // If user found, get the userConfig value by name
        if (user && user.userConfig) {
            const configEntry = user.userConfig.find((config) => config.name === name);
            if (configEntry) {
                userConfigValue = configEntry.value;
            }
        }

        return userConfigValue;
    } catch (error) {
        console.error("Error retrieving user config:", error);
        throw error;
    }
}
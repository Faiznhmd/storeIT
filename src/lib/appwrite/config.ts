export const appwriteConfig = {
  edpointurl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATBASE!,
  usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS!,
  filesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_FILES!,
  bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
  secretKey: process.env.NEXT_APPWRITE_KEY!,
};

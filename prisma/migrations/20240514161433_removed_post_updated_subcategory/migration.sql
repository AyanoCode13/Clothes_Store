/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `subcategory` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Subcategory" AS ENUM ('tops', 'bottoms', 'shoes', 'accessories', 'bags', 'hats', 'sale', 'popular');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_createdById_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "subcategory",
ADD COLUMN     "subcategory" "Subcategory" NOT NULL;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'user';

-- DropTable
DROP TABLE "Post";

-- DropEnum
DROP TYPE "Subcategiory";

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

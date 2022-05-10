-- CreateTable
CREATE TABLE "MoneyList" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "MoneyList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MoneyList" ADD CONSTRAINT "MoneyList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

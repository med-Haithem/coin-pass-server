-- CreateTable
CREATE TABLE "User" (
    "ID" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "ConvertHistory" (
    "ID" SERIAL NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "From" TEXT NOT NULL,
    "To" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "result" INTEGER NOT NULL,
    "UserID" INTEGER NOT NULL,

    CONSTRAINT "ConvertHistory_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- AddForeignKey
ALTER TABLE "ConvertHistory" ADD CONSTRAINT "ConvertHistory_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

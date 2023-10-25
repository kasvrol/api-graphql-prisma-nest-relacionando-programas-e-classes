-- CreateTable
CREATE TABLE "programas" (
    "programaId" SERIAL NOT NULL,
    "programaNome" TEXT NOT NULL,
    "classeId" INTEGER NOT NULL,

    CONSTRAINT "programas_pkey" PRIMARY KEY ("programaId")
);

-- CreateTable
CREATE TABLE "classes" (
    "classeId" SERIAL NOT NULL,
    "classeName" TEXT NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("classeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "programas_programaId_key" ON "programas"("programaId");

-- CreateIndex
CREATE UNIQUE INDEX "classes_classeId_key" ON "classes"("classeId");

-- AddForeignKey
ALTER TABLE "programas" ADD CONSTRAINT "programas_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES "classes"("classeId") ON DELETE RESTRICT ON UPDATE CASCADE;

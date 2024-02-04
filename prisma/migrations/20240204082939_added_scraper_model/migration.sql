-- CreateTable
CREATE TABLE "LeechedProducts" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "LeechedProducts_pkey" PRIMARY KEY ("id")
);

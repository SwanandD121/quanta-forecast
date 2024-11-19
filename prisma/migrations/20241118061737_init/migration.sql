-- CreateTable
CREATE TABLE "FinancialData" (
    "id" SERIAL NOT NULL,
    "stockId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "metricType" TEXT NOT NULL,
    "reported" BIGINT,
    "estimated" BIGINT,
    "currencyCode" TEXT,
    "high" BIGINT,
    "low" BIGINT,
    "median" BIGINT,
    "reportedDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FinancialData_pkey" PRIMARY KEY ("id")
);
